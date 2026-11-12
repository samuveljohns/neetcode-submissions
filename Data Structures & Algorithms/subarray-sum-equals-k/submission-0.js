class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let count = 0;
        let subArray = {};
        for(let i=0;i<nums.length;i++){
            let subTotal = 0
            for(let j=i;j<nums.length;j++){
                subTotal += nums[j];

                if(subTotal === k){
                    count++;
                }
                

            }
        }
        return count;

    }
}
