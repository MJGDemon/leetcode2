/*
 * @lc app=leetcode.cn id=3660 lang=typescript
 * @lcpr version=30204
 *
 * [3660] 跳跃游戏 IX
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function maxValue(nums: number[]): number[] {
    const n = nums.length;
    const ans = new Array<number>(n).fill(0);

    const prevMax = new Array(n);

    nums.reduce(
        (prev, value, index) => {
            if (value > prev[0]) {
                prev = [value, index];
            }
            return (prevMax[index] = [...prev]);
        },
        [-Infinity, -1],
    );

    const process = (r: number, rightMin: number, rightMax: number) => {
        const [pMax, pivotIndex] = prevMax[r];
        const currMax = pMax <= rightMin ? pMax : rightMax;

        let nextRightMin = Math.min(pMax, rightMin);
        for (let i = pivotIndex; i <= r; i++) {
            ans[i] = currMax;
            nextRightMin = Math.min(nextRightMin, nums[i]);
        }

        if (pivotIndex === 0) {
            return;
        }

        process(pivotIndex - 1, nextRightMin, currMax);
    };

    process(n - 1, Infinity, 0);

    return ans;
};
// @lc code=end



/*
// @lcpr case=start
// [2,1,3]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,1]\n
// @lcpr case=end

 */

