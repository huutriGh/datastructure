function isPalindrome(x) {
  if (x < 0) return false;
  let divisor = 1;
  while (parseInt(x / divisor) >= 10) {
    divisor *= 10;
  }
  while (x != 0) {
    let leading = parseInt(x / divisor);
    let trailing = x % 10;
    if (leading != trailing) {
      return false;
    }
    x = parseInt((x % divisor) / 10);
    divisor = divisor / 100;
  }
  return true;
}


console.log(isPalindrome(10000000021));