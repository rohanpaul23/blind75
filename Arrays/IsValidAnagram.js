/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    if(!s || !t) return false;

    let charCount = Array(26).fill(0);

    for(let i = 0; i < s.length; i++) {
        charCount[s.charCodeAt(i) - 97]++;
    }

    for(let i = 0; i < t.length; i++) {
        charCount[t.charCodeAt(i) - 97]--;
    }
    return charCount.find((count) => count != 0) == undefined;
};

