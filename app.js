const subjects=[
 {name:"Mathematics",icon:"∑",desc:"Numbers, algebra and geometry",questions:[
  {q:"What is 15% of 200?",a:["15","20","30","45"],c:2,e:"15% = 15/100. Therefore (15/100) × 200 = 30."},
  {q:"Solve: 3x + 5 = 20.",a:["3","5","7","15"],c:1,e:"Subtract 5 from both sides: 3x = 15. Divide by 3, so x = 5."},
  {q:"What is the area of a rectangle of length 8 cm and width 3 cm?",a:["11 cm²","22 cm²","24 cm²","48 cm²"],c:2,e:"Area of a rectangle = length × width = 8 × 3 = 24 cm²."},
  {q:"Express 0.75 as a fraction in its simplest form.",a:["1/4","1/2","3/4","4/5"],c:2,e:"0.75 = 75/100. Dividing numerator and denominator by 25 gives 3/4."}]},
 {name:"English Language",icon:"Aa",desc:"Grammar, vocabulary and comprehension",questions:[
  {q:"Choose the correctly spelt word.",a:["Accomodation","Accommodation","Acommodation","Acomodation"],c:1,e:"Accommodation is spelt with double c and double m."},
  {q:"Which word is a synonym of 'brief'?",a:["Short","Heavy","Loud","Late"],c:0,e:"Brief means short in duration or length."},
  {q:"Choose the correct sentence.",a:["She have gone home.","She has gone home.","She having gone home.","She gone home."],c:1,e:"The singular subject 'she' takes 'has' in the present perfect tense."},
  {q:"What is the plural of 'criterion'?",a:["Criterions","Criteria","Criterias","Criterion"],c:1,e:"The plural form of criterion is criteria."}]},
 {name:"Biology",icon:"⌬",desc:"Living things and life processes",questions:[
  {q:"Which cell structure controls most cell activities?",a:["Cell wall","Nucleus","Vacuole","Cytoplasm"],c:1,e:"The nucleus contains genetic material and controls many cell activities."},
  {q:"Which process do green plants use to make food?",a:["Respiration","Transpiration","Photosynthesis","Excretion"],c:2,e:"Photosynthesis uses light energy to make glucose from carbon dioxide and water."},
  {q:"Which blood cells help the body fight infection?",a:["Red blood cells","White blood cells","Platelets","Plasma"],c:1,e:"White blood cells help defend the body against pathogens."},
  {q:"The basic unit of life is the…",a:["Tissue","Organ","Cell","System"],c:2,e:"The cell is the smallest structural and functional unit of a living organism."}]},
 {name:"Chemistry",icon:"⚗",desc:"Matter, reactions and elements",questions:[
  {q:"What is the chemical symbol for sodium?",a:["So","S","Na","N"],c:2,e:"The chemical symbol for sodium is Na, from the Latin name natrium."},
  {q:"A substance with pH 3 is…",a:["Acidic","Neutral","Alkaline","A metal"],c:0,e:"A pH below 7 indicates an acidic solution."},
  {q:"Which gas is released when an acid reacts with a carbonate?",a:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],c:3,e:"Acid + carbonate produces a salt, water and carbon dioxide."},
  {q:"What is the formula of water?",a:["CO₂","H₂O","O₂","NaCl"],c:1,e:"A water molecule contains two hydrogen atoms and one oxygen atom: H₂O."}]},
 {name:"Physics",icon:"⚡",desc:"Energy, forces and motion",questions:[
  {q:"What is the SI unit of force?",a:["Joule","Watt","Newton","Pascal"],c:2,e:"Force is measured in newtons (N), named after Isaac Newton."},
  {q:"Which instrument measures electric current?",a:["Voltmeter","Ammeter","Thermometer","Barometer"],c:1,e:"An ammeter measures electric current and is connected in series."},
  {q:"Speed is calculated as…",a:["Distance ÷ time","Time ÷ distance","Mass × volume","Force ÷ area"],c:0,e:"Average speed = total distance travelled divided by total time taken."},
  {q:"Which form of energy is stored in a stretched spring?",a:["Chemical","Elastic potential","Sound","Nuclear"],c:1,e:"A stretched or compressed spring stores elastic potential energy."}]},
 {name:"Economics",icon:"₦",desc:"Markets, resources and choices",questions:[
  {q:"What is the basic economic problem?",a:["Inflation","Scarcity","Unemployment","Taxation"],c:1,e:"Scarcity arises because resources are limited while human wants are many."},
  {q:"Demand generally means the quantity consumers are willing and able to…",a:["Produce","Buy","Export","Store"],c:1,e:"Demand is the quantity of a good consumers are willing and able to buy at a given price and time."},
  {q:"Which is a factor of production?",a:["Advertising","Land","Price","Profit"],c:1,e:"The traditional factors of production are land, labour, capital and entrepreneurship."},
  {q:"Opportunity cost is the…",a:["Total money spent","Next best alternative forgone","Market price","Government tax"],c:1,e:"Opportunity cost is the value of the next best alternative given up when making a choice."}]}
];
const grid=document.getElementById("subjectGrid"),panel=document.getElementById("quizPanel");
let current=null,index=0,answers=[],seconds=0,tick=null,locked=false;
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("menuBtn").addEventListener("click",()=>document.getElementById("nav").classList.toggle("open"));
document.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("nav").classList.remove("open")));
document.getElementById("country").addEventListener("change",e=>{localStorage.setItem("wmp-country",e.target.value);});
const saved=localStorage.getItem("wmp-country");if(saved)document.getElementById("country").value=saved;
function renderSubjects(){grid.innerHTML=subjects.map((s,i)=>`<button class="subject-card" data-index="${i}"><span class="subject-icon">${s.icon}</span><h3>${s.name}</h3><p>${s.desc}</p><span class="start-label">Start practice →</span></button>`).join("");grid.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>startQuiz(Number(b.dataset.index))));}
function startQuiz(i){clearInterval(tick);current=subjects[i];index=0;answers=Array(current.questions.length).fill(null);seconds=0;locked=false;grid.querySelectorAll(".subject-card").forEach((b,n)=>b.classList.toggle("active",n===i));document.getElementById("practice").scrollIntoView({behavior:"smooth"});renderQuestion();tick=setInterval(()=>{seconds++;const t=document.getElementById("timer");if(t)t.textContent="⏱ "+formatTime(seconds);},1000);}
function formatTime(s){return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");}
function renderQuestion(){const q=current.questions[index];panel.innerHTML=`<div class="quiz-head"><span>${current.name.toUpperCase()} · QUESTION ${index+1}/${current.questions.length}</span><span class="timer" id="timer">⏱ ${formatTime(seconds)}</span></div><div class="question">${q.q}</div><div class="answers">${q.a.map((a,i)=>`<button class="answer ${answers[index]===i?"selected":""}" data-answer="${i}" ${answers[index]!==null?"disabled":""}>${String.fromCharCode(65+i)}. &nbsp;${a}</button>`).join("")}</div><div id="feedback"></div><div class="quiz-controls"><button class="small-btn" id="back" ${index===0?"disabled":""}>← Previous</button><button class="small-btn" id="next" ${answers[index]===null?"disabled":""}>${index===current.questions.length-1?"Finish test":"Next question →"}</button></div>`;panel.querySelectorAll("[data-answer]").forEach(b=>b.addEventListener("click",()=>chooseAnswer(Number(b.dataset.answer))));document.getElementById("back").addEventListener("click",()=>{if(index>0){index--;renderQuestion();}});document.getElementById("next").addEventListener("click",()=>{if(index<current.questions.length-1){index++;renderQuestion();}else showResult();});}
function chooseAnswer(n){if(answers[index]!==null)return;answers[index]=n;const q=current.questions[index];panel.querySelectorAll(".answer").forEach(b=>{b.disabled=true;const v=Number(b.dataset.answer);if(v===q.c)b.classList.add("correct");if(v===n&&n!==q.c)b.classList.add("wrong");});document.getElementById("feedback").innerHTML=`<div class="explanation"><b>${n===q.c?"Correct!":"Not quite."}</b> ${q.e}</div>`;document.getElementById("next").disabled=false;}
function showResult(){clearInterval(tick);const score=answers.reduce((sum,a,i)=>sum+(a===current.questions[i].c?1:0),0);const percent=Math.round(score/current.questions.length*100);const history=JSON.parse(localStorage.getItem("wmp-history")||"{}");history[current.name]={best:Math.max(history[current.name]?.best||0,percent),attempts:(history[current.name]?.attempts||0)+1};localStorage.setItem("wmp-history",JSON.stringify(history));panel.innerHTML=`<div class="result"><span class="eyebrow">PRACTICE COMPLETE</span><h3>${current.name} result</h3><div class="result-score">${score}/${current.questions.length}</div><b>${percent}%</b><p>${percent>=75?"Great work! Keep practising to maintain your progress.":percent>=50?"Good effort. Review the explanations and try again.":"Keep learning. Review each explanation and give it another try."}</p><p>Time taken: ${formatTime(seconds)}</p><button class="small-btn" id="retry">Try this subject again</button></div>`;document.getElementById("retry").addEventListener("click",()=>startQuiz(subjects.indexOf(current)));}
renderSubjects();