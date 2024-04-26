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
