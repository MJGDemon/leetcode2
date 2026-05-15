/*
 * @lc app=leetcode.cn id=153 lang=typescript
 * @lcpr version=30204
 *
 * [153] 寻找旋转排序数组中的最小值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findMin(nums: number[]): number {
    const len = nums.length;
    const target = nums[0]
    if(len === 1 || target < nums[len - 1]) {
        return target;
    }
    let left = 0;
    let right = len
    while(left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if(nums[mid] < target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return nums[left]

};
// @lc code=end



/*
// @lcpr case=start
// [3,4,5,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [4,5,6,7,0,1,2]\n
// @lcpr case=end

// @lcpr case=start
// [11,13,15,17]\n
// @lcpr case=end

 */

