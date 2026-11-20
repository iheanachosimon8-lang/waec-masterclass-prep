module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Use POST to ask the AI Teacher." });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(503).json({ error: "The AI Teacher is not activated yet. The site owner needs to add GEMINI_API_KEY in Vercel Environment Variables." });
  }

  const allowedSubjects = ["Mathematics","English Language","Biology","Chemistry","Physics","Economics","Visual Arts","Financial Accounting","Commerce","Government","Literature-in-English"];
  const body = req.body || {};
  const subject = allowedSubjects.includes(body.subject) ? body.subject : null;
  const messages = Array.isArray(body.messages) ? body.messages.slice(-12) : [];

  if (!subject) return res.status(400).json({ error: "Please choose one of the available WAEC subjects." });
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return res.status(400).json({ error: "Please enter a question for your AI Teacher." });
  }

  const contents = messages.map(m => ({
    role: m.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m.content || "").slice(0, 2000) }]
  }));

  if (!contents[contents.length - 1].parts[0].text.trim()) {
    return res.status(400).json({ error: "Your question is empty." });
  }

  const systemInstruction = "You are a patient, encouraging WAEC study teacher for West African secondary-school students. Teach the selected subject: " + subject + ". Explain at an appropriate secondary-school level using clear steps, definitions and worked examples when useful. For calculations, show the method and units. Ask a short follow-up practice question when appropriate. Be accurate, admit uncertainty, and never claim a prediction about examination questions. You are independent learning support, not an official WAEC service. Do not help with cheating in a live examination.";

  try {
    const model = process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
    const upstream = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + encodeURIComponent(model) + ":generateContent", {
      method: "POST",
      headers: {
        "x-goog-api-key": apiKey,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        },
        contents,
        generationConfig: {
          maxOutputTokens: 900,
          temperature: 0.7
        }
      })
    });

    const data = await upstream.json().catch(() => ({}));
    if (!upstream.ok) {
      console.error("Gemini provider error:", {
        status: upstream.status,
        message: data.error && data.error.message ? data.error.message : "No provider message returned"
      });
      return res.status(502).json({ error: "The AI service could not answer just now. Please try again later." });
    }

    const reply = (data.candidates || [])
      .flatMap(candidate => candidate.content && candidate.content.parts ? candidate.content.parts : [])
      .map(part => part.text || "")
      .join("\n")
      .trim();

    if (!reply) {
      console.error("Gemini returned no text. Finish reason:", data.candidates && data.candidates[0] && data.candidates[0].finishReason);
      return res.status(502).json({ error: "No explanation was returned. Please try again." });
    }

    return res.status(200).json({ reply });
  } catch (error) {
    console.error("Gemini AI Teacher request failed:", error);
    return res.status(500).json({ error: "A connection error occurred. Please try again." });
  }
};
