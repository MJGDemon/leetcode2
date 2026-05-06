/*
 * @lc app=leetcode.cn id=3742 lang=typescript
 * @lcpr version=30204
 *
 * [3742] 网格中得分最大的路径
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxPathScore(grid: number[][], step: number): number {
    const m = grid.length;
    const n = grid[0].length;
    const dp: number[][][] = Array.from({ length: m + 1 }, () => 
        Array.from({ length: n + 1 }, () => 
            new Array(step + 1).fill(-Infinity)
        )
    );

    for (let j = 0; j <= n; j++) {
        for (let k = 0; k <= step; k++) {
            dp[0][j][k] = -Infinity;
        }
    }

    dp[0][1][0] = 0;

    for (let i = 0; i < m; i++) {
        dp[i + 1][0].fill(-Infinity);

        for (let j = 0; j < n; j++) {
            dp[i + 1][j + 1].fill(-Infinity);

            if (grid[i][j] === 0) {
                for (let k = 0; k <= step; k++) {
                    dp[i + 1][j + 1][k] = Math.max(dp[i][j + 1][k], dp[i + 1][j][k]);
                }
            } else {
                for (let k = 1; k <= step; k++) {
                    dp[i + 1][j + 1][k] = Math.max(dp[i][j + 1][k - 1], dp[i + 1][j][k - 1]) + grid[i][j];
                }
            }
        }
    }
    let result = -1;
    for (let i = 0; i <= step; i++) {
        result = Math.max(result, dp[m][n][i]);
    }
    return result;
};
// @lc code=end



/*
// @lcpr case=start
// [[0, 1],[2, 0]]\n1\n
// @lcpr case=end

// @lcpr case=start
// [[0, 1],[1, 2]]\n1\n
// @lcpr case=end

 */

