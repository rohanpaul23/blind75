/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const subString = new Set();
    let startIndex = 0;
    let res = 0;

    for(let endIndex = 0; endIndex < s.length; endIndex++){
        while(subString.has(s[endIndex])){
            subString.delete(s[startIndex]);
            startIndex++;
        }
        subString.add(s[endIndex]);
        res = Math.max(res, subString.size);
    }
    return res;
};


const s = "pwwkew"
console.log(lengthOfLongestSubstring(s))