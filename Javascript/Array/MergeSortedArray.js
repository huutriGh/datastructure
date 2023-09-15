 x

 

// let arrays = [85, 24, 63, 45, 17, 31, 96, 50];
// //85 24 63 45 17 31 96 50
// function mergeTowArray(array1 = [], array2 = [], array) {
//   let i = 0;
//   let j = 0;
//   while (i + j < array.length) {
//     if (j === array2.length || (i < array1.length && array1[i] < array2[j])) {
//       array[i + j] = array1[i++];
//     } else {
//       array[i + j] = array2[j++];
//     }
//   }
// }

// function mergeSort(array = []) {
//   if (array.length === 1) {
//     return;
//   }

//   let mid = Math.floor(array.length / 2);
//   let array1 = array.slice(0, mid);
//   let array2 = array.slice(mid);
//   mergeSort(array1);
//   mergeSort(array2);

//   mergeTowArray(array1, array2, array);
// }

// function mergeBottomUp(arrayIn = [], arrayOut = [], start, inc) {
//   let end1 = Math.min(start + inc, arrayIn.length);
//   let end2 = Math.min(start + 2 * inc, arrayIn.length);
//   let x = start;
//   let y = start + inc;
//   let z = start;
//   while (x < end1 && y < end2) {
//     if (arrayIn[x] < arrayIn[y]) {
//       arrayOut[z++] = arrayIn[x++];
//     } else {
//       arrayOut[z++] = arrayIn[y++];
//     }
//   }
//   if (x < end1) {
//     arrayOut.splice(z, end1 - x, ...arrayIn.slice(x, x + (end1 - x)));
//   } else if (y < end2) {
//     arrayOut.splice(z, end2 - y, ...arrayIn.slice(y, y + (end2 - y)));
//   }
// }
// function mergeSortBottomUp(orig = []) {
//   let n = orig.length;
//   let src = orig;
//   let dest = [];
//   let temp = [];

//   for (let i = 1; i < n; i *= 2) {
//     for (let j = 0; j < n; j += 2 * i) {
//       mergeBottomUp(src, dest, j, i);
//     }
//     temp = src;
//     src = dest;
//     dest = temp;
//   }
//   if (orig !== src) {
//     orig.splice(0, n, ...src.slice(0, 0 + n));
//   }
// }



