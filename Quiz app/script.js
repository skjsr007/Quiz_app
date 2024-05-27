// Variable

const questionElem = document.getElementById('question');
const answerButtonsContainer = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0; 
let score = 0; 

const questions = [
    {
        question: "'OS' computer abbreviation usually means ?",
        answer:[
            {text: "Order of Significance", correct: false},
            {text: "Open Software", correct: false},
            {text: "Operating System", correct: true},
            {text: "Optical Sensor", correct: false}
        ]
    },
    {
        question: ".MOV extension refers usually to what kind of file ?",
        answer:[
            {text: "Image file", correct: false},
            {text: "Animation/movies file", correct: true},
            {text: "Audio", correct: false},
            {text: "MS Office document", correct: false}
        ]
    },
    {
        question: ".MPG extension refers usually to what kind of file ?",
        answer:[
            {text: "Word document", correct: false},
            {text: "Image file", correct: false},
            {text: "Animation/movie file", correct: true},
            {text: "Movie file", correct: false}
        ]
    },
    {
        question: "What does VVVF stand for ?",
        answer:[
            {text: "Variant Voltage Vile Frequency", correct: false},
            {text: "Variable Velocity Variable Fun", correct: false},
            {text: "Very Very Vicious Frequency", correct: false},
            {text: "Variable Voltage Variable Frequency", correct: true}
        ]
    }
];

const startQuiz = () => {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";

   
    
    showQuestions();
};

const showQuestions = () => {
    questionElem.innerText = questions[currentQuestionIndex].question;

    showAnswer();
};

const showAnswer = () => {
    answerButtonsContainer.innerHTML = "";
    questions[currentQuestionIndex].answer.forEach(e => {
        const button = document.createElement('button');
        button.innerText = e.text;
        button.classList.add('btn');
        button.addEventListener('click',() => isCorrect(e));
        answerButtonsContainer.appendChild(button);
    });
};

const isCorrect = (clickedanswer) => {
    if(clickedanswer.correct){
        score++;
    }
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (clickedanswer.text === button.innerText) {
            button.classList.add(clickedanswer.correct ? 'correct' : 'incorrect');
        }
    })
};
const handleNextButtonClick = () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestions();
    } else {
        answerButtonsContainer.innerHTML = "";
        questionElem.innerText = `You scored ${score} out of ${questions.length}`;
        nextButton.innerText = "Reload Quiz";
        
        nextButton.addEventListener('click', ()=> startQuiz(),{once:true});
    }
}

nextButton.addEventListener('click',() => handleNextButtonClick());


startQuiz();