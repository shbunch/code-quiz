// When clicking start button, hide start area, and unhide quiz area
document.querySelector(".start-button").addEventListener("click", function(){
    document.querySelector(".start-area").classList.add("hide")
    document.querySelector(".quiz-area").classList.remove("hide")
    renderQuestion()
})

// Creating object key/value pairs with questions, choices, and correct answer
var questions = [
    {
        question:"Which player owns the most number of championship rings in NBA history?",
        choices: ["Chris Mullin","Michael Jordan","Bill Russell","Wilt Chamberlain"],
        correct: "Bill Russell"
    },
    {
        question:"Who is the only NBA player to average a triple-double?",
        choices: ["Magic Johnson","Oscar Robertson","Vince Carter","Patrick Ewing"],
        correct: "Oscar Robertson"
    },
    {
        question:"Red Auerbach famously coached which NBA team?",
        choices: ["Boston Celtics","New York Knicks","Detroit Pistons","Los Angeles Lakers"],
        correct: "Boston Celtics"
    },
    {
        question:"What was San Antonio Spur David Robinson's Nickname?",
        choices: ["Lieutenant","Captain","Admiral","General"],
        correct: "Admiral"
    },
    {
        question:"Which of these players was the only one to attend college?",
        choices: ["Kobe Bryant","LeBron James","Kevin Garnett","Kevin Durant"],
        correct: "Kevin Durant"
    },
    {
        question:"For what team did John Stockton play his entire career?",
        choices: ["Golden State Warriors","Chicago Bulls","Sacramento Kings","Utah Jazz"],
        correct: "Utah Jazz"
    },
    {
        question:"What college team did Carmelo Anthony play for?",
        choices: ["Kentucky","Syracuse","Kansas","Connecticut"],
        correct: "Syracuse"
    },
    {
        question:"Which player was NOT an overall number one pick in the NBA draft?",
        choices: ["Allen Iverson","Michael Jordan","Tim Duncan","Dwight Howard"],
        correct: "Michael Jordan"
    },
    {
        question:"Which team beat the 1996 Chicago Bulls record 72 wins in a season?",
        choices: ["Miami Heat","Los Angeles Lakers","Golden State Warriors","Dallas Mavericks"],
        correct: "Golden State Warriors"
    },
    {
        question:"Which NBA player famously scored 100 points in a single game?",
        choices: ["Wilt Chamberlain","Kobe Bryant","Stephen Curry","Michael Jordan"],
        correct: "Wilt Chamberlain"
    }
]
// First question in the array index starts at position 0
var questionIndex=0;

// Takes the current question and choice index and applies the question and choice pair to the text
function renderQuestion() {
    var currentQuestion = questions[questionIndex]
    document.querySelector(".question-text").innerText=currentQuestion.question
    document.querySelector(".button-1").innerText=currentQuestion.choices[0]
    document.querySelector(".button-2").innerText=currentQuestion.choices[1]
    document.querySelector(".button-3").innerText=currentQuestion.choices[2]
    document.querySelector(".button-4").innerText=currentQuestion.choices[3]
}

document.querySelector(".quiz-area").addEventListener("click", function(event){
    if (event.target.nodeName==="BUTTON"){
        questionIndex++
        renderQuestion()
    }
})

// Determine if the questions are right or wrong

