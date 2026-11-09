class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // Step 1: If lengths differ, they cannot be anagrams
    if (s.length !== t.length) {
        return false;
    }

    const map = new Map();

    // Step 2: Count frequencies of characters in string s
    for (let char of s) {
        map.set(char, (map.get(char) || 0) + 1);
    }

    // Step 3: Decrement frequencies using string t
    for (let char of t) {
        if (!map.has(char)) {
            return false; // Character not present in s
        }
        
        map.set(char, map.get(char) - 1);
        
        if (map.get(char) === 0) {
            map.delete(char); // Remove zero-count keys
        }
    }

    // Step 4: If map is empty, it's a valid anagram
    return map.size === 0;
        
    }
}
