class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let result = [];
        outerLoop: 
        for(let i=0;i<=nums.length-1;i++){
            for(let j=1;i!=j && j<=nums.length-1;j++){
                if(nums[i] + nums[j] === target){
                    result =  [i,j]
                    break outerLoop;
                }
            } 
        }
       return result;
    }
}
