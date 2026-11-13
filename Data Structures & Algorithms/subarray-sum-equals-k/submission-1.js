class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let currentSum = 0;
        const prefixSumMap = new Map();
        prefixSumMap.set(0,1);
        for(let i=0;i<nums.length;i++){
            currentSum += nums[i];
            const needed = currentSum - k;
            count +=prefixSumMap.get(needed) || 0;
            prefixSumMap.set(currentSum,(prefixSumMap.get(currentSum)|| 0)+1)
        }
        return count;

    }
}
