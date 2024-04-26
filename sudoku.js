const fs = require('fs')

function read(num) {
  const read1 = fs.readFileSync("./puzzles.txt", "utf-8").split('\n')
  
  let element = read1.map((el)=> el.split(','))
  let element2 = element.map((el) => el[0].match(/.{9}/g))

  for (let i = 0; i < element2.length; i++) {
    for (let index = 0; index <  element2[i].length; index++) {
     element2[i][index] = element2[i][index].split("");
      
    }
    
   
    
  }
  return element2[num];
  
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
//console.log(element);
}



    const solve = (board) => {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '-') {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(row, col, num.toString())) {
                            board[row][col] = num.toString();
                            if (solve()) {
                                return true;
                            }
                            board[row][col] = '-';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    };

    solve();
    return board;










function solve(read) {

  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
}

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
