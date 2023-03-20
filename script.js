// ============= variables ============ //
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let roundsResults = document.querySelector(".rounds-results")
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let finalResult = document.querySelector(".final-result");

let btn = Array.from(document.getElementsByClassName("btn"));

let winner = 0; 
let pointsUser = 0;
let pointsComputer = 0;

let gamePlay = document.querySelector(".game-play");
let intro = document.querySelector(".intro");
let startGame = document.querySelector("#start-game");

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

// ============ function to reset the game ========
function gameReset() {
  let btnReset = document.createElement("button");
  btnReset.classList.add("clear");
  btnReset.innerHTML = "play again";
  
  btn.forEach(btn =>{
    btn.setAttribute("disabled", "");
  });

  let gameOverMsg = document.createElement("p");
  gameOverMsg.textContent = "game over, wanna play again?";
  document.body.appendChild(gameOverMsg);

  document.body.appendChild(btnReset);
  btnReset.addEventListener("click", () => {
    btn.forEach(btn =>{
    btn.removeAttribute("disabled");
    });
    pointsComputer = 0;
    pointsUser = 0;
    roundsResults.textContent = "";
    userScore.textContent = "User Score: 0";
    compScore.textContent = "Computer Score: 0";
    finalResult.textContent = "";
    btnReset.style.display = 'none';
    gameOverMsg.style.display = 'none';
  });
}


// ============= function to display the score of each round game and winner ============ //
function score() {  
  if(winner === 1) {
    pointsUser += 1;
    userScore.textContent = `User Score: ${pointsUser}`;
  } else if(winner === 0) {
    pointsComputer += 1;
    compScore.textContent = `Computer Score: ${pointsComputer}`
  }

  ////
  if(pointsUser === 5){
    finalResult.textContent = "Congrats! You are the winner!";
    gameReset();
  } else if(pointsComputer === 5){
    finalResult.textContent = "Oops, the computer has won the game.";
    gameReset();
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

// ============= function that insert a start page before game play =========== //
function start() {
  gamePlay.setAttribute("hidden", "");
  
  startGame.addEventListener("click", () => {
    gamePlay.removeAttribute("hidden");
  game();
    // intro.setAttribute("hidden", "");
    intro.style.display = 'none';
  })
}

start()

// ========= dark mode button function ========= // 
function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

// ========== animated title function ======== //
let i = 0;
let title = "Rock Paper Scissors";
let speed = 60;

function typeWriter() {
  if(i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()