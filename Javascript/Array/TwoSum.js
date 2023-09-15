const twoSum = function (nums, target) {
    const objTemp = {};
  
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (objTemp[target - num] != null) {
        return [objTemp[target - num], i];
      }
      objTemp[num] = i;
    }
  };
  

console.log(twoSum([1,2,3,4,5],9))