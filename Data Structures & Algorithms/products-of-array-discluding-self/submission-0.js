class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        
        let prefix = 1;
        let leftToRight = []
        for(let i=0;i<nums.length;i++){
            if(i==0){
                prefix = 1;
            }else{
                prefix = prefix * nums[i-1];
            }
            leftToRight.push(prefix);
        }

        let postfix = 1;
        let rightToLeft = [...nums]
        for (let i = nums.length - 1; i >= 0; i--) {
            rightToLeft[i] = postfix;
            postfix *= nums[i];
        }
        
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            result.push(leftToRight[i] * rightToLeft[i]);
        }

        return result;
        

    }
}
