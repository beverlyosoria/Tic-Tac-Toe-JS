/*----- constants -----*/
const TURNS = {
	'1': 'X',
	'-1': 'O',
	'0': null
};

// const COMBOS = {
//   []
//   []
//   []
//   []
//   []
//   []
//   []
//   []

// }
/*----- app's state (variables) -----*/
let board, turn, winner; //naming variables in the global scope

/*----- cached element references -----*/
const msgEL = document.getElementById('msg');

/*----- event listeners -----*/

document.querySelector('section.board').addEventListener('click', handleClick);

document.querySelector('button').addEventListener('click', handleReset);

/*----- functions -----*/
init();

function init() {
	board = [
		[ 0, 0, 0 ], //column 1 (index 0)
		[ 0, 0, 0 ], //column 2 (index 1)
		[ 0, 0, 0 ] //column 3 (index 2)
	];
	turn = 1;
	winner = null; // 1, -1, null (no winner), T (tie)
	render();
}

function render() {
	msgEL.textContent = `${TURNS[turn].toUpperCase()}'s Turn`;
}

function handleClick(event) {
	let box = event.target;
	if (box.textContent) {
		return;
	} else if (turn === 1) {
		box.textContent = 'X';
	} else {
		box.textContent = 'O';
	}
	winner = getWinner();
	turn *= -1;
	render();
}

function handleReset(button) {
	location.reload();
}
