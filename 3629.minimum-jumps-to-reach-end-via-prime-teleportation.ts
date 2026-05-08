/*
 * @lc app=leetcode.cn id=3629 lang=typescript
 * @lcpr version=30204
 *
 * [3629] 通过质数传送到达终点的最少跳跃次数
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
const MX = 1000001;
const factors = Array.from({ length: MX }, () => []);
for (let i = 2; i < MX; i++) {
    if (factors[i].length === 0) {
        for (let j = i; j < MX; j += i) {
            factors[j].push(i);
        }
    }
}

function minJumps(nums: number[]): number {
    const n = nums.length;
    const edges = new Map();
    for (let i = 0; i < n; i++) {
        const a = nums[i];
        if (factors[a].length === 1) {
            if (!edges.has(a)) edges.set(a, []);
            edges.get(a).push(i);
        }
    }
    let res = 0;
    const seen = new Array(n).fill(false);
    seen[n - 1] = true;
    let q = [n - 1];
    while (true) {
        let q2 = [];
        for (const i of q) {
            if (i === 0) return res;
            if (i > 0 && !seen[i - 1]) {
                seen[i - 1] = true;
                q2.push(i - 1);
            }
            if (i < n - 1 && !seen[i + 1]) {
                seen[i + 1] = true;
                q2.push(i + 1);
            }
            for (const p of factors[nums[i]]) {
                const list = edges.get(p);
                if (list) {
                    for (const j of list) {
                        if (!seen[j]) {
                            seen[j] = true;
                            q2.push(j);
                        }
                    }
                    edges.set(p, []);
                }
            }
        }
        q = q2;
        res++;
    }
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,4,6]\n
// @lcpr case=end

// @lcpr case=start
// [2,3,4,7,9]\n
// @lcpr case=end

// @lcpr case=start
// [4,6,5,8]\n
// @lcpr case=end

 */

