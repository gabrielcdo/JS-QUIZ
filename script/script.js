const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var resultado=0;
const res= document.getElementById('resposta');
const res2= document.getElementById('resposta2');

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  questionElement.classList.remove('hide');
    answerButtonsElement.classList.remove('hide');
  
  res.classList.add('hide');
  res2.classList.add('hide');
  resultado=0;
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      
        
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  
  const correct = selectedButton.dataset.correct
  if (selectedButton.dataset = correct){console.log("vapo"); resultado++;}
  
 
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')
    questionElement.classList.add('hide');
    answerButtonsElement.classList.add('hide');

    
    res.classList.remove('hide');
    res2.classList.remove('hide');
    res.innerText=`Sua pontuação final foi de ${resultado} pontos`;
    if(resultado<5){res2.innerText="Você não sabe nada de Esportes !!!"}else if(resultado<8){res2.innerText="Você entende de Esportes"}
    else{res2.innerText="Você sabe de tudo de Esportes!"}
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  
  if (correct) {
    element.classList.add('correct')
     
    
    
    
  } else {
    element.classList.add('wrong')
    
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'Que time foi campeão da Libertadores 2019?',
    answers: [
      { text: 'Flamengo', correct: true },
      { text: 'São Paulo', correct: false },
      { text: 'Palmeiras', correct: false },
      { text: 'Santos', correct: false }
    ]
  },
  {
    question: 'Qual desses lutadores venceu por finalização no UFC 254',
    answers: [
      { text: 'Macgregor', correct: false },
      { text: 'Khabib', correct: true },
      { text: 'Anderson Silva', correct: false },
      { text: 'Adesanya', correct: false }
    ]
  },
  {
    question: 'Que time foi Campeão na NBA 2019/2020?',
    answers: [
      { text: 'Knicks', correct: false },
      { text: 'Clippers', correct: false },
      { text: 'Warriors', correct: false },
      { text: 'Lakers', correct: true }
    ]
  },
  {
    question: 'qual desses lutadores voltou a lutar aos 54 anos em um mega evento de boxe?',
    answers: [
      { text: 'Roy Jones Jr', correct: false },
      { text: 'Anderson Silva', correct: false },
      { text: 'Mike Tyson', correct: true },
      { text: 'Jair Bolsonaro', correct: false }
    ]
  },{
    question: 'Quem é melhor',
    answers: [
      { text: 'Ceará', correct: false },
      { text: 'Fortaleza', correct: true }
      
    ]}
  ,{
    question: 'Qual melhor jogador classineta canhoto do mundo?',
    answers: [
      { text: 'Gabriel', correct: false },
      { text: 'Xu Xin', correct: true },
      { text: 'Ma Long', correct: false },
      { text: 'Hugo Calderano', correct: false }
    ]
  },
  {
    question: 'Qual time mais pipoqueiro do Baseball?',
    answers: [
      { text: 'CL Indians', correct: false },
      { text: 'NY Yankees', correct: false },
      { text: 'MI Twins', correct: false },
      { text: 'LA Dodgers', correct: true }
    ]
  }
  ,{
    question: 'Qual desses corredores bateu o recorde ao completar a maratona em menos de 2:00 Hrs',
    answers: [
      { text: 'Eliud Kipchoge', correct: true },
      { text: 'Ronaldo da Costa', correct: false },
      { text: 'Usain Bolt', correct: false },
      { text: 'Dennis Kimetto', correct: false }
    ]
},
  {
    question: 'Qual dessas afirmativas é verdadeira?',
    answers: [
      { text: 'Vacina vai te previnir', correct: true },
      { text: 'Vacina tem chip', correct: false },
      { text: 'Vacina vai fazer você virar jacaré', correct: false },
      { text: 'Bolsonaro não é burro', correct: false }
    ]
  },
  {
    question: 'Qual desses pilotos detem o recorde de 92 vitórias na F1?',
    answers: [
      { text: 'Michael Schumacher ', correct: false },
      { text: 'Ayrton Senna', correct: false },
      { text: 'Lewis Hamilton', correct: true },
      { text: 'Rubinho Barrichello', correct: false }
    ]
  }
]