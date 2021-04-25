let players = ['x', 'o'];
let activePlayer = 0;
let board;

function begin() {
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
}

function change() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
}

function win() {
  let slip = [
    [board[2][0], board[2][1], board[2][2]],
    [board[1][0], board[1][1], board[1][2]],
    [board[0][0], board[0][1], board[0][2]],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  for (let i = 0; i < slip.length; i++) {
    if (slip[i][0] == players[activePlayer] && slip[i][1] == players[activePlayer] && slip[i][2] == players[activePlayer]) {
      showWinner(players[activePlayer]);
    }
    if (slip[i][0] == players[activePlayer] && slip[i][1] == players[activePlayer] && slip[i][2] == players[activePlayer]) {
      showWinner(players[activePlayer]);
    }
  }
}

function startGame() {
  begin();
  renderBoard(board);
  players[1];
}

function click(row, col) {
  board[row][col] = players[activePlayer];
  renderBoard(board);
  win();
  change();
}