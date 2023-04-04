const round = playRound()
const computerSelection = getComputerChoice();
const playerSelection = "scissors";

function getComputerChoice(){
    const choicesArr = ["rock", "paper", "scissors"];
    const randomChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    
    return(randomChoice);
} 

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection){
        return ("Round is a TIE");
    } else if (playerSelection == "rock" && computerSelection == "paper"){
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return ("You win! Rock beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        return ("You win! Scissors beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
            return ("You lose! Rock beats Scissors");
    }else if (playerSelection == "paper" && computerSelection == "rock"){
                return ("You win! Paper beats Rock");
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
                    return ("You lose! Scissors beats Paper");
    }}




function game(){
    for (i = 1; i<=5; i++)

}