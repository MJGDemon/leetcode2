/*
 * @lc app=leetcode.cn id=1861 lang=typescript
 * @lcpr version=30204
 *
 * [1861] 旋转盒子
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
function rotateTheBox(boxGrid: string[][]): string[][] {
    const rotate90Line = (line: string[]): string[] => {
        const res: string[] = []
        let index1 = -1
        let index2 = line.length - 1
        for(let i = line.length-1; i>=0; i--){
            if(line[i] === '*'){
                index1 = i
                index2 = i-1
                res[i] = '*'
            }
            if(line[i] === '.') {
                res[i] = '.'
            }
            if(line[i] === '#') {
                if(i < index2) {
                    res[index2] = '#'
                    index2--
                    res[i] = '.'
                } else {
                    res[i] = '#'
                    index2--
                }

            }
        }
        return res
    }
    const tmp:string[][] = []
    const res:string[][] = []
    for(let i = 0; i< boxGrid.length; i++){
        tmp.push(rotate90Line(boxGrid[i]))
    }
    for(let i = 0; i<tmp[0].length; i++) {
        const line:string[] = []
        for(let j = tmp.length - 1; j>=0; j--) {
            line.push(tmp[j][i])
        }
        res.push(line)
    }
    return res
};
// @lc code=end



/*
// @lcpr case=start
// [["#",".","#"]]\n
// @lcpr case=end

// @lcpr case=start
// [["#",".","*","."],["#","#","*","."]]\n
// @lcpr case=end

// @lcpr case=start
// [["#","#","*",".","*","."],["#","#","#","*",".","."],["#","#","#",".","#","."]]\n
// @lcpr case=end

 */

