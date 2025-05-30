// Full pool of 50 Nigerian questions
const allQuestions = [
  { question: "Who is the current President of Nigeria?", options: ["Bola Ahmed Tinubu", "Goodluck Jonathan", "Olusegun Obasanjo", "Atiku Abubakar"], answer: "Bola Ahmed Tinubu" },
  { question: "What is the capital city of Nigeria?", options: ["Lagos", "Abuja", "Kano", "Port Harcourt"], answer: "Abuja" },
  { question: "Which Nigerian author wrote 'Things Fall Apart'?", options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Ngozi Adichie", "Femi Osofisan"], answer: "Chinua Achebe" },
  { question: "What is Nigeria's official language?", options: ["English", "Hausa", "Yoruba", "Igbo"], answer: "English" },
  { question: "Which Nigerian city is known as the 'Centre of Excellence'?", options: ["Abuja", "Lagos", "Ibadan", "Kano"], answer: "Ibadan" },
  { question: "When did Nigeria gain independence from British rule?", options: ["1960", "1957", "1970", "1963"], answer: "1960" },
  { question: "Who was Nigeria's first President?", options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Yakubu Gowon", "Abubakar Tafawa Balewa"], answer: "Nnamdi Azikiwe" },
  { question: "Which Nigerian state is famous for the Argungu Fishing Festival?", options: ["Kebbi", "Borno", "Ondo", "Rivers"], answer: "Kebbi" },
  { question: "What is the currency of Nigeria?", options: ["Naira", "Cedi", "Shilling", "Dollar"], answer: "Naira" },
  { question: "Which Nigerian musician is known as the 'King of Afrobeat'?", options: ["Fela Kuti", "Burna Boy", "Wizkid", "Davido"], answer: "Fela Kuti" },
  { question: "Nigeria is made up of how many states?", options: ["36", "30", "32", "40"], answer: "36" },
  { question: "Which Nigerian city is the largest by population?", options: ["Lagos", "Kano", "Abuja", "Port Harcourt"], answer: "Lagos" },
  { question: "What is the name of Nigeria's national football team?", options: ["Super Eagles", "Green Falcons", "Golden Eaglets", "Black Stars"], answer: "Super Eagles" },
  { question: "Who won the Nobel Prize in Literature from Nigeria?", options: ["Wole Soyinka", "Chinua Achebe", "Chimamanda Ngozi Adichie", "Ben Okri"], answer: "Wole Soyinka" },
  { question: "Which river is the longest in Nigeria?", options: ["Niger River", "Benue River", "Kaduna River", "Cross River"], answer: "Niger River" },
  { question: "Which Nigerian university is the oldest?", options: ["University of Ibadan", "University of Lagos", "Ahmadu Bello University", "Obafemi Awolowo University"], answer: "University of Ibadan" },
  { question: "Who was the first Nigerian female minister?", options: ["Funmilayo Ransome-Kuti", "Margaret Ekpo", "Florence Dolapo Osinuga", "Amina J. Mohammed"], answer: "Funmilayo Ransome-Kuti" },
  { question: "Which Nigerian state is the home of the Olumo Rock?", options: ["Ogun", "Lagos", "Ondo", "Ekiti"], answer: "Ogun" },
  { question: "What is the Nigerian traditional dress called for men?", options: ["Agbada", "Buba", "Kaftan", "Dashiki"], answer: "Agbada" },
  { question: "Which Nigerian festival celebrates the New Yam?", options: ["Iri ji", "Eyo Festival", "Osun-Osogbo", "Durbar"], answer: "Iri ji" },
  { question: "What is the official motto of Nigeria?", options: ["Unity and Faith, Peace and Progress", "Peace and Prosperity", "Justice and Equality", "Strength in Unity"], answer: "Unity and Faith, Peace and Progress" },
  { question: "Which Nigerian is the first African to win the Nobel Peace Prize?", options: ["Albert Luthuli", "Wangari Maathai", "Kofi Annan", "Ken Saro-Wiwa"], answer: "Ken Saro-Wiwa" },
  { question: "Which city is Nigeria’s main oil hub?", options: ["Port Harcourt", "Lagos", "Warri", "Calabar"], answer: "Port Harcourt" },
  { question: "Who was the military ruler of Nigeria from 1985 to 1993?", options: ["Ibrahim Babangida", "Sani Abacha", "Yakubu Gowon", "Olusegun Obasanjo"], answer: "Ibrahim Babangida" },
  { question: "Which Nigerian is known as the 'Father of Nigerian Literature'?", options: ["Chinua Achebe", "Wole Soyinka", "Ben Okri", "Chimamanda Ngozi Adichie"], answer: "Chinua Achebe" },
  { question: "Nigeria shares a border with how many countries?", options: ["4", "3", "5", "6"], answer: "4" },
  { question: "Which Nigerian film industry is called 'Nollywood'?", options: ["English-language films", "Hausa-language films", "Yoruba-language films", "Igbo-language films"], answer: "English-language films" },
  { question: "What is the major religion in Northern Nigeria?", options: ["Islam", "Christianity", "Traditional beliefs", "Buddhism"], answer: "Islam" },
  { question: "The Nok culture in Nigeria is famous for which type of artifact?", options: ["Terracotta sculptures", "Bronze statues", "Ivory carvings", "Rock paintings"], answer: "Terracotta sculptures" },
  { question: "Who is Nigeria’s first female governor?", options: ["Dorothy Nyongo", "Ngozi Okonjo-Iweala", "Florence Ita Giwa", "Bola Ige"], answer: "Dorothy Nyongo" },
  { question: "Which Nigerian state is known for the Aso Rock?", options: ["Federal Capital Territory", "Lagos", "Kaduna", "Abia"], answer: "Federal Capital Territory" },
  { question: "Which Nigerian sport is the country most famous for internationally?", options: ["Football", "Basketball", "Boxing", "Athletics"], answer: "Football" },
  { question: "Which year was the Nigerian Civil War?", options: ["1967-1970", "1960-1963", "1975-1979", "1983-1987"], answer: "1967-1970" },
  { question: "Which Nigerian is the founder of the Dangote Group?", options: ["Aliko Dangote", "Mike Adenuga", "Tony Elumelu", "Femi Otedola"], answer: "Aliko Dangote" },
  { question: "Which Nigerian city is known as the 'Garden City'?", options: ["Enugu", "Ibadan", "Port Harcourt", "Calabar"], answer: "Enugu" },
  { question: "What is Nigeria’s largest ethnic group?", options: ["Hausa", "Yoruba", "Igbo", "Fulani"], answer: "Hausa" },
  { question: "Which Nigerian festival is celebrated with masquerades?", options: ["Eyo Festival", "Durbar", "Osun-Osogbo", "New Yam Festival"], answer: "Eyo Festival" },
  { question: "Which Nigerian city hosts the National Museum?", options: ["Lagos", "Abuja", "Benin City", "Enugu"], answer: "Lagos" },
  { question: "Who is known as the 'Lion of Bourdillon'?", options: ["Obafemi Awolowo", "Nnamdi Azikiwe", "Ahmadu Bello", "Samuel Ladoke Akintola"], answer: "Obafemi Awolowo" },
  { question: "Nigeria is part of which international organization?", options: ["African Union", "ASEAN", "NATO", "EU"], answer: "African Union" },
  { question: "Which Nigerian university was founded by the Catholic Church?", options: ["Catholic University of Nigeria", "University of Nigeria, Nsukka", "University of Lagos", "Obafemi Awolowo University"], answer: "Catholic University of Nigeria" },
  { question: "Which Nigerian city is the commercial capital?", options: ["Lagos", "Abuja", "Port Harcourt", "Kano"], answer: "Lagos" },
  { question: "What is the name of Nigeria’s largest oil company?", options: ["Nigerian National Petroleum Corporation", "Shell Nigeria", "Chevron Nigeria", "Total Nigeria"], answer: "Nigerian National Petroleum Corporation" },
  { question: "Which Nigerian author won the Booker Prize?", options: ["Ben Okri", "Chinua Achebe", "Wole Soyinka", "Chimamanda Ngozi Adichie"], answer: "Ben Okri" },
  { question: "Which Nigerian city is famous for its leatherworks?", options: ["Kano", "Lagos", "Benin City", "Jos"], answer: "Kano" },
  { question: "Who was the first Nigerian to become Secretary-General of the UN?", options: ["Boutros Boutros-Ghali", "Kofi Annan", "N/A", "None"], answer: "N/A" }
];

// Variables
let batchIndex = 0;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;

const lifelines = {
  fiftyFifty: 2,
  computerHelp: 2,
};

const questionElem = document.getElementById("question");
const optionsElem = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreElem = document.getElementById("score");
const timeElem = document.getElementById("time");
const fiftyBtn = document.getElementById("fiftyFifty-btn");
const compBtn = document.getElementById("computerHelp-btn");
const progressBarFill = document.getElementById("progress-bar-fill");

// Functions

function loadNextBatch() {
  // Shuffle the questions
  const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());

  // Pick the first 10
  currentQuestions = shuffled.slice(0, 10);

  currentQuestionIndex = 0;
  resetProgressBar();
  resetLifelines();
  score = 0;
  updateScore();
  batchIndex++;
  displayQuestion();
  nextBtn.disabled = true;
}

function displayQuestion() {
  clearInterval(timer);
  timeLeft = 15;
  timeElem.textContent = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timeElem.textContent = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      disableOptions();
      nextBtn.disabled = false;
    }
  }, 1000);

  updateProgressBar();

  let q = currentQuestions[currentQuestionIndex];
  questionElem.textContent = q.question;
  optionsElem.innerHTML = "";
  q.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = opt;
    btn.onclick = () => selectOption(btn, q.answer);
    optionsElem.appendChild(btn);
  });

  nextBtn.disabled = true;
  updateLifelineDisplay();
}

function selectOption(button, correctAnswer) {
  clearInterval(timer);
  disableOptions();

  if (button.textContent === correctAnswer) {
    button.style.backgroundColor = "#4CAF50";
    score++;
    updateScore();
  } else {
    button.style.backgroundColor = "#f44336";
    // Highlight correct answer
    Array.from(optionsElem.children).forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = "#4CAF50";
      }
    });
  }
  nextBtn.disabled = false;
}

function disableOptions() {
  Array.from(optionsElem.children).forEach(btn => btn.disabled = true);
}

function updateScore() {
  scoreElem.textContent = `Score: ${score}`;
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestions.length) {
    displayQuestion();
  } else {
    clearInterval(timer);
    showFinalScore();
  }
};

function showFinalScore() {
  questionElem.textContent = `Quiz completed! Your score: ${score} out of ${currentQuestions.length}`;
  optionsElem.innerHTML = "";

  nextBtn.style.display = "none";
  fiftyBtn.disabled = true;
  compBtn.disabled = true;

  // Add restart button
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Quiz";
  restartBtn.style.marginTop = "20px";
  restartBtn.style.padding = "12px 20px";
  restartBtn.style.fontSize = "1em";
  restartBtn.style.borderRadius = "5px";
  restartBtn.style.cursor = "pointer";
  restartBtn.onclick = () => {
    batchIndex = 0;
    nextBtn.style.display = "inline-block";
    optionsElem.innerHTML = "";
    score = 0;
    updateScore();
    resetLifelines();
    resetProgressBar();
    loadNextBatch();
    restartBtn.remove();
  };

  document.getElementById("quiz-container").appendChild(restartBtn);
}

function resetLifelines() {
  lifelines.fiftyFifty = 2;
  lifelines.computerHelp = 2;
  updateLifelineDisplay();
}

function updateLifelineDisplay() {
  fiftyBtn.textContent = `50/50 (${lifelines.fiftyFifty} left)`;
  compBtn.textContent = `Computer Help (${lifelines.computerHelp} left)`;

  fiftyBtn.disabled = lifelines.fiftyFifty <= 0;
  compBtn.disabled = lifelines.computerHelp <= 0;
}

// 50/50 lifeline logic
fiftyBtn.onclick = () => {
  if (lifelines.fiftyFifty > 0) {
    lifelines.fiftyFifty--;
    updateLifelineDisplay();

    let q = currentQuestions[currentQuestionIndex];
    // Remove two wrong options randomly
    let incorrectOptions = Array.from(optionsElem.children).filter(btn => btn.textContent !== q.answer && !btn.disabled);
    // Randomly remove two
    let removedCount = 0;
    while (removedCount < 2 && incorrectOptions.length > 0) {
      let idx = Math.floor(Math.random() * incorrectOptions.length);
      incorrectOptions[idx].disabled = true;
      incorrectOptions.splice(idx, 1);
      removedCount++;
    }
  }
};

// Computer help lifeline logic (shows one correct answer option highlighted briefly)
compBtn.onclick = () => {
  if (lifelines.computerHelp > 0) {
    lifelines.computerHelp--;
    updateLifelineDisplay();

    let q = currentQuestions[currentQuestionIndex];
    Array.from(optionsElem.children).forEach(btn => {
      if (btn.textContent === q.answer) {
        btn.style.border = "2px solid yellow";
        setTimeout(() => {
          btn.style.border = "none";
        }, 1500);
      }
    });
  }
};

function updateProgressBar() {
  const progress = (currentQuestionIndex / currentQuestions.length) * 100;
  progressBarFill.style.width = `${progress}%`;
}

function resetProgressBar() {
  progressBarFill.style.width = "0%";
}

// Start quiz initially
loadNextBatch();
