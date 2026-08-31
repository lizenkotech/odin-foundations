function getComputerChoice() {
  // computer chooses
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  // human chooses
  return prompt("Rock, paper, or scissors?");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("It's a tie!");
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win!");
      humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win!");
      humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win!");
      humanScore++;
    } else {
      console.log("You lose!");
      computerScore++;
    }
  }
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();

    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  } // ← loop ends here

  // NOW the 5 rounds are finished
  console.log("Your score: " + humanScore);
  console.log("Computer score: " + computerScore);
  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("The game is a tie!");
  }
}

playGame();

// 1. Create a way for the computer to choose.
//                  ↓
// 2. Create a way for the human to choose.
//                  ↓
// 3. Create scores starting at 0.
//                  ↓
// 4. Create a function that will determine the winner.
//                  ↓
// 5. Ask the human for their choice.
//                  ↓
// 6. Get the computer's choice.
//                  ↓
// 7. Give both choices to playRound().
//                  ↓
// 8. playRound() determines the winner.
