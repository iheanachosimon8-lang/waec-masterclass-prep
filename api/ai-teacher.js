module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Use POST to ask the AI Teacher." });
  }
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "The AI Teacher is not activated yet. The site owner needs to add the OPENAI_API_KEY in Vercel Environment Variables." });
  }
  const allowedSubjects = ["Mathematics","English Language","Biology","Chemistry","Physics","Economics","Visual Arts","Financial Accounting","Commerce","Government","Literature-in-English"];
  const body = req.body || {};
  const subject = allowedSubjects.includes(body.subject) ? body.subject : null;
  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];
  if (!subject) return res.status(400).json({ error: "Please choose one of the available WAEC subjects." });
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Please enter a question for your AI Teacher." });
  }
  const input = messages.map(m => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: String(m.content || "").slice(0, 2000)
  }));
  if (!input[input.length - 1].content.trim()) return res.status(400).json({ error: "Your question is empty." });
  try {
    const upstream = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: { "Authorization": "Bearer " + apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: process.env.OPENAI_MODEL || "gpt-4.1-mini",
        instructions: "You are a patient, encouraging WAEC study teacher for West African secondary-school students. Teach the selected subject: " + subject + ". Explain at an appropriate secondary-school level using clear steps, definitions and worked examples when useful. For calculations, show the method and units. Ask a short follow-up practice question when appropriate. Be accurate, admit uncertainty, and never claim a prediction about examination questions. You are independent learning support, not an official WAEC service. Do not help with cheating in a live examination.",
        input,
        max_output_tokens: 900
      })
    });
    const data = await upstream.json();
    if (!upstream.ok) {
      console.error("AI provider error:", data);
      return res.status(502).json({ error: "The AI service could not answer just now. Please try again later." });
    }
    const reply = (data.output || []).flatMap(item => item.content || [])
      .filter(item => item.type === "output_text")
      .map(item => item.text).join("\n").trim();
    if (!reply) return res.status(502).json({ error: "No explanation was returned. Please try again." });
    return res.status(200).json({ reply });
  } catch (error) {
    console.error("AI Teacher request failed:", error);
    return res.status(500).json({ error: "A connection error occurred. Please try again." });
  }
};
