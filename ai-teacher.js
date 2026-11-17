(() => {
  const form=document.getElementById("aiForm");
  if(!form)return;
  const subject=document.getElementById("aiSubject");
  const prompt=document.getElementById("aiPrompt");
  const messages=document.getElementById("aiMessages");
  const send=document.getElementById("aiSend");
  const status=document.getElementById("aiStatus");
  let conversation=[];
  function addMessage(text,kind){
    const bubble=document.createElement("div");
    bubble.className="ai-message "+(kind==="student"?"student-message":"teacher-message");
    bubble.textContent=text;
    messages.appendChild(bubble);
    messages.scrollTop=messages.scrollHeight;
  }
  subject.addEventListener("change",()=>{
    conversation=[];
    messages.innerHTML="";
    addMessage("Let’s study "+subject.value+". What topic or question would you like help with?","teacher");
  });
  form.addEventListener("submit",async event=>{
    event.preventDefault();
    const question=prompt.value.trim();
    if(!question)return;
    addMessage(question,"student");
    conversation.push({role:"user",content:question});
    prompt.value="";
    send.disabled=true;
    status.textContent="Preparing your explanation…";
    try{
      const response=await fetch("/api/ai-teacher",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({subject:subject.value,messages:conversation.slice(-12)})
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok)throw new Error(data.error||"The AI Teacher could not respond. Please try again.");
      const answer=String(data.reply||"I’m sorry, I could not prepare an answer. Please try again.");
      conversation.push({role:"assistant",content:answer});
      addMessage(answer,"teacher");
      status.textContent="Ready to help you learn";
    }catch(error){
      addMessage(error.message,"teacher");
      status.textContent="Connection needs attention";
      conversation.pop();
    }finally{
      send.disabled=false;
      prompt.focus();
    }
  });
})();
