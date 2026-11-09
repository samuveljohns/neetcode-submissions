class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let KMap = new Map();
        for(const i of nums){
            if(KMap.has(i)){
                KMap.set(i,KMap.get(i) + 1)
            }else{
                KMap.set(i,1)
            }
        }
        return [...KMap.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, k)
  .map(entry => entry[0]);
    }
}
