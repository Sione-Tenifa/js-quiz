const startButton = document.getElementById('start-btn')
const questionContainerElememnet = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

function startGame() { 
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElememnet.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
  questionElement.innerText = question.question
}

function selectAnser() {

}

const questions = [
  { 
    question: 'what is 2 + 2?',
    answers:[
      {text: '4', correct: true},
      {text: '22', correct: false}
    ]
  }
]