const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array = []) {
  let input = array;
  for (let i = 0; i < input.length; i++) {
    let smallest = input[i];
    let smallestIndex = i;
    for (let j = i + 1; j < input.length; j++) {
      if (input[smallestIndex] > input[j]) {
        smallestIndex = j;
      }
    }
    input[i] = input[smallestIndex];
    input[smallestIndex] = smallest;
  }
  return input;
}

console.log(selectionSort(numbers));
