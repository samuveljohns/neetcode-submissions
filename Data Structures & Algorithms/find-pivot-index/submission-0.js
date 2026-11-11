class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let totalSum = 0;
        let leftSum = 0;
        for(let num of nums){
            totalSum += num
        }
        for(let i in nums){
            const rightSum = totalSum - leftSum - nums[i];
            if(leftSum === rightSum){
                return i;
            }
            leftSum +=nums[i];
        }
        return -1;
    }
}
