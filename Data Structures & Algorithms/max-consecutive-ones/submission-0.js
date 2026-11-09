class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let continuousNum = 0;
        for(let i=0;i<nums.length;i++){
            if(nums[i] === 1){
                continuousNum++;
                if(continuousNum > maxCount) maxCount = continuousNum;
            } else {
                continuousNum = 0;
            }
        }
        return maxCount;
    }
}