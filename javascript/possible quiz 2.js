<html>
<div id="quiz"></div>
<button id="submit">Get Results</button>
<div id="results"></div>
</html>

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementsById('results');
var submitButton = document.getElementsById('submit');

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
        for(var i=0; i<myQuestions.length; i++){
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<lablel>'
                    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + questions[i].answers[letter]
                + '</label>'
                );
                }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        var userAnswer = '';
        var optionGame = 0;
        var optionLord = 0;
        var optionHarry = 0;
        var optionPercy = 0;
        for (var i=0; i<questions.length; i++){
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{})
            if(userAnswer === questions[i].game){
                optionGame++;
            }
            if(userAnswer === currentQuestion.lord){
                optionLord++;
            }
            if(userAnswer === currentQuestion.harry){
                optionHarry++;
            }
            if(userAnswer === currentQuestion.percy){
                optionPercy++;
        }
        if(optionGame > optionLord, optionHarry, optionPercy){
            resultsContainer.innerHTML = 'You got Game of Thrones!'
        }
        if(optionLord > optionGame, optionHarry, optionPercy){
            resultsContainer.innerHTML = 'You got Lord of the Rings!'
        }
        if(optionHarry > optionLord, optionGame, optionPercy){
            resultsContainer.innerHTML = 'You got Harry Potter!'
        }
        if(optionPercy > optionLord, optionHarry, optionHarry){
            resultsContainer.innerHTML = 'You got Percy Jackson!'
        }
    }
    submitButton.onclick = function(){
        showResults(questions,quizContainer,resultsContainer);
    }
    }
var myQuestions = [
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
    }