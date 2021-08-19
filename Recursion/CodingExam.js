function findFactorialRecursive(number) {
  // 3! = 1 * 2 * 3

  if (number === 2) {
    return 2;
  }
  if (number < 0) {
    return -1 * (-1 * number * findFactorialRecursive(-1 * number - 1));
  } else {
    return number * findFactorialRecursive(number - 1);
  }
}

function findFactorialIterative(number) {
  let anwser = 1;
  let input = number > 0 ? number : -1 * number;
  for (let i = input; i >= 2; i--) {
    anwser = anwser * i;
  }
  return number > 0 ? anwser : -1 * anwser;
}

function fibonacciIterative(n) {
  //0 , 1 , 1,  2, 3 , 5, 8, 13, 21, 34, 55, 89, 144 ...

  // input = 5

  let arr = [0, 1];

  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

//0 , 1 , 1,  2, 3 , 5, 8, 13, 21, 34, 55, 89, 144 ...
function fibonacciRecursive(n) {
  if (n < 2) {
    return [0, 1];
  }

  let s = fibonacciRecursive(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);

  return s;
}

//console.log(fibonacciIterative(5));
// console.log(findFactorialIterative(3));
console.log(fibonacciRecursive(5));
