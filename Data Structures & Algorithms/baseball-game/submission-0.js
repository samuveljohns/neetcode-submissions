class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let temp = [];
        //Iterate the string
            // Store in array for numbers
            // + encounter take the latest 2 numbers from i and insert to the array
            // C pop the stack
            // D double the record and push
        for(let i=0;i<operations.length;i++){
            if(operations[i] === "+"){
                temp.push(temp[temp.length - 1] + temp[temp.length - 2])
            }else if(operations[i] === "C"){
                temp.pop()
            }else if(operations[i] === "D"){
                temp.push(2*(temp[temp.length - 1]))
            } else {
                temp.push(Number(operations[i]))
            }
        }
        return  temp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    }
}
