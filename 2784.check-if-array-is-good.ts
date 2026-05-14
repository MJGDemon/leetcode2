/*
 * @lc app=leetcode.cn id=2784 lang=typescript
 * @lcpr version=30204
 *
 * [2784] 检查数组是否是好的
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function isGood(nums: number[]): boolean {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] !== i+1) {
            return false;
        }
    }
    console.log(nums)
    if(nums[nums.length - 1] !== nums.length - 1 || nums[nums.length - 1] !==nums[nums.length - 2]) {
        return false
    }
    return true;
};
// @lc code=end



/*
// @lcpr case=start
// [2, 1, 3]\n
// @lcpr case=end

// @lcpr case=start
// [1, 3, 3, 2]\n
// @lcpr case=end

// @lcpr case=start
// [1, 1]\n
// @lcpr case=end

// @lcpr case=start
// [3, 4, 4, 1, 2, 1]\n
// @lcpr case=end

 */

