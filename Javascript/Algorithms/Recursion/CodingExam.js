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

let calculaton = 0;
let calculaton1 = 0;
//0 , 1 , 1,  2, 3 , 5, 8, 13, 21, 34, 55, 89, 144 ...
function fibonacciRecursive(n) {
  calculaton1++;
  if (n <= 1) {
    return [n, 1];
  }

  let s = fibonacciRecursive(n - 1);
  s.push(s[s.length - 1] + s[s.length - 2]);

  return s;
}

function fibonacciMaster() {
  let cache = {};
  let list = [];
  console.log(list);
  return function fib(n) {
    calculaton++;
    if (n in cache) {
      console.log(list);
      return cache[n];
    } else {
      if (n < 2) {
        if (n === 0) {
          list.push(n);
        }
        console.log(list);
        return n;
      }

      cache[n] = fib(n - 1) + fib(n - 2);
      list.push(cache[n]);
      console.log(list);
      return cache[n];
    }
  };
}


console.log(fibonacciRecursive(5));
// console.log(findFactorialIterative(3));

// const memorize = fibonacciMaster();
// console.log(memorize(35));
// console.log(fibonacciRecursive(35));
// console.log('cal: ', calculaton);
// console.log('cal1: ', calculaton1);

function linearSum(data = [], n) {
  if (n === 0) {
    return 0;
  } else {
    return linearSum(data, n - 1) + data[n - 1];
  }
}

function binarySum(data = [], low, high) {
  if (low > high) {
    return 0;
  } else if (low === high) {
    return data[low];
  } else {
    let mid = Math.floor((low + high) / 2);

    return binarySum(data, low, mid) + binarySum(data, mid + 1, high);
  }
}

// function power(x, n) {
//   if (n === 0) {
//     return 1;
//   }
//   return x * power(x, n - 1);
// }

// console.log(power(2, 3)); === 8

// 2* power(2,2) = 2 * 4 = 8

//    2* power(2,1) = 2 * 2 = 4

//       2* power(2,0) = 2* 1 = 2;

function power(x, n) {
  if (n === 0) {
    return 1;
  } else {
    let partial = power(x, Math.floor(n / 2));
    let result = partial * partial;
    if (n % 2 === 1) {
      result *= x;
    }
    return result;
  }
}
//console.log(power(2, 3));
console.log(binarySum([2, 3, 4], 0, 2));
