const { publicDecrypt } = require("crypto");
const fs = require("fs");

function read(num) {
  const read1 = fs.readFileSync("./puzzles.txt", "utf-8").split("\n");
  // console.log(read1);
  const getSudoku = read1[num - 1].split("");

  // console.log(getSudoku);
  const board = [];
  for (let i = 0; i < 9; i++) {
    board.push(getSudoku.slice(i * 9, (i + 1) * 9));
  }

  return board;
function solveSudoku(board) {
  const isValid = (row, col, num) => {
      // Проверяем, нет ли уже этой цифры в текущей строке
      for (let i = 0; i < 9; i++) {
          if (board[row][i] === num) {
              return false;
          }
      }
      // Проверяем, нет ли уже этой цифры в текущем столбце
      for (let i = 0; i < 9; i++) {
          if (board[i][col] === num) {
              return false;
          }
      }
      // Проверяем, нет ли уже этой цифры в текущем 3x3 подквадрате
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = startRow; i < startRow + 3; i++) {
          for (let j = startCol; j < startCol + 3; j++) { 
              if (board[i][j] === num) {
                  return false;
              }
        
      }
      return true;
  };
}
}