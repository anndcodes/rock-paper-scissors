function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  let winner = 0;
  //if winner equals to 0, the computer is the winner
  //if winner equals to 1 the player is the winner
  //and if winner equals to 2, it's a tie

  switch (true) {
    case playerSelection === "rock" && computerSelection === "paper":
      console.log("You Lose! Paper beats Rock!");
      winner = 0;
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      console.log("You Lose! Scissors beats Paper!");  
      winner = 0;
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      console.log("You Lose! Rock beats scissors!");
      winner = 0;
      break;
    case playerSelection === "rock" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "scissors":
      console.log("It's a tie!");
      winner = 2;
      break;
      case playerSelection === "paper" && computerSelection === "rock":
        console.log("You Win! Paper beats Rock");
        winner = 1;
        break;
      case playerSelection === "scissors" && computerSelection === "paper":
        console.log("You Win! Scissors beats Paper");
        winner = 1;
        break;
      case playerSelection === "rock" && computerSelection === "scissors":
        console.log("You Win! Rock beats Scissors!");
        winner = 1;
        break;
    default: 
      console.log("Enter a valid option.");
  }

  return winner;
}



function game() {
  let pointsUser = 0;
  let pointsComputer = 0;
  let tie = 0;

  for (let i = 0; i < 5; i++) {
    //the player enter a input and play the game for 5 rounds
    let playerSelection = prompt('Choose between rock, paper or scissors');
    playerSelection = playerSelection.toLowerCase();
    console.log(`${i+1} The player has chosen ${playerSelection}`);

    let computerSelection = getComputerChoice();
    console.log(`${i+1} The computer has chosen ${computerSelection}`);

    let finalWinner = playRound(playerSelection, computerSelection);
    // console.log(finalWinner);

    
    if(finalWinner === 1) {
      pointsUser++;
    } else if(finalWinner === 0) {
      pointsComputer++;
    } else {
      tie++;
    }
    
  }

  //the player that have more points will be the winner of the game.

  if(pointsUser > pointsComputer) {
    console.log("Congratulations! You are the winner!");
  } else if(pointsComputer > pointsUser) {
    console.log("Oops, you lost. The computer has won the game!");
  } else {
    console.log("OMG! It's a tie!!");
  }
  
}

console.log(game());