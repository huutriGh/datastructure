//  1 2 3 4 5
//  M A D A M
//  0 1 2 3 4

/**
 *
 * @param String
 * @returns longest palindrimoc string.
 * @description
 * Generate all even length and odd lenth palindrome and keep tract of longest palindrome seen so far.
 * To generate odd lenth palindrome, Fix a center and expand in both directions for longer palindrome, i.e fix i(index) as the center and
 * two indices a i1 = i + 1 and i2 = i - 1.
 * Compare i1 and i2 if equal then decrease i2 and increase i1 and find the maximum  length. Use a similar technical to find the even-length palindrome.
 *
 *  */
function longestPalindromic(s = '') {
  let maxLength = 1;
  let start = 0;
  let len = s.length;
  let low, high;

  for (let i = 1; i < len; i++) {
    // Find the longest even length palindrome with center points as i-1 and i
    low = i - 1;
    high = i;
    while (low >= 0 && high < len && s[low] == s[high]) {
      low--;
      high++;
    }
    low++;
    high--;
    if (s[low] == s[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }

    //Find the longest odd length palindrome with center points as i
    low = i - 1;
    high = i + 1;
    while (low >= 0 && high < len && s[low] == s[high]) {
      --low;
      ++high;
    }

    ++low;
    --high;
    if (s[low] == s[high] && high - low + 1 > maxLength) {
      start = low;
      maxLength = high - low + 1;
    }
  }

  return s.substring(start, start + maxLength);
}
console.log(longestPalindromic('MAMMADAM'));
let isPalindrome = function (x) {
  if (x < 0) return false;
  let divisor = 1;
  while (parseInt(x / divisor) >= 10) {
    divisor *= 10;
  }

  while (x != 0) {
    let leading = parseInt(x / divisor);
    let trailing = x % 10;

    // If first and last digit
    // not same return false
    if (leading != trailing) return false;

    // Removing the leading and trailing
    // digit from number
    x = parseInt((x % divisor) / 10);

    // Reducing divisor by a factor
    // of 2 as 2 digits are dropped
    divisor = divisor / 100;
  }
  return true;
};
console.log(isPalindrome(11));
