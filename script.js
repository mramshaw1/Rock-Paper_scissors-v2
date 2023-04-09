//variables to get the divs to display the results on the page
const selectedWeapons = document.querySelector(".selectedWeapons");
const score = document.querySelector(".score");
const currentResult = document.querySelector(".currentResult");




// variables for the score of the game
let playerScore = 0
let computerScore = 0

// Variables to select buttons
const rock = document.querySelector('#rockbtn');
const paper = document.querySelector('#paperbtn');
const scissors = document.querySelector('#scissorsbtn')


// event listeners for each of the buttons
rock.addEventListener("click", function(){
    playRound('rock', getComputerChoice());
})

paper.addEventListener("click", function(){
playRound('paper', getComputerChoice());
})
scissors.addEventListener("click", function(){
    playRound('scissors', getComputerChoice());
});

// function that takes in parameters of player selection and random computer selection

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        result = ("Round is a TIE");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++
        result =  ("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        result = ("You win! Rock beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        result = ("You win! Scissors beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++    
        result = ("You lose! Rock beats Scissors");
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++        
        result = ("You win! Paper beats Rock");
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        result = ("You lose! Scissors beats Paper");
    }
    selectedWeapons.textContent = ("Player selected: " + playerSelection + " Computer selected: " + computerSelection)
    
    score.textContent = ("Players score: " + playerScore + " Computers score " + computerScore)
    
    currentResult.textContent = (result)
if (playerScore === 5){
    alert("You win");
    reset()
} else if (computerScore === 5){
    alert("The computer wins");
    reset();
}
}
function reset (){
    playerScore = 0;
    computerScore = 0;
}

// function that creates a random choice 
function getComputerChoice(){
    const choicesArr = ["rock", "paper", "scissors"];
    const randomChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    
    return(randomChoice);
} 











