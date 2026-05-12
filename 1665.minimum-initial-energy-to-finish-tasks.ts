/*
 * @lc app=leetcode.cn id=1665 lang=typescript
 * @lcpr version=30204
 *
 * [1665] 完成所有任务的最少初始能量
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minimumEffort(tasks: number[][]): number {
    let res = 0
    let cur = 0
    tasks.sort((a, b) => {
        return b[1] - b[0] - (a[1] - a[0])
    })
    console.log(tasks)
    for(let i = 0; i < tasks.length; i++) {
        if(cur < tasks[i][1]) {
            res += tasks[i][1] - cur
            cur = tasks[i][1]
        }
        cur = cur - tasks[i][0]
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [[1,2],[2,4],[4,8]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,3],[2,4],[10,11],[10,12],[8,9]]\n
// @lcpr case=end

// @lcpr case=start
// [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]]\n
// @lcpr case=end

 */

