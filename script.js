const winningScore = 5;

let playerPoints = 0;
let computerPoints = 0;
let roundsPlayed = 0;

let playerSelection;
let compSelect;

let body = document.querySelector('body');
let rock = document.querySelector('#rockbtn');
let paper = document.querySelector('#paperbtn');
let scissors = document.querySelector('#scissorsbtn');

let roundResultsDiv = document.createElement('div');
roundResultsDiv.setAttribute('style', 'white-space: pre;');
body.appendChild(roundResultsDiv);

let endResult = document.createElement('p');

rock.addEventListener('click', () => {
  magicallyOptimize("rock");
});

paper.addEventListener('click', () => {
  magicallyOptimize("paper");
});

scissors.addEventListener('click', () => {
  magicallyOptimize("scissors");
});


function magicallyOptimize(choiceString) {
  playerSelection = choiceString;
  if (document.body.contains(endResult)) {
    body.removeChild(endResult);
  }
  compSelect = ["rock", "paper", "scissors"][Math.floor((Math.random()*2))]
  //console.log(playerSelection + " " + compSelect);
  let roundUp = playRound();
  let andTheResultIs = "Round " + (roundsPlayed+1) + "\r\n" + "You chose "
                        + playerSelection + ", the computer chose "
                        + compSelect + ". That means " + roundUp + " this round."
                        + "\r\n" + "So far you have won " + playerPoints + " rounds. "
                        + " The computer has won " + computerPoints + " rounds.";
  //console.log(andTheResultIs);
  roundResultsDiv.textContent = andTheResultIs;
  roundsPlayed++;
  if (playerPoints === winningScore || computerPoints === winningScore) {winner()};
}

function playRound() {
  if (playerSelection === compSelect) {
    return "neither of you wins";
  } else if ((playerSelection == "paper" && compSelect == "rock") ||
      (playerSelection == "rock" && compSelect == "scissors") ||
      (playerSelection == "scissors" && compSelect == "paper")) {
       playerPoints++;
    return "you win";
  } else {
    computerPoints++;
    return "the computer wins";
  }
}

function winner() {
  if (playerPoints>computerPoints) {
    sayWhoWins("You win the game!");

  } else if (playerPoints < computerPoints){
    sayWhoWins("Computer wins the game!");
  } else {
    sayWhoWins("The game ends with a tie!");
  }
}

function sayWhoWins(who) {
  endResult.textContent = who;
  body.appendChild(endResult);
  playerPoints = 0;
  computerPoints = 0;
}
