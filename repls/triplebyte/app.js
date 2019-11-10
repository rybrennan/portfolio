let input = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]


const countIslands = (grid) => {
  for (var row = 0; row < grid.length; row ++) {
    for (var col = 0; col < grid.length; col ++) {
      console.log(grid[row][col])
      if (grid[row][col] === 1) {
        console.log('yasss')
      }
    }
  }
}
countIslands(input)
