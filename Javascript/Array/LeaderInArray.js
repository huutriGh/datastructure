function printLeaders(arr, size) {
  const leader = [];
  let max_from_right = arr[size - 1];
  leader.push(max_from_right);

  for (let i = size - 2; i >= 0; i--) {
    if (max_from_right < arr[i]) {
      max_from_right = arr[i];
      leader.push(max_from_right);
    }
  }
  console.log(leader);
}

/* Driver program to test above function*/

let arr = [16, 17, 4, 3, 5, 2];
let n = arr.length;
printLeaders(arr, n);
