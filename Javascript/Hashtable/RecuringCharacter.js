//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]: it should be return 2
//Given an array = [2,1,1,2,3,5,1,2,4]: it should be return 1
//Given an array = [2,3,4,5]: it should be return undifined

function firstRecurringCharacter(input = []) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      let tempJ = input[j + 1];
      if (input[i] === input[j]) {
        return input[i];
      } else if (input[j] === tempJ) {
        return input[j];
      }
    }
  }
  return undefined;
}
function firstRecurringCharacter3(input = []) {
  let index = Number.MAX_SAFE_INTEGER;
  let result = undefined;
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        if (j < index) {
          index = j;
          result = input[j];
        }
      }
    }
  }
  return result;
}
function firstRecurringCharacter1(input = []) {
  let recurringObj = {};
  for (let i = 0; i < input.length; i++) {
    if (!recurringObj[input[i]]) {
      recurringObj[input[i]] = 1;
    } else {
      return input[i];
    }
  }
  return undefined;
}

// console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4]));
// console.log(firstRecurringCharacter([2, 3, 4, 5]));
console.log(firstRecurringCharacter1([2, 1, 3, 2]));
