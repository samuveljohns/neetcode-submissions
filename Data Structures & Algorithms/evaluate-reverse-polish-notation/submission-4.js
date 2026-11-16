class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {

        const operands = [];

        for(let token of tokens){
            if(["+","-","*","/"].includes(token)){
                const top = parseInt(operands.pop());
                const nextTop = parseInt(operands.pop());
                if(token === "+"){
                    operands.push(top + nextTop);
                }else if(token === "-"){
                    operands.push(nextTop - top);
                }else if(token === "*"){
                    operands.push(top * nextTop);
                }else if(token === "/"){
                    operands.push(Math.trunc( nextTop/top));
                }
            }else{
                operands.push(token);
            }
        }
        return operands.pop();

    }
}
