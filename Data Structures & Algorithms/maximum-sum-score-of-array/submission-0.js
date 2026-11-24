class Solution {
    maximumSumScore(nums) {
        let totalSum = 0;
        for(let i=0;i<nums.length;i++){
            totalSum +=nums[i];
        }
        let prefixSum = 0;
        let best = -Infinity;
        for(let num of nums){
            prefixSum +=num;
            const suffix = totalSum - (prefixSum - num)
            best = Math.max(best,Math.max(prefixSum, suffix));
        }
        return best;

    }
}
