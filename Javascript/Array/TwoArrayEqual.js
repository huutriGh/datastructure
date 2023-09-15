const compareTwoArray = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let obj = {};
  for (const i of arr1) {
    obj[i] = (obj[i] || 0) + 1;
  }
  for (const i of arr2) {
    if (obj[i]) {
      obj[i]--;
      if (obj[i] === 0) {
        delete obj[i];
      }
    }
  }
  if (Object.keys(obj).length > 0) {
    return false;
  }
  return true;
};

//console.log(compareTwoArray([5, 4, 4, 9, 2, 3], [5, 4, 9, 2, 3, 4]));

const compareTwoArrayv1 = (arr1 = [], arr2 = []) => {
  return JSON.stringify(arr1.sort((a,b)=>a-b)) === JSON.stringify(arr2.sort((a,b)=>a-b));
};
console.log(compareTwoArrayv1([5, 4, 4,9, 2, 3], [5, 4, 9, 2, 3, 4]));
console.log(compareTwoArrayv1([1,2,3,4,5,6], [6,5,4,3,2,1]));
