/*
 * @lc app=leetcode.cn id=1674 lang=typescript
 * @lcpr version=30204
 *
 * [1674] 使数组互补的最少操作次数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minMoves(nums: number[], limit: number): number {
    const n = nums.length;
    const diff = new Array(2 * limit + 2).fill(0);

    for (let i = 0; i < n / 2; i++) {
        const a = Math.min(nums[i], nums[n - 1 - i]);
        const b = Math.max(nums[i], nums[n - 1 - i]);

        diff[2] += 2;
        diff[a + 1] -= 1;
        diff[a + b] -= 1;
        diff[a + b + 1] += 1;
        diff[b + limit + 1] += 1;
    }

    let minOps = n;
    let currentOps = 0;

    for (let c = 2; c <= 2 * limit; c++) {
        currentOps += diff[c];
        minOps = Math.min(minOps, currentOps);
    }

    return minOps;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4,3]\n4\n
// @lcpr case=end

// @lcpr case=start
// [1,2,2,1]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,2,1,2]\n2\n
// @lcpr case=end

 */

