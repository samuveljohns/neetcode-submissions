class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let arr = [];
        for(let j=0;j<2;j++){
            for(let i=0;i<=nums.length-1;i++){
            arr.push(nums[i]);
            }
        }
        return arr;
    }
}
