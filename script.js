function getComputerChoice() {
  let computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[randomChoice];
}