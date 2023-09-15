function findMissing(arr, N) {
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
    temp[i] = 0;
  }

  for (i = 0; i < N; i++) {
    temp[arr[i] - 1] = 1;
  }

  let ans = 0;
  for (i = 0; i <= N; i++) {
    if (temp[i] == 0) ans = i + 1;
  }
  console.log(ans);
}

// Driver code
// let arr = [0, 1, 3, 7, 5, 6, 2, 8, 4, 10];
// let n = arr.length;

// Function call
//findMissing(arr, n);
// let arr = [1, 3, 7, 5, 6, 2, 8, 4, 10];
// let n = arr.length + 1;
// function getMissingNo(a, n) {
//   let total = (n * (n + 1)) / 2; //Math.floor(((n + 1) * (n + 2)) / 2);
//   for (let i = 0; i < n - 1; i++) {
//     total -= a[i];
//   }

//   console.log(total);
//   return total;
// }

// getMissingNo(arr, n);

function findMissingv1(arr, size) {
  let i;
  for (i = 0; i < size; i++) {
    if (Math.abs(arr[i]) - 1 == size) {
      continue;
    }
    let ind = Math.abs(arr[i]) - 1;
    arr[ind] *= -1;
  }

  let ans = size + 1;
  for (i = 0; i < size; i++) {
    if (arr[i] > 0) ans = i + 1;
  }

  console.log(ans);
}

// Driver code
let arr = [1, 3, 7, 5, 6, 2];
let n = arr.length;
findMissingv1(arr, n);
// Function call
findMissingv1(arr, n);
