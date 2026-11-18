class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        
        let totalOnes = 0;
        for (const ch of s) {
            if (ch === '1') {
                totalOnes++;
            }
        }
        let leftZero = 0;
        let best = 0;
        for(let i=0;i<s.length-1;i++){
            if(s[i]=== "0"){
                leftZero++;
            }else{
                totalOnes--;
            }
            const score = leftZero+totalOnes;
            best = best>score?best:score; 
        }
        return best;
    }
}
