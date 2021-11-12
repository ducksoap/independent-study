<html>
<div id="quiz"></div>
<button id="submit">Submit Quiz</button>
<div id="results"></div>
</html>

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementsById('results');
const submitButton = document.getElementsById('submit');

function buildQuiz(){
    const output = []
    myQuestions.forEach(currentQuestion, questionNumber)
    const answers = []
    for(letter in currentQuestion.answers)
    answers.push(
        <label>
            <input type="radio" name={questionNumber} value={letter}> </input>
            letter:
            currentQuestion.answers[letter]
        </label>
    )
    output.push(
        <><div class="question"> {currentQuestion.question}</div><div class="answers"> {answers.join('')} </div></>
    )
    quizContainer.innerHTML = output.join('')
}

function showResults(){
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let optionGame = 0;
    let optionLord = 0;
    let optionHarry = 0;
    let optionPercy = 0;
    myQuestions.forEach((currentQuestion, questionNumber))
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[{questionNumber}]:checked';
    const userAnswer = (answerContainer.querySelector(selector)).value
    if(userAnswer === currentQuestion.game){
        optionGame++;
        answerContainer[questionNumber]
    }
    if(userAnswer === currentQuestion.lord){
        optionLord++;
        answerContainer[questionNumber]
    }
    if(userAnswer === currentQuestion.harry){
        optionHarry++;
        answerContainer[questionNumber]
    }
    if(userAnswer === currentQuestion.percy){
        optionPercy++;
        answerContainer[questionNumber]
    }
    if(optionGame > optionLord, optionHarry, optionPercy){
        resultsContainer.innerHTML = 'You got {optionGame}!'
    }
    if(optionLord > optionGame, optionHarry, optionPercy){
        resultsContainer.innerHTML = 'You got {optionLord}!'
    }
    if(optionHarry > optionLord, optionGame, optionPercy){
        resultsContainer.innerHTML = 'You got {optionHarry}!'
    }
    if(optionPercy > optionLord, optionHarry, optionHarry){
        resultsContainer.innerHTML = 'You got {optionPercy}!'
    }
}

buildQuiz();

submitButton.addEventListener('click', showResults);

const myQuestions = [
{
question: "What do you feel is your purpose in life?",
answers: {
a: "To protect those I care about.",
b: "To seek out adventure.",
c: "To maintain a sense of morality.",
d: "To fully understand who I truly am as a person."
},
game: "a",
lord: "b",
harry: "c",
percy: "d"
},
{ 
question: "What animal do you think is the most impressive?",
    answers: {
    a: "Wolf.",
    b: "Bear.",
    c: "Snake.",
    d: "Dragon."
    },
    game: "a",
    lord: "b",
    harry: "c",
    percy: "d"},   
    {   question: "What is your biggest flaw?",
        answers: {
        a: "Being disloyal.",
        b: "Always yearning for more power.",
        c: "Never allowing others to help me.",
        d: "Giving up too much of myself for others."
        },
        game: "a",
        lord: "b",
        harry: "c",
        percy: "d"},
        {   question: "What motivates you to work hard?",
            answers: {
            a: "To be the best at everything I do.",
            b: "To find the fullfillment I am longing for.",
            c: "The knowledge that people are counting on me.",
            d: "To bring honor to my family and friends."
            },
            game: "a",
            lord: "b",
            harry: "c",
            percy: "d"},
            {   question: "Would you say you are a kid at heart?",
            answers: {
            a: "Absolutely not!",
            b: "On the surface it may seem that way, but in reality, no.",
            c: "I suppose so, but I can be mature when it is needed.",
            d: "Yup, all the way!"
            },
            game: "a",
            lord: "b",
            harry: "c",
            percy: "d"},
        ];