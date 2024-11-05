const input = require('prompt-sync')();

console.clear();
console.log('Select solution (number): \n', '1. snail traversal\n');

const questionNum = parseInt(input(''));

switch (questionNum) {
  case 1:
    console.log('\nRUNNING snail traversal solution');
    require('./src/snail-traversal.js');
}
