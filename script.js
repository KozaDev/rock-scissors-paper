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
