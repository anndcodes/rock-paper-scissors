// ============= variables ============ //
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

let roundsResults = document.querySelector(".rounds-results")
let userScore = document.querySelector(".user-score");
let compScore = document.querySelector(".comp-score");
let finalResult = document.querySelector(".final-result");

let btn = Array.from(document.getElementsByClassName("btn"));
let title = Array.from(document.getElementsByClassName("title"));

let winner = 0; 
let pointsUser = 0;
let pointsComputer = 0;

let gamePlay = document.querySelector(".game-play");
let intro = document.querySelector(".intro");
let startGame = document.querySelector("#start-game");

// ========== animated title function ======== //
let i = 0;
let speed = 60;
let title1 = "Rock Paper Scissors";

function typeWriter() {
  if(i < title1.length) {
    document.getElementById("title1").innerHTML += title1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter()


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
  // cleaning the screen to only show final winner and reset button
  let btnReset = document.createElement("button");
  btnReset.classList.add("clear");
  btnReset.innerHTML = "play";
  
  roundsResults.textContent = "";
  userScore.textContent = "";
  compScore.textContent = "";

  btn.forEach(btn =>{
    btn.setAttribute("hidden", "");
  });
  
  title.forEach(title =>{
    title.setAttribute("hidden", "");
  });

  // reset button function
  document.querySelector(".results").appendChild(btnReset);
  btnReset.addEventListener("click", () => {
    btn.forEach(btn =>{
    btn.removeAttribute("hidden");
    });

    title.forEach(title =>{
      title.removeAttribute("hidden");
    });

    pointsComputer = 0;
    pointsUser = 0;
    userScore.textContent = "user Score: 0";
    compScore.textContent = "computer Score: 0";
    finalResult.textContent = "";
    finalResult.removeAttribute('style');
    btnReset.style.display = 'none';
  });
}


// ============= function to display the score of each round game and winner ============ //
function score() {  
  if(winner === 1) {
    pointsUser += 1;
    userScore.textContent = `user: ${pointsUser}`;
  } else if(winner === 0) {
    pointsComputer += 1;
    compScore.textContent = `computer: ${pointsComputer}`;
  }
  
  ////
  
  if(pointsUser === 5){
    finalResult.textContent = "Congrats! You are the winner! Wanna play again?";
    if(finalResult !== ""){
      finalResult.setAttribute('style', 'animation: typing 3.5s steps(30,end)');
    } ;
    
    gameReset();
  } else if(pointsComputer === 5){
    finalResult.textContent = "Oops, the computer has won the game. Wanna play again?";
    if(finalResult !== ""){
      finalResult.setAttribute('style', 'animation: typing 3.5s steps(30,end)');
    } ;
    
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
    intro.style.display = 'none';
  })
}

start()

// ========= dark mode button function ========= // 
function darkMode() {
  let body = document.body;
  body.classList.toggle("dark-mode");
}



