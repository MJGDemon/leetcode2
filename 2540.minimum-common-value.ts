/*
 * @lc app=leetcode.cn id=2540 lang=typescript
 * @lcpr version=30204
 *
 * [2540] 最小公共值
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function getCommon(nums1: number[], nums2: number[]): number {
    const hashMap = new Map<number, number>();
    for (const num of nums1) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }
    for (const num of nums2) {
        if(hashMap.has(num)) {
            return num;
        }
    }
    return -1;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3]\n[2,4]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,6]\n[2,3,4,5]\n
// @lcpr case=end

 */

