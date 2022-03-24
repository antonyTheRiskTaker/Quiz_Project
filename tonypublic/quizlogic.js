/*
There are a few things we need to do:
1. start the game
2. set the next question
3. select an answer
4. show question
5. reset the state
6. set status class
7. clear status class
*/

/* 
The flow of the programme:
1. startGame()
1.1. hide the start button
1.2. set an array of shuffled questions
1.3. make question container visible
2. setNextQuestion()
2.1. 
3. showQuestion()
3.1. populate the question div with the first question of the shuffled array
3.2. For each option (4 in total) of the question, create a button, populate each button with the option's text, add the css class 'btn' to the button, if the answer is set to true, set a data attribute 'correct' to the button
4. 
5. 
6. 
7. 
8. 
9. 
*/

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// (Line below) shuffleQuestions holds a randomly arranged array of questions.
let shuffledQuestions, currentQuestionIndex; // 'undefined' by default

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})


function startGame() {
  // Essentially what we want to do when we click the start button.
  console.log('Started');
  startButton.classList.add('hide'); // The start button disappears.
  // (Line below) Math.random() - .5 will give a result that is either above or below zero 50% of the time. sort() will sort an array in one way or other depending on whether it's passed a postive or negative number.
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  // (Line below) Make the question container visible.
  questionContainerElement.classList.remove('hide');
  setNextQuestion();
}


function setNextQuestion() {
  // (Line below) reset everything related to a form, questions, body, all back to its default state every time we set any question.
  resetState();
  // (Line below) it is what will happen when we click on the next button.
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) { // question refers to a single question object
  // To populate the question division in HTML
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      // (Line below) add a data attribute on to the button element
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    // (Line below) delete all answers that come before, before populating the question box with answers for the new question.
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  // What does it do?
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart';
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

// This array serves as a question database but we need to shuffle the questions because we don't want to show our questions in the exact same order.
const questions = [
  {
    question: 'en colère',
    answers: [
      { text: 'airport', correct: false },
      { text: 'angry', correct: true },
      { text: 'always', correct: false },
      { text: 'after', correct: false },
    ]
  },
  {
    question: 'fourmi',
    answers: [
      { text: 'ant', correct: true },
      { text: 'ankle', correct: false },
      { text: 'alcohol', correct: false },
      { text: 'art', correct: false },
    ]
  },
  {
    question: 'bar',
    answers: [
      { text: 'basement', correct: false },
      { text: 'bar', correct: true },
      { text: 'back', correct: false },
      { text: 'bed', correct: false },
    ]
  },
  {
    question: 'oiseau',
    answers: [
      { text: 'bedroom', correct: false },
      { text: 'bonus', correct: false },
      { text: 'bitter', correct: false },
      { text: 'bird', correct: true },
    ]
  }
]