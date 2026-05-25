/*
 * @lc app=leetcode.cn id=2657 lang=typescript
 * @lcpr version=30204
 *
 * [2657] 找到两个数组的前缀公共数组
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const hashMapA = new Set();
    const hashMapB = new Set();
    const hashMapC = new Set();
    const result: number[] = []
    for(let i = 0; i < A.length; i++) {
        hashMapA.add(A[i]);
        hashMapB.add(B[i]);
        if(hashMapA.has(B[i]) && !hashMapC.has(B[i])) {
            hashMapC.add(B[i]);
        }
        if(hashMapB.has(A[i]) && !hashMapC.has(A[i])) {
            hashMapC.add(A[i]);
        }
        if(hashMapC.size === i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};
// @lc code=end



/*
// @lcpr case=start
// [1,3,2,4]\n[3,1,2,4]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,1]\n[3,1,2]\n
// @lcpr case=end

 */

