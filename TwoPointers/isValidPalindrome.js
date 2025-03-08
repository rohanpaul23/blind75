var isPalindrome = function(s) {
    let l = 0, r = s.length - 1;

    while (l < r) {
        while (l < r && !this.isAlphaNumeric(s[l])) {
            l++;
        }
        while (r > l && !this.isAlphaNumeric(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++; r--;
    }
    return true;
};

var isAlphaNumeric = function(char) {
    return /^[a-zA-Z0-9]*$/.test(char);
}