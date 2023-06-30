var startBtn = document.querySelector(".start-button")
var startArea = document.querySelector(".start-area")
var quizArea = document.querySelector(".quiz-area")
var button1 = document.querySelector(".button-1")
var button2 = document.querySelector(".button-2")
var button3 = document.querySelector(".button-3")
var button4 = document.querySelector(".button-4")
var timeEl = document.querySelector("#timer")
var questionIndex = 0;
var timerName;
var time = 100;
// Creating object key/value pairs with questions, choices, and correct answer
var questions = [
    {
        question: "Which player owns the most number of championship rings in NBA history?",
        choices: ["Chris Mullin", "Michael Jordan", "Bill Russell", "Wilt Chamberlain"],
        correct: "Bill Russell"
    },
    {
        question: "Who is the only NBA player to average a triple-double?",
        choices: ["Magic Johnson", "Oscar Robertson", "Vince Carter", "Patrick Ewing"],
        correct: "Oscar Robertson"
    },
    {
        question: "Red Auerbach famously coached which NBA team?",
        choices: ["Boston Celtics", "New York Knicks", "Detroit Pistons", "Los Angeles Lakers"],
        correct: "Boston Celtics"
    },
    {
        question: "What was San Antonio Spur David Robinson's Nickname?",
        choices: ["Lieutenant", "Captain", "Admiral", "General"],
        correct: "Admiral"
    },
    {
        question: "Which of these players was the only one to attend college?",
        choices: ["Kobe Bryant", "LeBron James", "Kevin Garnett", "Kevin Durant"],
        correct: "Kevin Durant"
    },
    {
        question: "For what team did John Stockton play his entire career?",
        choices: ["Golden State Warriors", "Chicago Bulls", "Sacramento Kings", "Utah Jazz"],
        correct: "Utah Jazz"
    },
    {
        question: "What college team did Carmelo Anthony play for?",
        choices: ["Kentucky", "Syracuse", "Kansas", "Connecticut"],
        correct: "Syracuse"
    },
    {
        question: "Which player was NOT an overall number one pick in the NBA draft?",
        choices: ["Allen Iverson", "Michael Jordan", "Tim Duncan", "Dwight Howard"],
        correct: "Michael Jordan"
    },
    {
        question: "Which team beat the 1996 Chicago Bulls record 72 wins in a season?",
        choices: ["Miami Heat", "Los Angeles Lakers", "Golden State Warriors", "Dallas Mavericks"],
        correct: "Golden State Warriors"
    },
    {
        question: "Which NBA player famously scored 100 points in a single game?",
        choices: ["Wilt Chamberlain", "Kobe Bryant", "Stephen Curry", "Michael Jordan"],
        correct: "Wilt Chamberlain"
    }
]

// How to access elements of the question object
questions[0].question;
questions[0].choices[0]
questions[0].correct
console.log(questions.length-1);

// // When clicking start button, hide start area, and unhide quiz area
// function start() {
//     startArea.classList.add("hide")
//     quizArea.classList.remove("hide")
    
//     // Call the timer and make it stop at zero
//     timeEl.textContent = 'Time Remaining: ' + time + ' seconds';
//     timerName = setInterval(function () {
//         time--;
//         timeEl.textContent = 'Time Remaining: ' + time + ' seconds';
//         if (time === 0) {
//             clearInterval(timerName)
//         }        
//     }, 1000)
//     renderQuestion()
// }

// // Takes the current question and choice index and applies the question and choice pair to the text
// function renderQuestion() {
//     var currentQuestion = questions[questionIndex]
//     document.querySelector(".question-text").innerText = currentQuestion.question
//     button1.innerText = currentQuestion.choices[0]
//     button2.innerText = currentQuestion.choices[1]
//     button3.innerText = currentQuestion.choices[2]
//     button4.innerText = currentQuestion.choices[3]
// }

// function click(event) {
//     console.log(event.target.textContent)
//     console.log(this.textContent);

//     // Check if the answer is incorrect and if it is wrong you are to deduct time from the game
//     if (this.textContent !==  questions[questionIndex].correct){
//         time -= 5;
//         timeEl.textContent = 'Time. ' + time;
//     }
//     questionIndex++;
//     renderQuestion()
//     // Could not determine how to determine if it's the last question
//     // console.log(questions[0]);
//     // console.log(questions.length);
//     // if (currentQuestion=questions.length-1){
//     //     console.log('game over');
//     // }else{
//     // }
// }

// // Adding click event listeners to buttons
// button1.addEventListener("click", click)
// button2.addEventListener("click", click)
// button3.addEventListener("click", click)
// button4.addEventListener("click", click)

// startBtn.addEventListener("click", start);