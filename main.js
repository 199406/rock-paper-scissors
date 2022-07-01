const computerChoiceDisplay = document.querySelector("#computer-choice");
const personChoiceDisplay = document.querySelector("#person-choice");
const displayResult = document.querySelector("#result-score");

const possibleChoices = document.querySelectorAll("img");

let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice =  e.target.id;
    console.log(userChoice);
    personChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getTheResult();
}));


function generateComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

    if(randomNumber === 1)
    {
        computerChoice = "rock";
    } 
    if(randomNumber === 2)
    {
        computerChoice = "paper";
    }
    if(randomNumber === 3){
        computerChoice = "scissors";
    }

    computerChoiceDisplay.textContent = computerChoice;
}


function getTheResult() {

        if(computerChoice === userChoice)
        {
            result = "It's a draw!";
        }
    
        if(computerChoice === 'rock' && userChoice === 'paper')
        {
            result = 'You win!';
        }
    
        if(computerChoice === 'rock' && userChoice === 'scissors')
        {
            result = 'You lost!';
        }
    
        if(computerChoice === 'paper' && userChoice === 'scissors')
        {
            result = 'You win!';
        }
    
        if(computerChoice === 'paper' && userChoice === 'rock')
        {
            result = 'You lost!';
        }
    
        if(computerChoice === 'scissors' && userChoice === 'rock')
        {
            result = 'You win!';
        }
    
        if(computerChoice === 'scissors' && userChoice === 'paper')
        {
            result = 'You lost!';
        }
    
        
        displayResult.textContent = result; 
    }
