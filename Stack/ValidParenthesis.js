/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const charStack = []
    const parenthesisMap = {
        ')' : '(',
        '}' : '{',
        ']' : '[',
    }
    if(s.length === 0){
        return true
    }
    else if(s.length === 1){
        return false
    }
    let i =0;
    while(i<s.length){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            charStack.unshift(s[i]);
        }
        else if(s[i] === ')' || s[i] === '}' || s[i] === ']' && charStack[0] === parenthesisMap[s[i]]){
            charStack.shift();
        }
        i++;
    }
    return charStack.length === 0
};

console.log(isValid("([])"))