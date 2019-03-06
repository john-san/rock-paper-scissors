function addGameMessage(message) {
  $("#gameText").append(`${message}<br>`);
}

function wipeGameMessages() {
  $("#gameText").text('');
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
  wipeGameMessages();
  $("#gameText").append('<br><b>Game Reset!!</b>');
  updateScoreboard();
}

function computerPlay() {
  const randomNum = getRandomNumber();
  let choice;
  if (randomNum >= 0.00 && randomNum <= 0.33) {
    choice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  // console.log(`The Computer picked ${choice}.`);
  addGameMessage(`The Computer picked ${choice}.`);
  return choice;
}

function getRandomNumber() {
  let randomNum = parseFloat(Math.random().toFixed(2));
  return randomNum;
}

function playRound(event) {
  wipeGameMessages();
  roundNumber++;
  addGameMessage(`<br><b>Round ${roundNumber} started.</b>`);
  let result;
  let playerSelection = getPlayerSelection(event);
  let computerSelection = computerPlay();
  switch(playerSelection) {
    case "rock":
      result = rockScenarios(computerSelection);
      break;
    case "paper":
      result = paperScenarios(computerSelection);
      break;
    case "scissors":
      result = scissorsScenarios(computerSelection);
      break;
  }
  // console.log(`result: ${result}`);
  calculateScore(result);
  tellScoreboard();
  updateScoreboard();
  return result;
}

function rockScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      // console.log("Rock vs Rock; It's a tie!");
      addGameMessage("Rock vs Rock; It's a tie!");
      result = 0;
      break;
    case "paper":
      // console.log("Rock vs Paper; You lose!");
      addGameMessage("Rock vs Paper; You lose!");
      result = -1;
      break;
    case "scissors":
      // console.log("Rock vs Scissors; You win!");
      addGameMessage("Rock vs Scissors; You win!");
      result = 1;
      break;
  }

  return result;
}

function paperScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      // console.log("Paper vs Rock; You win!");
      addGameMessage("Paper vs Rock; You win!");
      result = 1;
      break;
    case "paper":
      // console.log("Paper vs Paper; It's a tie!");
      addGameMessage("Paper vs Paper; It's a tie!");
      result = 0;
      break;
    case "scissors":
      // console.log("Paper vs Scissors; You lose!");
      addGameMessage("Paper vs Scissors; You lose!");
      result = -1;
      break;
    }

  return result;
}

function scissorsScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      // console.log("Paper vs Rock; You win!");
      addGameMessage("Paper vs Rock; You win!");
      result = 1;
      break;
    case "paper":
      // console.log("Paper vs Paper; It's a tie!");
      addGameMessage("Paper vs Paper; It's a tie!");
      result = 0;
      break;
    case "scissors":
      // console.log("Paper vs Scissors; You lose!");
      addGameMessage("Paper vs Scissors; You lose!");
      result = -1;
      break;
  }

  return result;
}


function calculateScore(result) {
  // console.log(`result: ${result}`);
  switch(result) {
    case 1:
      playerScore++;
      break;
    case 0:
      // do nothing;
      break;
    case -1:
      computerScore++;
    break;
  }
}

function tellScoreboard() {
  // console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
  // console.log(`Round ${roundNumber} completed.`);
  addGameMessage(`Player: ${playerScore}; Computer: ${computerScore}`);
  addGameMessage(`Round ${roundNumber} completed.`);
}

function tellFinalScore() {
  console.log("Game over!");
  console.log(`Final Scoreboard`);
  console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log('You are the champion!');
  } else if (playerScore == computerScore) {
    console.log('You guys tied!  Nobody wins!');
  } else {
    console.log('The Computer is the champion!');
  }
}


// function initializeGame() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let roundNumber = 0;

  // while (roundNumber < 5) {
  //   roundNumber++;
  //   const playerSelection = getPlayerSelection();
  //   const computerSelection = computerPlay();
  //   const result = playRound(playerSelection, computerSelection);
  //   calculateScore(result);
  //   tellScoreboard();
  // }

  // tellFinalScore();
// }


function getPlayerSelection(event) {
  // console.log(`event.target.id: ${event.target.id}`);
  const selection = event.target.id;
  // console.log(`You picked ${selection}.`);
  addGameMessage(`You picked ${selection}.`);
  return selection;
  // let validated = false;
  // let answer;
  // const validAnswers = ['rock', 'paper', 'scissors'];
  // while (validated == false) {
  //   answer = prompt("Enter your selection: rock, paper, or scissors").toLowerCase();
  //   if (validAnswers.indexOf(answer) > -1) {
  //     console.log(`You picked ${answer}.`);
  //     validated = true;
  //   } else {
  //     alert("Hmm, that doesn't seem to be a valid answer.  Let's try this again.");
  //   }
  // }
  //
  //
  // return answer;
}

// Global Variables
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function updateScoreboard() {
  $("#playerScore").text(playerScore);
  $("#computerScore").text(computerScore);
  $("#roundNumber").text(roundNumber);
}

function startGame(event) {
  let newControls = `<div>Pick your choice!<br><br>
  <button id="rock">Rock</button> <button id="paper">Paper</button> <button id="scissors">Scissors</button></div>`
  console.log("game started");
  controls.innerHTML = newControls;
  $("#resetGameContainer").append('<button id="resetBtn">Reset Game</button><br><br>');
  updateScoreboard();
}



$("#startBtn").click(startGame);
$("#controls").on("click", "#rock", playRound);
$("#controls").on("click", "#paper", playRound);
$("#controls").on("click", "#scissors", playRound);
$("#resetGameContainer").on("click", "#resetBtn", resetGame);
