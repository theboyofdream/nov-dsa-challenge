const input = require('prompt-sync')();
/**
 * @param {string[]} tokens
 * @return {number}
 */

var evalRPN = function (tokens) {
  let a = tokens;
  let i = 0;

  function calc(a, b, c) {
    if (c == '+') {
      return a + b;
    }
    if (c == '-') {
      return a - b;
    }
    if (c == '*') {
      return a * b;
    }
    if (c == '/') {
      return a / b;
    }
  }

  while (a.length > 2) {
    let c = calc(parseInt(a[i]), parseInt(a[i + 1]), a[i + 2]);

    if (c !== undefined) {
      c = c > 0 ? Math.floor(c) : Math.ceil(c);
      a.splice(i, 3, c);
      i = 0;
    } else {
      i++;
    }
  }

  return parseInt(a[0]);
};

console.log(
  '--------------------------------\n',
  'SAMPLE INPUT/OUTPUT\n',
  '\n',
  'INPUT:\n',
  'arr: ["2","1","+","3","*"]\n',
  '\n',
  'OUTPUT:\n',
  '9\n',
  '\n',
  'INPUT:\n',
  'arr: ["4","13","5","/","+"]\n',
  '\n',
  'OUTPUT:\n',
  '6\n',
  '\n',
  'INPUT:\n',
  'arr: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]\n',
  '\n',
  'OUTPUT:\n',
  '22\n',
  '\n',
  'INPUT:\n',
  'arr: ["18"]\n',
  '\n',
  'OUTPUT:\n',
  '18\n',
  '--------------------------------\n'
);

let arr = JSON.parse(input('arr: '));
console.log('\nRESULT\n', evalRPN(arr));
