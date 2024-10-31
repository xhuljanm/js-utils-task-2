
const maxMoves = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const dp = Array.from({ length: m }, () => Array(n).fill(0)); // array that represents the grid

    const directions = [[-1, 1], [0, 1], [1, 1]]; // Directions to check: up-right, right, down-right

	for (let col = n - 1; col >= 0; col--) { // Fill dp table from right to left (starting from the last column (n - 1) and moving to the first column (0))
        for (let row = 0; row < m; row++) { // Repeats through each row in the current column.
            for (const [dr, dc] of directions) { // Repeats through all possible movement directions
                const newRow = row + dr; //calculate new row
                const newCol = col + dc; //calculate new column

                // Check if the new position is within the grid bounds and if the value is greater
                if (newRow >= 0 && newRow < m && newCol < n && grid[newRow][newCol] > grid[row][col]) {
					// Update dp[row][col] with the maximum moves possible from this cell
                	// 1 + dp[newRow][newCol] counts the current move and the best path from the new cell
                    dp[row][col] = Math.max(dp[row][col], 1 + dp[newRow][newCol]);
                }
            }
        }
    }

    // Find the maximum moves starting from any cell in the first column
    let result = 0;
    for (let i = 0; i < m; i++) result = Math.max(result, dp[i][0]);

    return result;
}

// Example 1
const grid1 = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]];
console.log(maxMoves(grid1)); // Output: 3

/*
	grid = [           // The given grid on example 1
		[2, 4, 3, 5],
		[5, 4, 9, 3],
		[3, 4, 2, 11],
		[10, 9, 13, 15]
	]

	dp = [
		[0, 1, 2, 3],  // Starting from (0, 0), can move to (0, 1), (1, 2), (2, 3)
		[0, 0, 1, 0],  // No valid moves from (1, 0)
		[0, 0, 0, 1],  // Starting from (2, 0), can only move to (2, 3)
		[0, 0, 0, 0]   // No valid moves from (3, 0)
	]
 */

// Example 2
const grid2 = [[3, 2, 4], [2, 1, 9], [1, 1, 7]];
console.log(maxMoves(grid2)); // Output: 0

/*
	grid = [        // The given grid on example 2
		[3, 2, 4],
		[2, 1, 9],
		[1, 1, 7]
	]

	dp = [
		[0, 0, 0],  // No valid moves from (0, 0)
		[0, 0, 0],  // No valid moves from (1, 0)
		[0, 0, 0],  // No valid moves from (2, 0)
	]
 */