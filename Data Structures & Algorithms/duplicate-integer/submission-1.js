class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let arr = new Set();
        for(let i=0;i<nums.length;i++){
            if(arr.has(nums[i])){
                return true;
            }
            arr.add(nums[i]);
        }
        return false;
    }
}
