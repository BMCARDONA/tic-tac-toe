let cells = document.querySelectorAll(".cell");
let gameOverCaption = document.querySelector(".gameOverCaption");
let isGameOver = false;
let moveCount = 1;
currentBoard = ['', '', '', '', '', '', '', '', ''];
currentMove = '';

const updateAndDisplayMove = (move, cell) => {
    // We'll make the game such that the first move is always 'X'
    if (move === '' || move === 'O') {
        currentMove = 'X'
        cell.textContent = 'X'
    }
    else if (move === 'X') {
      currentMove = 'O'
      cell.textContent= 'O'
  }
}

const reset = () => {
    currentBoard = ['', '', '', '', '', '', '', '', ''];
    currentMove = ''
    gameOverCaption.textContent = "";
    moveCount = 1;
    // change textContent of each cell to ''
    for (let i = 0; i < cells.length; i++) {
        cells[i].textContent = '';
    }

}

const isWinner = (board) => {
    if (board[0] === 'X' && board[1] === 'X' && board[2] === 'X' || 
        board[3] === 'X' && board[4] === 'X' && board[5] === 'X' || 
        board[6] === 'X' && board[7] === 'X' && board[8] === 'X' || 
        board[0] === 'X' && board[3] === 'X' && board[6] === 'X' || 
        board[1] === 'X' && board[4] === 'X' && board[7] === 'X' || 
        board[2] === 'X' && board[5] === 'X' && board[8] === 'X' || 
        board[0] === 'X' && board[4] === 'X' && board[8] === 'X' || 
        board[6] === 'X' && board[4] === 'X' && board[2] === 'X') {
        isGameOver = true;
        gameOverCaption.textContent = "X wins! Click any cell to play again!"
    }
    else if 
        (board[0] === 'O' && board[1] === 'O' && board[2] === 'O' || 
        board[3] === 'O' && board[4] === 'O' && board[5] === 'O' || 
        board[6] === 'O' && board[7] === 'O' && board[8] === 'O' || 
        board[0] === 'O' && board[3] === 'O' && board[6] === 'O' || 
        board[1] === 'O' && board[4] === 'O' && board[7] === 'O' || 
        board[2] === 'O' && board[5] === 'O' && board[8] === 'O' || 
        board[0] === 'O' && board[4] === 'O' && board[8] === 'O' || 
        board[6] === 'O' && board[4] === 'O' && board[2] === 'O') {
        isGameOver = true;
        gameOverCaption.textContent = "O wins! Click any cell to play again!"
    }
    else if (moveCount == 9) {
        isGameOver = true;
        gameOverCaption.textContent = "It's a tie! Click any cell to play again!"
    }
    moveCount += 1;
}

const updateBoard = (cell) => {
    idx = cell.id
    currentBoard[idx] = currentMove
    return currentBoard
}

cells.forEach(cell => {
    cell.addEventListener('click', () => {
          if (isGameOver) {
            isGameOver = false;
            reset();
          }
          if (cell.textContent == '') {
              updateAndDisplayMove(currentMove, cell)
              board = updateBoard(cell, currentMove);
              isWinner(board)
          }
    });
})

// How to add classes to different cells -- nice. 
// for (let i = 0; i < cells.length; i++){
//   cells[i].classList.add(`${i}`);
// }