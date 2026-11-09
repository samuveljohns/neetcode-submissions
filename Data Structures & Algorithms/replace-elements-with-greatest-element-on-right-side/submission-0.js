class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let greatest = -1;
        let ans = [];
        
        for(let i=arr.length - 1;i>=0;i--){
            ans[i] = greatest;
            greatest = greatest > arr[i] ? greatest: arr[i]

        }
        return ans;
    }
}
