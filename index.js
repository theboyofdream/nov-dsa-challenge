const input = require('prompt-sync')();

console.clear();
console.log(
  'Select solution (number): \n', 
  '1. snail traversal\n',
  '2. evaluate reverse polish notation\n',
);

const questionNum = parseInt(input(''));

switch (questionNum) {
  case 1:
    console.log('\nRUNNING snail traversal solution');
    require('./src/snail-traversal.js');
  case 2:
    console.log('\nRUNNING evaluate-reverse-polish-notation');
    require('./src/evaluate-reverse-polish-notation.js');
}
