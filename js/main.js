/*----- constants -----*/
const TURNS = {
  "1": "X",
  "-1": "O",
  "0": null
};

/*----- app's state (variables) -----*/
let board, turn, winner; //naming variables in the global scope

/*----- cached element references -----*/
const msgEL = document.getElementById("msg");

/*----- event listeners -----*/

document
  .querySelector("section.board")
  .addEventListener("click", handleClick);

/*----- functions -----*/
init();

function init() {
  board = [
    [0, 0, 0], //column 1 (index 0)
    [0, 0, 0], //column 2 (index 1)
    [0, 0, 0] //column 3 (index 2)
  ];
  turn = 1;
  winner = null; // 1, -1, null (no winner), T (tie)
  render();
}

function render() {
  board.forEach(function (colArr, colIdx) { // render the board
    console.log(colArr);

    colArr.forEach(function (cell, rowIdx) {
      let div = document.getElementById(`c${colIdx}r${rowIdx}`);
      div.textContent = TURNS[cell];

    });
  });
}

function handleClick(evt) {
  let idx = parseInt(evt.target.id.replace("col", "")); //get index of column's box clicked
  if (isNaN(idx) || winner) return; //check if box was clicked/if there's a winner
  let colArr = board[idx]; //obtain the column array in board array
  let rowIdx = colArr.indexOf(0); // get the index of the first 0 in the col array
  if (rowIdx === -1) return; //if the col is full, there are no zeros, indexOf returns -1
  // if no zeroes available (col full), do nothing
  colArr[rowIdx] = turn; //update the col array (within the board) with the player whos turn it is
  turn *= -1; // flip turns from 1 to -1; -1 to 1
  // winner = getWinner(); //update the winner
}