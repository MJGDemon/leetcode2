/*
 * @lc app=leetcode.cn id=1345 lang=typescript
 * @lcpr version=30204
 *
 * [1345] 跳跃游戏 IV
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function minJumps(arr: number[]): number {
    const n: number = arr.length;
    // 哈希表：存储数值 -> 对应所有下标集合，用于快速查找同值下标
    const numToIndexMap: Map<number, number[]> = new Map();

    // 遍历数组，构建数值与下标的映射关系
    for (let i = 0; i < n; i++) {
        const num = arr[i];
        if (!numToIndexMap.has(num)) {
            numToIndexMap.set(num, []);
        }
        numToIndexMap.get(num)!.push(i);
    }

    // 访问标记数组：标记下标是否已被访问，避免重复处理
    const visited: boolean[] = new Array(n).fill(false);

    // 队列：BFS广度优先搜索核心容器，存储待访问的下标
    const deque: number[] = [];
    // 起始位置：数组下标0
    deque.push(0);
    // 标记起始下标已访问
    visited[0] = true;

    // 记录最终结果：最小跳跃次数
    let result: number = 0;

    // BFS循环：队列不为空则继续搜索
    while (deque.length > 0) {
        // 当前层的元素个数（BFS分层，每层对应一次跳跃）
        const size: number = deque.length;

        // 遍历当前层所有节点
        for (let i = 0; i < size; i++) {
            // 取出队首下标作为当前节点
            const curIndex: number = deque.shift()!;

            // 递归出口：到达数组最后一个下标，返回跳跃次数
            if (curIndex === n - 1) {
                return result;
            }

            // 获取当前数值对应的所有下标集合
            const nextList: number[] = numToIndexMap.get(arr[curIndex])!;

            // 可以跳跃到右侧相邻下标，加入候选集合
            if (curIndex < n - 1) {
                nextList.push(curIndex + 1);
            }
            // 可以跳跃到左侧相邻下标，加入候选集合
            if (curIndex > 0) {
                nextList.push(curIndex - 1);
            }

            // 遍历所有可跳跃的目标下标
            for (const next of nextList) {
                // 未访问过的下标才加入队列
                if (!visited[next]) {
                    deque.push(next);
                    visited[next] = true;
                }
            }

            // 清空集合：优化性能，避免重复处理同值下标
            nextList.length = 0;
        }

        // 每遍历完一层，跳跃次数+1
        result++;
    }

    // 无法到达最后一个下标，返回-1
    return -1;
};
// @lc code=end



/*
// @lcpr case=start
// [100,-23,-23,404,100,23,23,23,3,404]\n
// @lcpr case=end

// @lcpr case=start
// [7]\n
// @lcpr case=end

// @lcpr case=start
// [7,6,9,6,9,6,9,7]\n
// @lcpr case=end

 */

