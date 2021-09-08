// 1, 2, 3 ,4 ,5, 6
function binarySearch(data = [], target, low, high) {
  if (low > high) {
    return false;
  }
  let midean = Math.floor((low + high) / 2);
  if (data[midean] === target) {
    return true;
  }
  if (target > data[midean]) {
    return binarySearch(data, target, midean + 1, high);
  } else return binarySearch(data, target, low, midean - 1);
}

console.log(
  binarySearch(
    [2, 4, 5, 7, 8, 9, 12, 14, 17, 19, 22, 25, 27, 28, 33, 37],
    2,
    0,
    15
  )
);
