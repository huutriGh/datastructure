/**
 * p        I         N
 * A     L  S     I   G
 * Y  A     H  R
 * p        I
 */

const convert = (s = '', numRows) => {
  if (s.length < numRows) {
    return s;
  }
  const row = new Array(numRows);
  let add = true;
  let rowCount = 0;
  let str = '';

  for (let i = 0; i < s.length; i++) {
    if (row[rowCount] === undefined) {
      row[rowCount] = [];
    }
    row[rowCount].push(s[i]);
    if (add && rowCount < numRows) {
      rowCount++;
    }
    if (rowCount === numRows) {
      add = false;
      rowCount = rowCount - 2 < 0 ? (rowCount = 1) : rowCount - 2;
    } else if (rowCount === 0 && add === false) {
      add = true;
      rowCount++;
    } else if (rowCount > 0 && add === false) {
      rowCount--;
    }
  }

  for (let i = 0; i < row.length; i++) {
    str += row[i].join('');
  }
  return str;
};

console.log(convert('AB', 1));
