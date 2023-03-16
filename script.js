// ============= variables ============ //
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let roundsResults = document.querySelector(".rounds-results")
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let finalResult = document.querySelector(".final-result");

let winner = 0; 
let pointsUser = 0;
let pointsComputer = 0;


// ============= function to get the computer choice ============ //
function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomChoice];
}


// ============= function to get the results of each round game ============ //
function playRound(playerSelection, computerSelection) {
  //if winner equals to 0, the computer is the winner
  //if winner equals to 1 the player is the winner
  //and if winner equals to 2, it's a tie

  switch (true) {
    case playerSelection === "rock" && computerSelection === "paper":
      roundsResults.textContent = "You Lose! Paper beats Rock!";
      winner = 0;
      break;
    case playerSelection === "paper" && computerSelection === "scissors": 
      roundsResults.textContent = "You Lose! Scissors beats Paper!";
      winner = 0;
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      roundsResults.textContent = "You Lose! Rock beats scissors!";
      winner = 0;
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      roundsResults.textContent = "You Win! Paper beats Rock";
      winner = 1;
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      roundsResults.textContent = "You Win! Scissors beats Paper";
      winner = 1;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      roundsResults.textContent = "You Win! Rock beats Scissors!";
      winner = 1;
      break;
    default: 
      roundsResults.textContent = "It's a tie!";
      winner = 2;
  }
  return winner;
}


// ============= function to display the score of each round game ============ //
function score() {
  let btnReset = document.createElement("button");
  btnReset.classList.add("clear");
  btnReset.innerHTML = "Reset game";
  
  if(winner === 1) {
    pointsUser += 1;
    userScore.textContent = `User Score: ${pointsUser}`;
  } else if(winner === 0) {
    pointsComputer += 1;
    compScore.textContent = `Computer Score: ${pointsComputer}`
  }
  ////
  if(pointsUser === 5){
    finalResult.textContent = "Congrats! You are the winner!"

    document.body.appendChild(btnReset);
    btnReset.addEventListener("click", () => {
    pointsComputer = 0;
    pointsUser = 0;
    roundsResults.textContent = "";
    userScore.textContent = "User Score: 0";
    compScore.textContent = "Computer Score: 0";
    finalResult.textContent = "";
    btnReset.style.display = 'none';
    })
  } else if(pointsComputer === 5){
    finalResult.textContent = "Oops, the computer has won the game.";

    document.body.appendChild(btnReset);
    btnReset.addEventListener("click", () => {
    pointsComputer = 0;
    pointsUser = 0;
    roundsResults.textContent = "";
    userScore.textContent = "User Score: 0";
    compScore.textContent = " Computer score: 0";
    finalResult.textContent = "";
    })
  } 
  
}


// ============= function to actually play the round games ============ //
function game() {
  rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());

    score();
  })

  paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());

    score();
  })

  scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());

    score();
  })
}

game();