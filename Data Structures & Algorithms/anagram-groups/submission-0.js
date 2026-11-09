class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagram = new Map();
        for(const word of strs){
            const count = Array(26).fill(0);
            for(const character of word){
                const index = character.charCodeAt(0) - 'a'.charCodeAt(0);
    count[index]++;
            }
            if(anagram.has(count.join("#"))){
                        anagram.set(count.join("#"),[...anagram.get(count.join("#")),word]);
            }else{
                anagram.set(count.join("#"),[word]);
            }
            
        }
        return [...anagram.values()];
    }
}
