let playerScore = 0
let computerScore = 0

const rock = document.querySelector('#rockbtn');
const paper = document.querySelector('#paperbtn');
const scissors = document.querySelector('#scissorsbtn')

rock.addEventListener("click", function(){
    playRound('rock', getComputerChoice());
})

paper.addEventListener("click", function(){
playRound('paper', getComputerChoice());
})
scissors.addEventListener("click", function(){
    playRound('scissors', getComputerChoice());
});


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
    console.log("Player selected: " + playerSelection + " Computer selected: " + computerSelection)
    
    console.log(playerScore, computerScore)
    
    console.log(result)
 
}



function getComputerChoice(){
    const choicesArr = ["rock", "paper", "scissors"];
    const randomChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    
    return(randomChoice);
} 





// console.log(playRound());



// function game(){
//     // for (let i = 1; i<=5; i++)
//     {
            
//             // const playerSelection = prompt("Pick from Rock, Paper or Scissors")

//         console.log(playRound(playerSelection, computerSelection))
    
//         console.log(playerScore, computerScore)
// }
// if (playerScore>computerScore){
//     return "You beat the comp"
// } else if (playerScore< computerScore){
//     return "Comp beat you"
// } else {
// return "Draw"
// }
// }





