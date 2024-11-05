const input = require('prompt-sync')();
/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount != this.length) {
    console.warn('WARNING: rows * columns must be equal the array length');
    return [];
  }

  let result = [];
  let rowIndex = 0;
  let direction = 1;

  this.forEach((value, index) => {
    if (!result[rowIndex]) result[rowIndex] = [];
    let colIndex = Math.floor(index / rowsCount);

    result[rowIndex][colIndex] = value;
    rowIndex += direction;

    if (rowIndex === rowsCount) {
      rowIndex--;
      direction = -1;
    } else if (rowIndex < 0) {
      rowIndex++;
      direction = 1;
    }
  });

  return result;
};

console.log(
  '--------------------------------\n',
  'SAMPLE INPUT/OUTPUT\n',
  '\n',
  'INPUT:\n',
  'arr: [1, 2, 3, 4]\n',
  'row: 1\n',
  'col: 4\n',
  '\n',
  'OUTPUT:\n',
  '[[1, 2, 3, 4]]\n',
  '--------------------------------\n'
);
let arr = JSON.parse(input('arr: '));
let row = parseInt(input('row: '));
let col = parseInt(input('col: '));

console.log('\nRESULT\n', arr.snail(row, col));

/**

let arr = [];

arr = [1, 2, 3, 4];
console.log(arr.snail(1, 4));
// output
// [[1,2,3,4]]

console.log();

arr = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15];
console.log(arr.snail(5, 4));
// output
// [
//  [19,17,16,15],
//  [10,1,14,4],
//  [3,2,12,20],
//  [7,5,18,11],
//  [9,8,6,13]
// ]
 
*/
