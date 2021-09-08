var twoSum = function (nums, target) {
  const objTemp = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (objTemp[target - num] !== undefined) {
      return [objTemp[target - num], i];
    }
    objTemp[num] = i;
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let arr = [];
  let currNode = l1;
  let num1;
  let num2;

  while (currNode) {
    arr.push(currNode.val);
    currNode = currNode.next;
  }

  num1 = BigInt(arr.reverse().join(''));
  arr = [];
  currNode = l2;
  while (currNode) {
    arr.push(currNode.val);
    currNode = currNode.next;
  }

  num2 = BigInt(arr.reverse().join(''));
  arr = null;

  let arr3 = (num1 + num2).toString().split('').reverse();
  let head = null;
  let tail = null;
  for (let i = 0; i < arr3.length; i++) {
    let newNode = new ListNode(arr3[i], null);
    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }
  return head;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let obj = {
    data: {},
    count: 0,
  };
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (obj.data[s[i]] === undefined) {
      obj.data[s[i]] = i;
      obj.count++;
    } else {
      i = obj.data[s[i]];
      max = max < obj.count ? obj.count : max;
      obj.count = 0;
      obj.data = {};
    }
  }
  return max < obj.count ? obj.count : max;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const returnArray = [];
  let array1Item = nums1[0];
  let array2Item = nums2[0];
  let i = 1;
  let j = 1;

  while (array1Item !== undefined || array2Item !== undefined) {
    if (array2Item === undefined || array1Item < array2Item) {
      returnArray.push(array1Item);
      array1Item = nums1[i];
      i++;
    } else {
      returnArray.push(array2Item);
      array2Item = nums2[j];
      j++;
    }
  }

  if (returnArray.length === 0) {
    return 0;
  } else {
    let mid = returnArray.length / 2;
    if (returnArray.length % 2 === 0) {
      return (returnArray[mid - 1] + returnArray[mid]) / 2;
    } else {
      return returnArray[Math.floor(mid)];
    }
  }
};

