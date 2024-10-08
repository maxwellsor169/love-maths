//Wait for the DOM to finish loading before running the game
// Get the button element and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === submit) {
                alert("You clicked Submit!");
            }
            else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * the main game "loop" called when the script is first loaded
 * and after the user's answer have been processed
 */

function runGame(gameType) {

    // create two random numebrs between 1 and 25
    let num1 = Math.floor(Math.random()* 25) + 1;
    let num2 = Math.floor(Math.random()* 25) + 1;

    if (gameType === 'addition') {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw`Unknown game type: ${gameType}. Aborting!`;
    }
       
}

/**
 * check answer against the first element in the 
 * returned calculateCorrectAnswer array
 */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right :D")
        incrementScore();
    } else {
        alert(`Awww ....... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);

}

/**
 * Get the operands (the numbers) the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer.
*/ 

function calculateCorrectAnswer() {
   let operand1 = parseInt(document.getElementById('operand1').innerText);
   let operand2 = parseInt(document.getElementById('operand2').innerText);
   let operator = document.getElementById("operator").innerText;

   if (operator === '+'){
    return [operand1 + operand2, "addition"];
   } else {
        alert(`Unimplemented operator ${operator}`);
        throw`Unimplemented operator ${operator}. Aborting!`;
   }
}

/**
 * Get the current score from the DOM and increment it by 1
 */

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

/**
 * Get the current tally of the incorrect answers from the DOM and increment it by 1
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

}
function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}
function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}