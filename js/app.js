const btn = document.querySelector(".btn-start ");
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let pcSelection;
let choise;
const select = function () {
  let selection = prompt("what is your choice", " ");
  if (selection !== rock && selection !== paper && selection !== scissors) {
    selection = prompt("enter valid answer", "");
  }
  return selection;
};

const pcSelect = function () {
  pcSelection = Math.round(Math.random() * 3);
  if (pcSelection <= 1) {
    choise = rock;
  } else if (pcSelection <= 2) {
    choise = scissors;
  } else if (pcSelection <= 3) {
    choise = paper;
  }
  return choise;
};
const compareChoise = function (human, pc) {
  let status;
  if (
    (human === rock && pc === scissors) ||
    (pc === paper && human === scissors) ||
    (pc === rock && human === paper)
  ) {
    status = true;
  } else if (
    (pc === rock && human === scissors) ||
    (pc === scissors && human === paper) ||
    (pc === paper && human === rock)
  ) {
    status = false;
  }
  return status;
};
const start = function () {
  console.log("game is started");
  const humanChoise = select();
  const pcChoise = pcSelect();
  console.log("pc choice", pcChoise);
  console.log("ur choice", humanChoise);
  const result = compareChoise(humanChoise, pcChoise);
  if (result === true) {
    alert("you win");
  } else if (result === false) {
    alert("pc wins");
  } else {
    alert("its a draw");
  }
};

btn.addEventListener("click", start);
