// function reverse(str) {
//   if (!str || str.length < 2 || typeof str !== "string") {
//     return "hmm that not good";
//   }
//   let newString = "";

//   for (let i = str.length - 1; i > 0; i--) {
//     newString = newString + str[i];
//   }
//   return newString;

//   //   const backWard = [];
//   //   const totalItem = str.length - 1;
//   //   for (let i = totalItem; i >= 0; i--) {
//   //     backWard.push(str[i]);
//   //   }

//   //  return str.split('').reverse().join('');
// }
// console.log(reverse("Nguyen"));

let numberEntry = 0;
const scoreBoard = new Array(10);
function addScore(score) {
  if (numberEntry < scoreBoard.length || score > scoreBoard[numberEntry - 1]) {
    if (numberEntry < scoreBoard.length) {
      numberEntry++;
    }
    let j = numberEntry - 1;
    while (j > 0 && scoreBoard[j - 1] < score) {
      scoreBoard[j] = scoreBoard[j - 1];
      j--;
    }
    scoreBoard[j] = score;
  }
}

addScore(300);
addScore(60);
addScore(20);
addScore(30);
addScore(40);
addScore(10);
addScore(20);
addScore(50);
addScore(100);
addScore(200);
addScore(10);
addScore(10);
addScore(10);

console.log(scoreBoard);

// const arr = [];
// let cnt = 0;

// function addScore2(score) {
//   if (cnt < 10) {
//     arr.unshift(score);
//     cnt++;
//   }
//   let i = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (score > arr[i + 1]) {
//       arr[i] = arr[i + 1];
//     } else {
//       break;
//     }
//   }
//   arr[i] = score;
// }
// function addScore3(score) {
//   if (cnt < 10) {
//     arr.push(score);
//     cnt++;
//   }
//   let i = 0;

//   for (i = 0; i < arr.length; i++) {
//     if (score > arr[i + 1]) {
//       arr[i] = arr[i + 1];
//     } else {
//       break;
//     }
//   }
//   arr[i] = score;
// }
// 1 2 3 4 5 6 7 8 9 10 11
// 11 11 3 4 5 6 7 8 9 10
// let numberEntry = 0;
// const scoreBoard = new Array(10);

//Bug
// function addScore(score) {
//   if (numberEntry < scoreBoard.length || score > scoreBoard[0]) {
//     if (numberEntry < scoreBoard.length) {
//       numberEntry++;
//     }
//     if (numberEntry > 10) {
//       let j = 0;
//       scoreBoard[0] = score;
//       let temp;
//       while (j < scoreBoard.length && scoreBoard[j] > scoreBoard[j + 1]) {
//         temp = scoreBoard[j + 1];
//         scoreBoard[j+1] = scoreBoard[j];
//         scoreBoard[j] = temp
//         j++;
//       }
//     } else {
//       let j = numberEntry - 1;
//       while (j > 0 && scoreBoard[j - 1] > score) {
//         scoreBoard[j] = scoreBoard[j - 1];
//         j--;
//       }
//       scoreBoard[j] = score;
//     }
//   }
// }
// // 1

// addScore(300);
// addScore(60);
// addScore(20);
// addScore(30);
// addScore(40);
// addScore(10);
// addScore(20);
// addScore(50);
// addScore(100);
// addScore(200);
// addScore(10);
// addScore(10);
// addScore(10);
// addScore(400);
// console.log(scoreBoard);

// function sortArray(scoreBoard = []) {
//   let j = 0;
//   let temp;
//   while (j < scoreBoard.length && scoreBoard[j] > scoreBoard[j + 1]) {
//     temp = scoreBoard[j + 1];
//     scoreBoard[j + 1] = scoreBoard[j];
//     scoreBoard[j] = temp;
//     j++;
//   }

//   console.log(scoreBoard);
// }

// sortArray([11, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
