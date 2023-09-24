const palindromes = function (str) {
    let onlyAlpha = str.toLowerCase().split(/\W+/g);
    let reversed = onlyAlpha;

    onlyAlpha = onlyAlpha.join("").split("").join(""); //Join into a string, then reverse letters
    reversed = reversed.join("").split("").reverse().join("");

    console.log(onlyAlpha, reversed);
    return onlyAlpha === reversed;
};

// Do not edit below this line
module.exports = palindromes;
