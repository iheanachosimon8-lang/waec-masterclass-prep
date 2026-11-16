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
  {q:"Convert 2.5 kilometres to metres.",a:["25 m","250 m","2,500 m","25,000 m"],c:2,e:"1 kilometre = 1,000 metres, so 2.5 × 1,000 = 2,500 metres."},
  {q:"A trader buys an item for ₦800 and sells it for ₦1,000. What is the profit?",a:["₦100","₦200","₦800","₦1,800"],c:1,e:"Profit = selling price − cost price = ₦200."},
  {q:"Solve: 5y = 45.",a:["5","8","9","10"],c:2,e:"Divide both sides by 5: y = 9."},
  {q:"Find the perimeter of a square of side 6 cm.",a:["12 cm","18 cm","24 cm","36 cm"],c:2,e:"Perimeter = 4 × side = 24 cm."},
  {q:"What is the next number in 2, 5, 8, 11, ...?",a:["12","13","14","15"],c:2,e:"The sequence increases by 3; the next term is 14."},
  {q:"Factorise x² + 5x.",a:["x(x + 5)","x(x − 5)","5(x + 1)","x²(5)"],c:0,e:"Taking out the common factor x gives x(x + 5)."},
  {q:"Find the mean of 4, 6, 8 and 10.",a:["6","7","8","9"],c:1,e:"The sum is 28; 28 ÷ 4 = 7."},
  {q:"Convert 3/5 to a percentage.",a:["30%","50%","60%","80%"],c:2,e:"3/5 × 100% = 60%."},
  {q:"An angle on a straight line is 125°. Find the adjacent angle.",a:["45°","55°","65°","125°"],c:1,e:"Angles on a straight line total 180°; 180° − 125° = 55°."},
  {q:"If x = 4, evaluate 2x².",a:["16","24","32","64"],c:2,e:"2 × 4² = 32."},
  {q:"A car travels 150 km in 3 hours. Find its average speed.",a:["30 km/h","45 km/h","50 km/h","60 km/h"],c:2,e:"Average speed = distance ÷ time = 150 ÷ 3 = 50 km/h."}
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
  {q:"A group of words that expresses a complete thought is a…",a:["Phrase","Clause","Sentence","Syllable"],c:2,e:"A sentence expresses a complete thought and normally contains a subject and a predicate."},
  {q:"Choose the correctly punctuated sentence.",a:["Where are you going.","Where are you going?","Where are you going!","Where are you going,"],c:1,e:"A direct question ends with a question mark."},
  {q:"Which word is a noun in: 'The children laughed loudly.'?",a:["The","children","laughed","loudly"],c:1,e:"'Children' names people and functions as the noun."},
  {q:"Choose the correct verb: 'Neither of the boys ___ present.'",a:["were","are","was","have"],c:2,e:"'Neither' is singular here, so it takes 'was'."},
  {q:"The expression 'once in a blue moon' means…",a:["Every day","Very rarely","At night","Very quickly"],c:1,e:"The idiom means something happens very rarely."},
  {q:"Choose the word nearest in meaning to 'diligent'.",a:["Lazy","Careful and hardworking","Careless","Impatient"],c:1,e:"A diligent person is careful, persistent and hardworking."},
  {q:"Choose the passive form of 'The teacher praised Ada'.",a:["Ada praised the teacher.","Ada was praised by the teacher.","The teacher was praised by Ada.","Ada is praising the teacher."],c:1,e:"The object becomes the subject: Ada was praised by the teacher."},
  {q:"Choose the correct spelling.",a:["Separate","Seperate","Seperrate","Sepparate"],c:0,e:"The correct spelling is 'separate'."},
  {q:"What is the function of an adjective?",a:["To name an action","To describe a noun","To join clauses","To show time"],c:1,e:"An adjective describes or modifies a noun or pronoun."},
  {q:"Choose the correct completion: 'If I ___ you, I would apologise.'",a:["am","was","were","be"],c:2,e:"'Were' is used in this hypothetical condition."},
  {q:"A person who writes poems is a…",a:["Novelist","Poet","Playwright","Journalist"],c:1,e:"A poet is a person who writes poetry."}
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
  {q:"The exchange of gases in human lungs takes place in the…",a:["Trachea","Bronchi","Alveoli","Diaphragm"],c:2,e:"Alveoli are tiny air sacs with thin walls and a rich blood supply for gas exchange."},
  {q:"Which blood component helps blood to clot?",a:["Plasma","Platelets","Red blood cells","White blood cells"],c:1,e:"Platelets help form clots and reduce blood loss."},
  {q:"Which organ filters wastes from the blood to form urine?",a:["Heart","Kidney","Stomach","Pancreas"],c:1,e:"The kidneys filter blood and regulate water and salt balance."},
  {q:"Which gas is absorbed by green plants during photosynthesis?",a:["Oxygen","Nitrogen","Carbon dioxide","Hydrogen"],c:2,e:"Plants use carbon dioxide and water to produce glucose during photosynthesis."},
  {q:"The fusion of male and female gametes is called…",a:["Pollination","Fertilisation","Germination","Budding"],c:1,e:"Fertilisation is the fusion of male and female gamete nuclei."},
  {q:"Which part of the digestive system absorbs most digested nutrients?",a:["Stomach","Small intestine","Large intestine","Oesophagus"],c:1,e:"Villi in the small intestine provide a large surface area for absorption."},
  {q:"An organism that makes its own food is called a…",a:["Consumer","Producer","Parasite","Scavenger"],c:1,e:"Producers such as green plants make organic food."},
  {q:"Which of these is a vertebrate?",a:["Earthworm","Snail","Tilapia","Cockroach"],c:2,e:"Tilapia is a fish and has a backbone."},
  {q:"The male reproductive part of a flower is the…",a:["Pistil","Stamen","Sepal","Petal"],c:1,e:"The stamen is the male part of a flower."},
  {q:"Which process releases energy from food in cells?",a:["Photosynthesis","Respiration","Transpiration","Excretion"],c:1,e:"Cellular respiration breaks down food molecules to release usable energy."},
  {q:"A habitat is best described as…",a:["The food an animal eats","The place where an organism lives","A group of organs","A type of cell"],c:1,e:"A habitat is the natural place or environment in which an organism lives."}
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
  {q:"Which change is a chemical change?",a:["Melting ice","Boiling water","Rusting iron","Breaking glass"],c:2,e:"Rusting forms new substances (iron oxides), so it is a chemical change."},
  {q:"Which particle has a negative charge?",a:["Proton","Neutron","Electron","Nucleus"],c:2,e:"An electron carries a negative electric charge."},
  {q:"What is the usual valency of oxygen in many compounds?",a:["1","2","3","4"],c:1,e:"Oxygen commonly has valency 2."},
  {q:"Which substance turns blue litmus paper red?",a:["An acid","An alkali","Pure water","A salt solution only"],c:0,e:"Acids turn blue litmus paper red."},
  {q:"The change of a liquid to gas at its surface is…",a:["Freezing","Condensation","Evaporation","Melting"],c:2,e:"Evaporation occurs at the surface and can happen below boiling point."},
  {q:"Which gas supports combustion?",a:["Carbon dioxide","Oxygen","Nitrogen","Hydrogen"],c:1,e:"Oxygen supports combustion, although it is not itself a fuel."},
  {q:"Salt can be recovered from salt water by…",a:["Magnetic separation","Evaporation","Sieving","Filtration"],c:1,e:"Evaporating the water leaves the dissolved salt behind."},
  {q:"Which of these is a chemical property?",a:["Density","Melting point","Flammability","Colour"],c:2,e:"Flammability describes a substance's ability to react with oxygen."},
  {q:"What is the relative molecular mass of H₂O? (H = 1, O = 16)",a:["16","17","18","20"],c:2,e:"(2 × 1) + 16 = 18."},
  {q:"Which element is a metal?",a:["Sulfur","Carbon","Copper","Oxygen"],c:2,e:"Copper is a metal and conducts heat and electricity."},
  {q:"A catalyst is a substance that…",a:["Stops every reaction","Changes reaction rate without being used up","Always becomes a product","Raises product mass"],c:1,e:"A catalyst changes reaction rate and is regenerated at the end."}
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
  {q:"Which energy transfer occurs when the Sun warms the Earth?",a:["Conduction only","Convection only","Radiation","Evaporation"],c:2,e:"Radiation transfers energy through electromagnetic waves and does not require a material medium."},
  {q:"What is the SI unit of electric current?",a:["Volt","Ohm","Ampere","Watt"],c:2,e:"Electric current is measured in amperes (A)."},
  {q:"The force that opposes motion between surfaces in contact is…",a:["Gravity","Friction","Upthrust","Magnetism"],c:1,e:"Friction opposes relative motion between surfaces in contact."},
  {q:"Which simple machine is commonly used to draw water from a well?",a:["Pulley","Wedge","Screw","Inclined plane"],c:0,e:"A pulley changes the direction of an applied force."},
  {q:"What is the unit of electrical resistance?",a:["Ampere","Volt","Ohm","Coulomb"],c:2,e:"Electrical resistance is measured in ohms (Ω)."},
  {q:"The law of inertia is also known as…",a:["Newton's first law","Newton's second law","Newton's third law","Law of gravitation"],c:0,e:"Newton's first law states that an object maintains its state unless acted on by a resultant force."},
  {q:"Which colour of visible light has the longest wavelength?",a:["Violet","Blue","Green","Red"],c:3,e:"Red light has the longest wavelength in the visible spectrum."},
  {q:"The image formed by a plane mirror is…",a:["Real and inverted","Virtual and upright","Real and enlarged","Virtual and inverted"],c:1,e:"A plane mirror forms a virtual, upright image of the same size."},
  {q:"What is the weight of a 2 kg mass where g = 10 m/s²?",a:["2 N","5 N","20 N","200 N"],c:2,e:"Weight = mass × gravitational field strength = 2 × 10 = 20 N."},
  {q:"Heat transfer through a solid mainly occurs by…",a:["Conduction","Convection","Radiation","Reflection"],c:0,e:"Conduction transfers thermal energy through a material."},
  {q:"A transformer works with…",a:["Direct current only","Alternating current","Static charge only","Chemical energy"],c:1,e:"A transformer uses changing magnetic flux and operates with alternating current."}
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
  {q:"Which of these is a direct tax?",a:["Import duty","Value added tax","Personal income tax","Sales tax"],c:2,e:"Personal income tax is imposed directly on an individual's income."},
  {q:"The reward earned by labour is…",a:["Rent","Wages","Interest","Profit"],c:1,e:"Labour receives wages or salaries."},
  {q:"The reward for the use of capital is…",a:["Rent","Wages","Interest","Profit"],c:2,e:"Interest is the traditional reward for capital."},
  {q:"When supply increases and demand remains unchanged, equilibrium price generally…",a:["Rises","Falls","Stays always zero","Doubles"],c:1,e:"An increase in supply tends to lower equilibrium price, other things equal."},
  {q:"A persistent fall in the general price level is called…",a:["Inflation","Deflation","Stagflation","Depreciation"],c:1,e:"Deflation is a sustained decrease in the general price level."},
  {q:"Which economic system relies mainly on private ownership and market forces?",a:["Command economy","Capitalist economy","Traditional economy only","Subsistence economy"],c:1,e:"A capitalist or market economy relies substantially on private ownership and market allocation."},
  {q:"The total value of final goods and services produced within a country is…",a:["GDP","Import bill","National debt","Balance of trade"],c:0,e:"GDP measures the value of final output produced within a country's borders."},
  {q:"A budget in which revenue equals expenditure is…",a:["Surplus budget","Deficit budget","Balanced budget","Capital budget"],c:2,e:"A balanced budget occurs when planned revenue equals planned expenditure."},
  {q:"Which of these is a function of money?",a:["Causing scarcity","Medium of exchange","Producing all goods","Removing opportunity cost"],c:1,e:"Money serves as a medium of exchange, among other functions."},
  {q:"Unemployment occurs when people willing and able to work…",a:["Are all self-employed","Cannot find jobs","Choose to retire","Are in full-time education"],c:1,e:"Unemployment includes people available for and seeking work who cannot find jobs."},
  {q:"Specialisation can increase output mainly because it…",a:["Reduces all needs","Allows workers to focus on tasks","Removes scarcity","Makes resources unlimited"],c:1,e:"Specialisation can improve efficiency and productivity through focused tasks."}
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