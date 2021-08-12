function mergeSortedArrays(array1 = [], array2 = []) {
  const mergeSortedArray = [];
  let tempj = 0;
  for (let i = 0; i < array1.length; i++) {
    for (let j = tempj; j < array2.length; j++) {
      if (array1[i] < array2[j]) {
        mergeSortedArray.push(array1[i]);
        if (tempj === array2.length - 1 && i === array1.length - 1) {
          mergeSortedArray.push(array2[j]);
        }
        break;
      } else if (array1[i] > array2[j]) {
        mergeSortedArray.push(array2[j]);
        tempj = j + 1;
        if (tempj === array2.length && i === array1.length - 1) {
          mergeSortedArray.push(array1[i]);
        } else {
          i--;
        }

        break;
      } else {
        mergeSortedArray.push(array1[i]);
        mergeSortedArray.push(array2[j]);
        tempj = j + 1;
        break;
      }
    }
  }
  return mergeSortedArray;
}

function mergeSortedArrays2(array1 = [], array2 = []) {
  const returnArray = [];
  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      returnArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      returnArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return returnArray;
}

console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
