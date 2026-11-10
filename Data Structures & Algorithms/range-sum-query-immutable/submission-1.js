class NumArray {
    /**
     * @param {number[]} nums
     */
    total = 0;
    nums = []
    constructor(nums) {
        
        for(let num of nums){
            this.total+=num;
            this.nums.push(this.total);
        }
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let preRight = this.nums[right];
        let preLeft = left > 0 ? this.nums[left - 1] : 0;
        return (preRight - preLeft);  
    }
}
