/*----- constants -----*/
const COLORS = {
  "0": null,
  "1": "X",
  "-1": "O"
};

/*----- app's state (variables) -----*/
let board, turn, winner; //naming variables in the global scope

/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

function init() {
  board = [
    [0, 0, 0], //column 1 (index 0)
    [0, 0, 0], //column 2 (index 1)
    [0, 0, 0] //column 3 (index 2)
  ];
  turn = 1;
  winner = null; // 1, -1, null (no winner), T (tie)
}
