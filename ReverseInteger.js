const reverse = function (x = 123) {
  const strX = x.toString().split('').reverse().join('');
  let returnString =
    strX.indexOf('-') > 0 ? '-' + strX.substring(0, strX.length - 1) : strX;
  if (
    Number(returnString) > Math.pow(2, 31) - 1 ||
    Number(returnString) < Math.pow(-2, 31)
  ) {
    returnString = 0;
  }
  return returnString;
};
console.log(reverse(0));

const myAtoi = function (s) {
  let str = s.trim().split('');
  let returnStr = '';

  if (str.length > 0) {
    let i = 0;
    if (str[0] === '-' || str[0] === '+') {
      returnStr += str[0];
      i = 1;
    }
    for (i; i < str.length; i++) {
      if (Number(str[i]).toString() === 'NaN' || str[i] === ' ') {
        break;
      } else {
        returnStr += str[i];
      }
    }
  }

  return Number(returnStr) > Math.pow(2, 31) - 1
    ? Math.pow(2, 31) - 1
    : Number(returnStr) < Math.pow(-2, 31)
    ? Math.pow(-2, 31)
    : Number(returnStr).toString() === 'NaN'
    ? 0
    : Number(returnStr);
};
console.log(myAtoi('    -88827   5655  U'));
