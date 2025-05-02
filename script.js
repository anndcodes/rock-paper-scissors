let playerScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

const startGameBtn = document.getElementById("start-game-btn");
const introParagraph = document.querySelector(".intro-paragraph");

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");

const optionsContainer = document.querySelector(".options-container");
const scoreContainer = document.querySelector(".score-container");

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

startGameBtn.addEventListener("click", () => {
  optionsContainer.style.display = "block";
  scoreContainer.style.display = "block";

  startGameBtn.style.display = "none";
  introParagraph.style.display = "none";
});

function getRandomComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  );
}

function getRoundResults(playerOption) {
  const computerOption = getRandomComputerChoice();

  if (hasPlayerWonTheRound(playerOption, computerOption)) {
    playerScore++;
    return `Player wins! ${playerOption} beats ${computerOption}`;
  } else if (computerOption === playerOption) {
    return `It's a tie! Both chose ${playerOption}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerOption} beats ${playerOption}`;
  }
}



function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}

let i = 0;
let speed = 80;
let title = "Rock Paper Scissors";

function typeWriter() {
  if (i < title.length) {
    document.getElementById("title1").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
