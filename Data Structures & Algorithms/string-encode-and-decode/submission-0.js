class Solution {
    delimiter = "#";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let endodedValue = ""
        for(const s of strs){
            endodedValue+=s.length+this.delimiter+s
        }
        return endodedValue;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //const decodedStr = str.split(this.delimiter);
        let i = 0;
        let output = [];
        while(i< str.length){
            // Find 5 at 0th index
            // find # at 1
            // substring 2, 5
            // find 5 at 7th
            // find # at 8
            // substring 9, 5
            let j=i;
            while(str[j]!="#"){
                j++;
            }
            const wordLength = parseInt(str.slice(i,j));
            i = j+1;
            output.push(str.slice(i,i+wordLength));
            i+=wordLength;
        }
                    return output;

    }
}
