let playerScore = 0
let computerScore = 0





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
        computerScore++
        return ("You lose! Paper beats Rock");
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++
        return ("You win! Rock beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++
        return ("You win! Scissors beats Paper");
    }else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++    
        return ("You lose! Rock beats Scissors");
    }else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++        
        return ("You win! Paper beats Rock");
    }else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++
        return ("You lose! Scissors beats Paper");
    }}



function game(){
    for (let i = 1; i<=5; i++){
            const computerSelection = getComputerChoice()
            const playerSelection = prompt("Pick from Rock, Paper or Scissors")

        console.log(playRound(playerSelection, computerSelection))
    
        console.log(playerScore, computerScore)
}
if (playerScore>computerScore){
    return "You beat the comp"
} else if (playerScore< computerScore){
    return "Comp beat you"
} else {
return "Draw"
}
}





console.log(game());