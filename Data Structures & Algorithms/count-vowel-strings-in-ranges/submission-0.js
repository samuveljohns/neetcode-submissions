class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(["a", "e", "i", "o", "u"]);
        const result = [];

        for (const [left, right] of queries) {
            let count = 0;

            for (let i = left; i <= right; i++) {
                const word = words[i];

                const startsWithVowel = vowels.has(word[0]);
                const endsWithVowel = vowels.has(word[word.length - 1]);

                if (startsWithVowel && endsWithVowel) {
                    count++;
                }
            }

            result.push(count);
        }

        return result;
    }   
}
