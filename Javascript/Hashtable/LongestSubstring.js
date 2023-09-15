/*
Given a string s, find the length of the longest 
substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 

Constraints:

0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

//Input: s = "abcabcbb"

function lengthOfLongestSubstring(s) {
  let data = {};
  let count = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    if (data[s[i]] === undefined) {
      data[s[i]] = i;
      count++;
    } else {
      i = data[s[i]];
      max = max < count ? count : max;
      count = 0;
      data = {};

    }
  }
  console.log(max < count ? count : max)
  return max < count ? count : max;
}

// console.log(lengthOfLongestSubstring("pwwksqwcken"));

// function nonRepeatLongestSubstringNguyenV1(str) {
//   let obj = {};
//   let longestStrArr = [];
//   let idx = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] !== undefined || i === str.length - 1) {
//       i = obj[str[i]] === undefined && i === str.length - 1 ? i+1 : i;
//       let temp = str.substring(idx, i); //str.slice(obj[str[i]], i-1);
//       idx = i;
//       if (temp) {
//         longestStrArr.push(temp);
//         i = obj[str[i]];
//         idx = i + 1;
//         obj = {};
//       }
//     } else {
//       obj[str[i]] = i;
//     }
//   }
//   let longestStr = "";
//   for (let k = 0; k < longestStrArr.length; k++) {
//     if (longestStrArr[k].length > longestStr.length) {
//       longestStr = longestStrArr[k];
//     }
//   }
//   return longestStr;
// }

// // console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwckew"));
// // console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwcken"));
// // console.log(nonRepeatLongestSubstringNguyenV1("abcabcbb"));
// // console.log(nonRepeatLongestSubstringNguyenV1("pwwkew"));
// // console.log(nonRepeatLongestSubstringNguyenV1("bbbbb"));
// // console.log(nonRepeatLongestSubstringNguyenV1("lengthOfLongestSubstring"));
// // console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwckeen"));

// console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwwwwwckew"));
// console.log(nonRepeatLongestSubstringNguyenV1("pwwksqererrwwwwwckew"));
// console.log(nonRepeatLongestSubstringNguyenV1("pwwp"));
// console.log(nonRepeatLongestSubstringNguyenV1("abcabcbb"));
// console.log(nonRepeatLongestSubstringNguyenV1("aaabcdddabdcbb"));
// console.log(nonRepeatLongestSubstringNguyenV1("pwwkew"));
// console.log(nonRepeatLongestSubstringNguyenV1("abcd"));
// console.log(nonRepeatLongestSubstringNguyenV1("abb"));
// console.log(nonRepeatLongestSubstringNguyenV1("wwppe"));
// console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwckeen"));
// console.log(nonRepeatLongestSubstringNguyenV1("pwwksqwcen"));


lengthOfLongestSubstring("abcdef");
lengthOfLongestSubstring("aabb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("pwwksqererrwwwwwckew");
lengthOfLongestSubstring("pwwksqwcen");