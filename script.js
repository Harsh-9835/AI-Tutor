const lessons = [
  {title:"Newton’s Laws of Motion",subject:"Science",icon:"⚛",summary:"Understand how forces affect the movement of objects.",intro:"Newton’s laws describe the relationship between an object and the forces acting on it. They help explain everyday movement, from a ball rolling to a car stopping.",explanation:"The first law says an object stays at rest or keeps moving at a constant speed in a straight line unless an unbalanced external force acts on it. The second law connects force, mass and acceleration: F = m × a. The third law says every action force has an equal and opposite reaction force.",example:"When you push a shopping trolley, it accelerates. A stronger push creates more force and usually more acceleration, while a heavily loaded trolley needs more force for the same acceleration.",points:["An unbalanced force can change motion.","The second law is written as F = m × a.","Action and reaction forces act on different objects."],question:"Which equation represents Newton’s second law?",options:["F = m × a","V = I × R","P = W ÷ t"],answer:0},
  {title:"Photosynthesis",subject:"Science",icon:"🌱",summary:"How green plants prepare their own food.",intro:"Photosynthesis is the process by which green plants use light energy to make food from carbon dioxide and water.",explanation:"Chlorophyll in the leaves absorbs sunlight. The plant uses this energy to convert water and carbon dioxide into glucose, and oxygen is released. This process mainly takes place in the chloroplasts of plant cells.",example:"A plant kept in sunlight with enough water can photosynthesise and grow. A plant kept in darkness for a long time cannot photosynthesise normally.",points:["Sunlight provides the energy.","Chlorophyll absorbs light.","Carbon dioxide and water are used; glucose and oxygen are produced."],question:"Which green pigment absorbs light for photosynthesis?",options:["Haemoglobin","Chlorophyll","Melanin"],answer:1},
  {title:"Ohm’s Law",subject:"Science",icon:"⚡",summary:"Explore the relationship between voltage, current and resistance.",intro:"Ohm’s law explains how electric current depends on voltage and resistance in a conductor under constant physical conditions.",explanation:"The law states that current through a conductor is directly proportional to the voltage across it when temperature and other physical conditions remain constant. Its formula is V = I × R, where V is voltage, I is current and R is resistance.",example:"If a 6-ohm resistor is connected across a 12-volt supply, the current is I = V/R = 12/6 = 2 amperes.",points:["Formula: V = I × R.","Voltage is measured in volts.","Current is measured in amperes and resistance in ohms."],question:"What is the current for 12 V across 6 Ω?",options:["0.5 A","2 A","6 A"],answer:1},
  {title:"Quadratic Equations",subject:"Mathematics",icon:"∑",summary:"Learn the structure and solutions of a quadratic equation.",intro:"A quadratic equation is a polynomial equation in which the highest power of the variable is two.",explanation:"The standard form is ax² + bx + c = 0, where a, b and c are constants and a is not zero. It can be solved by factorisation, completing the square or the quadratic formula: x = (−b ± √(b² − 4ac)) / 2a.",example:"For x² − 5x + 6 = 0, factorise it as (x − 2)(x − 3) = 0. Therefore, x = 2 or x = 3.",points:["The highest power is 2.","The coefficient a cannot be zero.","The discriminant is b² − 4ac."],question:"What is the highest power in a quadratic equation?",options:["1","2","3"],answer:1},
  {title:"Fractions",subject:"Mathematics",icon:"½",summary:"Understand parts of a whole and basic fraction operations.",intro:"A fraction represents a part of a whole. It has a numerator on top and a denominator at the bottom.",explanation:"The numerator tells how many parts are selected. The denominator tells how many equal parts make the whole. To add or subtract fractions, first express them with a common denominator.",example:"One half plus one quarter is 2/4 + 1/4 = 3/4. The common denominator is 4.",points:["Numerator is the top number.","Denominator is the bottom number and cannot be zero.","Use a common denominator to add or subtract fractions."],question:"What is 1/2 + 1/4?",options:["2/6","3/4","1/8"],answer:1},
  {title:"Python Loops",subject:"Computer Science",icon:"⌘",summary:"Repeat a block of code using for and while loops.",intro:"A loop allows a program to execute the same block of instructions more than once, reducing repeated code.",explanation:"A for loop is commonly used to iterate over a sequence, such as a list or range. A while loop repeats as long as its condition is true. Make sure a while loop's condition eventually becomes false to avoid an unintended infinite loop.",example:"for number in range(1, 4): print(number) displays 1, 2 and 3 on separate lines.",points:["for loops iterate over a sequence.","while loops depend on a condition.","Indentation defines the loop body in Python."],question:"Which loop is commonly used to iterate over a list?",options:["for loop","if statement","def statement"],answer:0},
  {title:"Database Management System",subject:"Computer Science",icon:"▤",summary:"Learn how databases organise and manage information.",intro:"A Database Management System (DBMS) is software that helps users create, store, organise, retrieve and manage data.",explanation:"A DBMS provides a structured way to work with data. In a relational database, information is organised into tables containing rows and columns. SQL is commonly used to create tables and query or modify the data.",example:"A college database may have a Students table with columns such as Student_ID, Name and Course. A query can retrieve the students enrolled in a particular course.",points:["A DBMS manages stored data.","Relational databases use tables.","SQL is widely used with relational databases."],question:"What is a common language used to query relational databases?",options:["HTML","SQL","CSS"],answer:1},
  {title:"Artificial Intelligence",subject:"Computer Science",icon:"✧",summary:"Discover how computers perform tasks that usually need human intelligence.",intro:"Artificial Intelligence (AI) is a field of computing focused on building systems that can perform tasks such as recognising patterns, understanding language and making predictions.",explanation:"AI systems use methods such as machine learning to identify patterns in data. They can support tasks like translation, recommendations and image recognition. AI tools can make mistakes, so important information should be checked.",example:"A music app may analyse the songs a listener enjoys and recommend other songs with similar patterns.",points:["AI is a broad field of computer science.","Machine learning is one approach used in AI.","AI output should be reviewed for accuracy."],question:"Which is an example of an AI-supported task?",options:["Pattern recognition","A paper notebook","A simple ruler"],answer:0},
  {title:"Supply and Demand",subject:"Business",icon:"↗",summary:"See how buyers and sellers influence market prices.",intro:"Supply and demand are two important forces that influence the price and quantity of goods in a market.",explanation:"Demand describes how much consumers are willing and able to buy at different prices. Supply describes how much producers are willing and able to sell. In a simplified market model, the price tends to move toward a point where quantity supplied equals quantity demanded.",example:"If many people want a popular product but only a few units are available, its price may rise. If supply increases while demand stays similar, the price may fall.",points:["Demand comes from buyers.","Supply comes from sellers.","Market equilibrium occurs where quantity supplied equals quantity demanded."],question:"Who creates demand in a market?",options:["Consumers","Only producers","Only banks"],answer:0},
  {title:"Climate Change",subject:"Humanities",icon:"☼",summary:"Understand long-term changes in Earth's climate.",intro:"Climate change refers to long-term shifts in temperatures and weather patterns. Some changes occur naturally, but recent global warming is mainly driven by human activities.",explanation:"Burning fossil fuels releases greenhouse gases such as carbon dioxide. These gases trap additional heat in the atmosphere. Reducing emissions, improving energy efficiency and protecting ecosystems are important responses.",example:"Using renewable electricity instead of electricity generated from coal can reduce greenhouse gas emissions.",points:["Climate describes long-term weather patterns.","Greenhouse gases trap heat in the atmosphere.","Reducing emissions helps limit human-caused warming."],question:"Which gas is released in large amounts when fossil fuels are burned?",options:["Oxygen","Carbon dioxide","Helium"],answer:1},
  {title:"The Cell",subject:"Science",icon:"◉",summary:"Explore the basic structural and functional unit of life.",intro:"A cell is the smallest unit of a living organism that can carry out the basic processes of life.",explanation:"Many cells contain a cell membrane, cytoplasm and genetic material. In plant and animal cells, the nucleus stores most of the genetic information. Plant cells also typically have a cell wall and chloroplasts.",example:"A leaf is made of many plant cells. Chloroplasts in these cells help the plant carry out photosynthesis.",points:["Cells are basic units of life.","The cell membrane controls movement into and out of the cell.","Plant cells have a cell wall; animal cells do not."],question:"Which structure controls many activities of a eukaryotic cell?",options:["Nucleus","Cell wall","Rib cage"],answer:0}
];

const grid = document.getElementById("topic-grid");
const searchInput = document.getElementById("topic-search");
const emptyState = document.getElementById("empty-state");
const lessonCard = document.getElementById("lesson-card");
const lessonEmpty = document.querySelector(".lesson-empty");
let selectedSubject = "All";

function renderTopics(){
  const term = searchInput.value.trim().toLowerCase();
  const visible = lessons.filter(item =>
    (selectedSubject === "All" || item.subject === selectedSubject) &&
    (item.title.toLowerCase().includes(term) || item.summary.toLowerCase().includes(term) || item.subject.toLowerCase().includes(term))
  );
  grid.innerHTML = visible.map(item => `
    <button class="topic-card" data-title="${item.title.replaceAll('"','&quot;')}">
      <span class="topic-icon">${item.icon}</span>
      <small>${item.subject}</small>
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
    </button>`).join("");
  emptyState.classList.toggle("hidden", visible.length !== 0);
  grid.querySelectorAll(".topic-card").forEach(button => {
    button.addEventListener("click", () => showLesson(button.dataset.title));
  });
}

function showLesson(title){
  const item = lessons.find(lesson => lesson.title === title);
  if (!item) return;
  lessonEmpty.classList.add("hidden");
  lessonCard.classList.remove("hidden");
  document.getElementById("lesson-subject").textContent = item.subject;
  document.getElementById("lesson-title").textContent = item.title;
  document.getElementById("lesson-intro").textContent = item.intro;
  document.getElementById("lesson-explanation").textContent = item.explanation;
  document.getElementById("lesson-example").textContent = item.example;
  document.getElementById("lesson-points").innerHTML = item.points.map(point => `<li>${point}</li>`).join("");
  document.getElementById("quiz-question").textContent = item.question;
  document.getElementById("quiz-feedback").textContent = "";
  const options = document.getElementById("quiz-options");
  options.innerHTML = item.options.map((option,index) => `<button class="quiz-option" data-index="${index}">${option}</button>`).join("");
  options.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
    if (options.dataset.answered === "true") return;
    options.dataset.answered = "true";
    const chosen = Number(button.dataset.index);
    const correct = chosen === item.answer;
    button.classList.add(correct ? "correct" : "incorrect");
    if (!correct) options.querySelector(`[data-index="${item.answer}"]`).classList.add("correct");
    document.getElementById("quiz-feedback").textContent = correct ? "Correct! Great work." : `Not quite. The correct answer is: ${item.options[item.answer]}.`;
    options.querySelectorAll("button").forEach(option => option.disabled = true);
  }));
  options.dataset.answered = "false";
  document.getElementById("lesson-section").scrollIntoView({behavior:"smooth",block:"start"});
}

document.getElementById("search-button").addEventListener("click", renderTopics);
searchInput.addEventListener("input", renderTopics);
searchInput.addEventListener("keydown", event => { if(event.key === "Enter") renderTopics(); });
document.getElementById("subject-filters").querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    selectedSubject = button.dataset.subject;
    document.querySelectorAll(".subject-chip").forEach(chip => chip.classList.toggle("active", chip === button));
    renderTopics();
  });
});
document.getElementById("print-button").addEventListener("click", () => window.print());
renderTopics();
