const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const playAgain = document.querySelector(".page__results-restart");

rock.addEventListener("click", function () {
  startGame(this.id);
});

scissors.addEventListener("click", function () {
  startGame(this.id);
});

paper.addEventListener("click", function () {
  startGame(this.id);
});

playAgain.addEventListener("click", function () {
  toggleSections();
});

function startGame(playersMove) {
  const randomMove = createRandomMove();
  toggleSections();
  displayMoves(playersMove, randomMove);
  displayResult(playersMove, randomMove);
}

function createRandomMove() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  if (randomNumber === 1) return "rock";
  else if (randomNumber === 2) return "scissors";
  else if (randomNumber === 3) return "paper";
}

function displayMoves(playersMove, computersMove) {
  const playersMoveDiv = document.querySelector("#players-move");
  const computersMoveDiv = document.querySelector("#computers-move");
  playersMoveDiv.innerHTML = `<span class="far fa-hand-${playersMove}"></span>`;
  computersMoveDiv.innerHTML = `<span class="far fa-hand-${computersMove}"></span>`;
}

function displayResult(playersMove, computersMove) {
  const resultDiv = document.querySelector("#result");

  if (playersMove === computersMove) {
    resultDiv.style.color = "inherit";
    resultDiv.innerHTML = "draw";
  } else if (
    (playersMove === "paper" && computersMove === "scissors") ||
    (playersMove === "rock" && computersMove === "paper") ||
    (playersMove === "scissors" && computersMove === "rock")
  ) {
    resultDiv.style.color = "red";
    resultDiv.innerHTML = "you lost";
  } else {
    resultDiv.style.color = "green";
    resultDiv.innerHTML = "you won";
  }
}

function toggleSections() {
  const pageMovesDOM = document.querySelector(".page__moves");
  const pageResultsDOM = document.querySelector(".page__results");

  pageMovesDOM.classList.toggle("none");
  pageResultsDOM.classList.toggle("none");
}
