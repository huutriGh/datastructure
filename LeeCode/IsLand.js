// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// grid[1][3] = "0";
// "1" &&
//   grid[i][j - 1] === "0" &&
//   grid[i][j + 1] === "0" &&
//   grid[i + 1][j] === "0" &&
//   grid[i - 1][j] === 1;
// // common
// //

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid = []) {
  let dfs = (grid, i, j) => {
    if (
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      grid[i][j] != "1"
    ) {
      return;
    }
    grid[i][j] = 0;
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
  };
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(grid, i, j);
      }
    }
  }
  return count;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
// class Solution {
//     public void dfs(char [][]grid, int i,int j){
//       if(i<0 || j<0 || i>=grid.length || j >= grid[0].length || grid[i][j]!='1') return;
//       grid[i][j]=0;
//       dfs(grid,i+1,j);
//       dfs(grid,i-1,j);
//       dfs(grid,i,j+1);
//       dfs(grid,i,j-1);
//     }
//     public int numIslands(char[][] grid) {

//         int count=0;
//         for(int i=0;i<grid.length;i++){
//             for(int j=0;j<grid[0].length;j++){
//                 if(grid[i][j]=='1'){
//                     count++;
//                     dfs(grid,i,j);
//                 }
//             }
//         }
//         return count;
//     }
// }
