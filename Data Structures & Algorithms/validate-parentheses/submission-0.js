class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []
        let pair = {'(': ')', '{': '}', '[' :']'}
        for(const item of s){
            if(pair[stack[stack.length - 1]] === item){
                stack.pop();
            }else{
                stack.push(item);
            }
            
        }
        return stack.length === 0 ? true: false;
    }
}
