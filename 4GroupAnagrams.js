/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
   const map = new Map();
   for(let str of strs) {
       const sortedStr = getFrequency(str);
       if(map.has(sortedStr)) {
           map.get(sortedStr).push(str);
       } else {
           map.set(sortedStr, [str]);
       }
   }
   return Array.from(map.values());    
};

var getFrequency = function(str) {
    const charCount = Array(26).fill(0);
    for(let i = 0; i < str.length; i++) {
        charCount[str.charCodeAt(i) - 97]++;
    }
    return charCount.join("");
}
