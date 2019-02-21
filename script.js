console.log('hello world');

function computerPlay() {
  const randomNum = getRandomNumber();
  let choice;
  if (randomNum >= 0.00 && randomNum <= 0.33) {
    choice = "rock";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    choice = "paper";
  } else {
    choice = "scissors"
  }

  return choice;
}

function getRandomNumber() {
  let randomNum = parseFloat(Math.random().toFixed(2));
  return randomNum;
}

function playRound(playerSelection, computerSelection) {
  let result;
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

  return result;
}

function rockScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      result = "Rock vs Rock; It's a tie!";
      break;
    case "paper":
      result = "Rock vs Paper; You lose!";
      break;
    case "scissors":
      result = "Rock vs Scissors; You win!";
      break;
  }

  return result;
}

function paperScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      result = "Paper vs Rock; You win!";
      break;
    case "paper":
      result = "Paper vs Paper; It's a tie!";
      break;
    case "scissors":
      result = "Paper vs Scissors; You lose!";
      break;
    }

  return result;
}

function scissorsScenarios(computerSelection) {
  let result;

  switch(computerSelection) {
    case "rock":
      result = "Paper vs Rock; You win!";
      break;
    case "paper":
      result = "Paper vs Paper; It's a tie!";
      break;
    case "scissors":
      result = "Paper vs Scissors; You lose!";
      break;
  }

  return result;
}


function game() {
  let playerScore = 0;
  let computerScore = 0;
  let roundNumber = 0;

  function calculateScore(num) {
    switch(num) {
      case 1:
        playerScore++;
        break;
      case 0:
        // do nothing;
        break;
      case -1:
        computerScore++
      break;
    }
    console.log(`Player: ${playerScore}; Computer: ${computerScore}`);
  }

  while (roundNumber <= 5) {
    const computerSelection = computerPlay();
    const playerSelection = getPlayerSelection();


    roundNumber++;
  }
}


function getPlayerSelection() {

  let validated = false;
  let validAnswers = ['rock', 'paper', 'scissors'];
  while (validated == false) {
    let answer = prompt("Enter your selection: rock, paper, or scissors");
    let lowerCasedAnswer = answer.toLowerCase();

  }



}


// console.log(playRound(playerSelection, computerSelection));
