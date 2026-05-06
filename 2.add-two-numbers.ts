/*
 * @lc app=leetcode.cn id=2 lang=typescript
 * @lcpr version=30204
 *
 * [2] 两数相加
 */


// @lcpr-template-start

// @lcpr-template-end
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let res: ListNode = new ListNode(0)
    const origin = res
    let isAdd = false
    while(l1 && l2) {
        let val = l1.val + l2.val + (isAdd ? 1 : 0)
        if(val >= 10) {
            val = val - 10
            isAdd = true
        } else {
            isAdd = false
        }
        res.next = new ListNode(val)
        res = res.next
        l1 = l1.next
        l2 = l2.next
    }
    while(l1) {
        let val = l1.val + (isAdd ? 1 : 0)
        if(val >= 10) {
            val = val - 10
            isAdd = true
        } else {
            isAdd = false
        }
        res.next = new ListNode(val)
        res = res.next
        l1 = l1.next
    }
    while(l2) {
        let val = l2.val + (isAdd ? 1 : 0)
        if(val >= 10) {
            val = val - 10
            isAdd = true
        } else {
            isAdd = false
        }
        res.next = new ListNode(val)
        res = res.next
        l2 = l2.next
    }
    if(isAdd) {
        res.next = new ListNode(1)
    }
    return origin.next
};
// @lc code=end



/*
// @lcpr case=start
// [2,4,3]\n[5,6,4]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n[0]\n
// @lcpr case=end

// @lcpr case=start
// [9,9,9,9,9,9,9]\n[9,9,9,9]\n
// @lcpr case=end

 */

