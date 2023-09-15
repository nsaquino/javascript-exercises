const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let res = "";
    while (num--) {
        res += string;
    }
    return res;
};

// Do not edit below this line
module.exports = repeatString;
