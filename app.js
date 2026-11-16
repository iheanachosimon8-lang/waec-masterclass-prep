const subjects=[
 {name:"Mathematics",icon:"∑",desc:"Numbers, algebra and geometry",questions:[
  {q:"What is 15% of 200?",a:["15","20","30","45"],c:2,e:"15% = 15/100. Therefore (15/100) × 200 = 30."},
  {q:"Solve: 3x + 5 = 20.",a:["3","5","7","15"],c:1,e:"Subtract 5 from both sides: 3x = 15. Divide by 3, so x = 5."},
  {q:"What is the area of a rectangle of length 8 cm and width 3 cm?",a:["11 cm²","22 cm²","24 cm²","48 cm²"],c:2,e:"Area of a rectangle = length × width = 8 × 3 = 24 cm²."},
  {q:"Express 0.75 as a fraction in its simplest form.",a:["1/4","1/2","3/4","4/5"],c:2,e:"0.75 = 75/100. Dividing numerator and denominator by 25 gives 3/4."},
  {q:"Evaluate: 2(4 + 3) − 5.",a:["7","9","14","19"],c:1,e:"Work inside the brackets first: 4 + 3 = 7. Then 2 × 7 − 5 = 14 − 5 = 9."},
  {q:"Find the simple interest on ₦5,000 at 4% per annum for 2 years.",a:["₦200","₦400","₦500","₦900"],c:1,e:"Simple interest = PRT/100 = 5000 × 4 × 2 / 100 = ₦400."},
  {q:"What is the median of 3, 5, 7, 9 and 11?",a:["5","7","8","9"],c:1,e:"The median is the middle value when the numbers are arranged in order. The middle value is 7."},
  {q:"Simplify the ratio 18:24.",a:["2:3","3:4","4:5","6:8"],c:1,e:"Divide both terms by their highest common factor, 6. The ratio becomes 3:4."},
  {q:"If a fair die is rolled once, what is the probability of getting an even number?",a:["1/6","1/3","1/2","2/3"],c:2,e:"The even outcomes are 2, 4 and 6. Probability = 3/6 = 1/2."},
  {q:"Convert 2.5 kilometres to metres.",a:["25 m","250 m","2,500 m","25,000 m"],c:2,e:"1 kilometre = 1,000 metres, so 2.5 × 1,000 = 2,500 metres."}
 ]},
 {name:"English Language",icon:"Aa",desc:"Grammar, vocabulary and comprehension",questions:[
  {q:"Choose the correctly spelt word.",a:["Accomodation","Accommodation","Acommodation","Acomodation"],c:1,e:"Accommodation is spelt with double c and double m."},
  {q:"Which word is a synonym of 'brief'?",a:["Short","Heavy","Loud","Late"],c:0,e:"Brief means short in duration or length."},
  {q:"Choose the correct sentence.",a:["She have gone home.","She has gone home.","She having gone home.","She gone home."],c:1,e:"The singular subject 'she' takes 'has' in the present perfect tense."},
  {q:"What is the plural of 'criterion'?",a:["Criterions","Criteria","Criterias","Criterion"],c:1,e:"The plural form of criterion is criteria."},
  {q:"Choose the word opposite in meaning to 'scarce'.",a:["Rare","Plentiful","Limited","Few"],c:1,e:"Scarce means insufficient or hard to find; plentiful means available in large quantities."},
  {q:"Identify the adverb in: 'The athlete ran quickly.'",a:["Athlete","Ran","Quickly","The"],c:2,e:"'Quickly' describes how the athlete ran, so it is an adverb."},
  {q:"Choose the correct question tag: 'They are ready, ...?'",a:["are they","aren't they","isn't it","don't they"],c:1,e:"A positive statement with 'are' takes the negative tag 'aren't they'."},
  {q:"Which of these is a conjunction?",a:["Beautiful","Although","Quickly","Happiness"],c:1,e:"'Although' is a subordinating conjunction used to link contrasting ideas."},
  {q:"Choose the correct reported speech for: He said, 'I am tired.'",a:["He said that I am tired.","He said that he was tired.","He says he tired.","He said he is tire."],c:1,e:"In reported speech, 'I' changes to 'he' and the present 'am' commonly shifts to past 'was'."},
  {q:"A group of words that expresses a complete thought is a…",a:["Phrase","Clause","Sentence","Syllable"],c:2,e:"A sentence expresses a complete thought and normally contains a subject and a predicate."}
 ]},
 {name:"Biology",icon:"⌬",desc:"Living things and life processes",questions:[
  {q:"Which cell structure controls most cell activities?",a:["Cell wall","Nucleus","Vacuole","Cytoplasm"],c:1,e:"The nucleus contains genetic material and controls many cell activities."},
  {q:"Which process do green plants use to make food?",a:["Respiration","Transpiration","Photosynthesis","Excretion"],c:2,e:"Photosynthesis uses light energy to make glucose from carbon dioxide and water."},
  {q:"Which blood cells help the body fight infection?",a:["Red blood cells","White blood cells","Platelets","Plasma"],c:1,e:"White blood cells help defend the body against pathogens."},
  {q:"The basic unit of life is the…",a:["Tissue","Organ","Cell","System"],c:2,e:"The cell is the smallest structural and functional unit of a living organism."},
  {q:"Which part of a flower produces pollen?",a:["Stigma","Anther","Ovary","Sepal"],c:1,e:"The anther is part of the stamen and produces pollen grains."},
  {q:"Which organ pumps blood around the human body?",a:["Liver","Lung","Heart","Kidney"],c:2,e:"The heart contracts rhythmically to pump blood through the circulatory system."},
  {q:"The loss of water vapour from the aerial parts of a plant is called…",a:["Osmosis","Transpiration","Pollination","Germination"],c:1,e:"Transpiration is the loss of water vapour, mainly through stomata in leaves."},
  {q:"Which organism is a decomposer?",a:["Grass","Goat","Mushroom","Eagle"],c:2,e:"Fungi such as mushrooms break down dead organic matter and recycle nutrients."},
  {q:"Which nutrient is mainly needed for growth and repair of body tissues?",a:["Protein","Vitamin C","Water","Carbohydrate"],c:0,e:"Proteins supply amino acids used to build and repair body tissues."},
  {q:"The exchange of gases in human lungs takes place in the…",a:["Trachea","Bronchi","Alveoli","Diaphragm"],c:2,e:"Alveoli are tiny air sacs with thin walls and a rich blood supply for gas exchange."}
 ]},
 {name:"Chemistry",icon:"⚗",desc:"Matter, reactions and elements",questions:[
  {q:"What is the chemical symbol for sodium?",a:["So","S","Na","N"],c:2,e:"The chemical symbol for sodium is Na, from the Latin name natrium."},
  {q:"A substance with pH 3 is…",a:["Acidic","Neutral","Alkaline","A metal"],c:0,e:"A pH below 7 indicates an acidic solution."},
  {q:"Which gas is released when an acid reacts with a carbonate?",a:["Oxygen","Hydrogen","Nitrogen","Carbon dioxide"],c:3,e:"Acid + carbonate produces a salt, water and carbon dioxide."},
  {q:"What is the formula of water?",a:["CO₂","H₂O","O₂","NaCl"],c:1,e:"A water molecule contains two hydrogen atoms and one oxygen atom: H₂O."},
  {q:"Which of these is a noble gas?",a:["Chlorine","Neon","Sodium","Calcium"],c:1,e:"Neon is a Group 18 noble gas and is generally unreactive."},
  {q:"What is the atomic number of an element?",a:["Number of neutrons","Number of protons","Protons plus neutrons","Number of shells"],c:1,e:"The atomic number is the number of protons in the nucleus of an atom."},
  {q:"Which method is suitable for separating sand from water?",a:["Distillation","Filtration","Chromatography","Sublimation"],c:1,e:"Filtration uses a porous medium to separate an insoluble solid from a liquid."},
  {q:"A chemical bond formed by transfer of electrons is called…",a:["Covalent","Metallic","Ionic","Hydrogen"],c:2,e:"Ionic bonding involves electron transfer, producing oppositely charged ions."},
  {q:"What is the formula of carbon dioxide?",a:["CO","CO₂","C₂O","CaO"],c:1,e:"One carbon atom combines with two oxygen atoms to form CO₂."},
  {q:"Which change is a chemical change?",a:["Melting ice","Boiling water","Rusting iron","Breaking glass"],c:2,e:"Rusting forms new substances (iron oxides), so it is a chemical change."}
 ]},
 {name:"Physics",icon:"⚡",desc:"Energy, forces and motion",questions:[
  {q:"What is the SI unit of force?",a:["Joule","Watt","Newton","Pascal"],c:2,e:"Force is measured in newtons (N), named after Isaac Newton."},
  {q:"Which instrument measures electric current?",a:["Voltmeter","Ammeter","Thermometer","Barometer"],c:1,e:"An ammeter measures electric current and is connected in series."},
  {q:"Speed is calculated as…",a:["Distance ÷ time","Time ÷ distance","Mass × volume","Force ÷ area"],c:0,e:"Average speed = total distance travelled divided by total time taken."},
  {q:"Which form of energy is stored in a stretched spring?",a:["Chemical","Elastic potential","Sound","Nuclear"],c:1,e:"A stretched or compressed spring stores elastic potential energy."},
  {q:"What is the SI unit of power?",a:["Joule","Newton","Watt","Ampere"],c:2,e:"Power is the rate of doing work or transferring energy; its SI unit is the watt."},
  {q:"Which type of lens is used to correct short-sightedness?",a:["Convex","Concave","Cylindrical only","Plane glass"],c:1,e:"A concave (diverging) lens spreads incoming light rays so the image focuses on the retina."},
  {q:"The approximate speed of light in a vacuum is…",a:["3 × 10⁶ m/s","3 × 10⁸ m/s","3 × 10⁵ m/s","300 m/s"],c:1,e:"Light travels in a vacuum at approximately 3 × 10⁸ metres per second."},
  {q:"Which instrument is used to measure temperature?",a:["Barometer","Thermometer","Ammeter","Hydrometer"],c:1,e:"A thermometer measures temperature."},
  {q:"If a force of 10 N moves an object 3 m in its direction, the work done is…",a:["3 J","10 J","13 J","30 J"],c:3,e:"Work done = force × distance in the direction of the force = 10 × 3 = 30 J."},
  {q:"Which energy transfer occurs when the Sun warms the Earth?",a:["Conduction only","Convection only","Radiation","Evaporation"],c:2,e:"Radiation transfers energy through electromagnetic waves and does not require a material medium."}
 ]},
 {name:"Economics",icon:"₦",desc:"Markets, resources and choices",questions:[
  {q:"What is the basic economic problem?",a:["Inflation","Scarcity","Unemployment","Taxation"],c:1,e:"Scarcity arises because resources are limited while human wants are many."},
  {q:"Demand generally means the quantity consumers are willing and able to…",a:["Produce","Buy","Export","Store"],c:1,e:"Demand is the quantity of a good consumers are willing and able to buy at a given price and time."},
  {q:"Which is a factor of production?",a:["Advertising","Land","Price","Profit"],c:1,e:"The traditional factors of production are land, labour, capital and entrepreneurship."},
  {q:"Opportunity cost is the…",a:["Total money spent","Next best alternative forgone","Market price","Government tax"],c:1,e:"Opportunity cost is the value of the next best alternative given up when making a choice."},
  {q:"A market with many buyers and sellers selling similar products is closest to…",a:["Monopoly","Perfect competition","Monopsony","Oligopoly"],c:1,e:"Perfect competition is characterised by many buyers and sellers and relatively homogeneous products."},
  {q:"What happens to quantity demanded when price falls, other things being equal?",a:["It usually rises","It always falls","It becomes zero","It never changes"],c:0,e:"The law of demand states that lower prices generally lead to a higher quantity demanded, other things being equal."},
  {q:"Which institution is commonly responsible for issuing a country's currency?",a:["Commercial bank","Central bank","Insurance company","Stock exchange"],c:1,e:"A country's central bank generally has responsibility for issuing its currency and managing monetary policy."},
  {q:"A tax imposed on imported goods is called…",a:["Excise duty","Income tax","Import tariff","Value added tax"],c:2,e:"An import tariff is a tax or duty charged on goods brought into a country."},
  {q:"Inflation refers to…",a:["A general rise in prices","A fall in population","An increase in exports only","A fall in all wages"],c:0,e:"Inflation is a sustained increase in the general price level of goods and services."},
  {q:"Which of these is a direct tax?",a:["Import duty","Value added tax","Personal income tax","Sales tax"],c:2,e:"Personal income tax is imposed directly on an individual's income."}
 ]}
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