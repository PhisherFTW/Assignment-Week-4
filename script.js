
let computerSelection = null;
function computerPlay (computerSelection) {
  let gamechoices = ["rock","paper","scissors"];
  return computerSelection = gamechoices[Math.floor(Math.random() * gamechoices.length)];
}
let computerChoice = null;

const rock1 = document.getElementById('rock').addEventListener("click", rock);
const paper1 = document.getElementById('paper').addEventListener("click", paper);
const scissors1 = document.getElementById('scissors').addEventListener("click", scissors);

debugger

console.log(computerChoice)
function rock (playerSelection,computerChoice) {
    // alert("The player chose rock")
    computerChoice = computerPlay(computerSelection);
    playerSelection = "rock"
    if (playerSelection === computerChoice) {
        console.log("It was a tie!");
        //ties = ties+1;
    }
    if (playerSelection == "rock" && computerChoice == "paper") {
        console.log("You lost!, Paper beats Rock!");
        //computerScore= computerScore + 1;
    }
    if (playerSelection == "rock" && computerChoice == "scissors") {
        console.log("You won!, Rock beats Scissors!");
        //playerScore = playerScore+1;
    }
    alert("Player chose rock")
}
function paper (computerChoice) {
    // alert("The player chose paper");
    computerChoice = computerPlay(computerSelection);
    playerSelection = "paper"
    if (playerSelection === computerChoice) {
        console.log("It was a tie!");
        //ties = ties+1;
    }
    if (playerSelection == "paper" && computerChoice == "scissors") {
        console.log("You lost!, Scissors beats Paper!");
        //computerScore= computerScore + 1;
    }
    if (playerSelection == "paper" && computerChoice == "rock") {
        console.log("You won!, Paper beats Rock!");
        //playerScore = playerScore+1;
    }
    alert("Player chose paper");
}
function scissors (computerChoice) {
    // alert("The player chose scissors");
    computerChoice = computerPlay(computerSelection);
    playerSelection = "scissors"
    if (playerSelection === computerChoice) {
        console.log("It was a tie!");
        //ties = ties+1;
    }
    if (playerSelection == "scissors" && computerChoice == "rock") {
        console.log("You lost!, Rock beats Scissors!");
        //computerScore= computerScore + 1;
    }
    if (playerSelection == "scissors" && computerChoice == "paper") {
        console.log("You won!, Scissors beats paper!");
        //playerScore = playerScore+1;
    }
    alert("Player chose scissors")
}











// function doSomething() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let ties = 0;
//     for(let i = 0; i<5; i++) {

//         let playerSelection = null;
        
        

//         }
//         playerchoice.append(playerSelection)

//         let round = i + 1;
//         let computerChoice = computerPlay(computerSelection);

        // playerSelection = prompt("pick one of the options: Rock,Paper,Scissors");
        // if (playerSelection === null) {
        //     console.log("Why did you exit the game?");
        //     return;
        // }
        //playerSelection = playerSelection.toLocaleLowerCase();
        //if( playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors" ){
        //     i = i - 1
        //     alert("Wrong Input! Choose between Rock Paper & Scissor"); 
        //     continue;
        // }
//         if (playerSelection === computerChoice) {
//             console.log("It was a tie!");
//             ties = ties+1;
//         }
//         if (playerSelection == "rock" && computerChoice == "paper") {
//             console.log("You lost!, Paper beats Rock!") + computerScore+1;
//             computerScore= computerScore + 1;
//         }
//         if (playerSelection == "paper" && computerChoice == "scissors") {
//             console.log("You lost!, Scissors beats Paper!");
//             computerScore= computerScore + 1;
//         }
//         if (playerSelection == "scissors" && computerChoice == "rock") {
//             console.log("You lost!, Rock beats Scissors!");
//             computerScore= computerScore + 1;
//         }
//         if (playerSelection == "paper" && computerChoice == "rock") {
//             console.log("You won!, Paper beats Rock!") + (playerScore+1);
//             playerScore = playerScore+1;
//         }
//         if (playerSelection == "scissors" && computerChoice == "paper") {
//             console.log("You won!, Scissors beats paper!");
//             playerScore = playerScore+1;
//         }
//         if (playerSelection == "rock" && computerChoice == "scissors") {
//             console.log("You won!, Rock beats Scissors!");
//             playerScore = playerScore+1;
//         }
//         console.log("Round " + round + "\ncomputer's choice = " + computerChoice + "\nYour choice = " + playerSelection + "\nPlayer's Score:" + playerScore + "\nComputers Score:" +computerScore);
//         console.log("\n---------------------------------------")
//     }
//     if (playerScore >= 3) {
//         console.log("You won the game!")
//     } else if (computerScore >= 3) {
//         console.log("You lost the game!")
//     } else if ( playerScore > computerScore){
//         console.log("Technically you won.")
//     } else if (computerScore > playerScore) { 
//         console.log("Technically the computer won.")
//     } else {
//         console.log("Its a tie!")
//     }

// }
// doSomething()