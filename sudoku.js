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
}
