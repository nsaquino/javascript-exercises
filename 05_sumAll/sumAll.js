const sumAll = function(a, b) {
    if (a < 0 || b < 0) return 'ERROR';
    if (typeof(a) !== 'number' || typeof(b) !== 'number') return 'ERROR';
    if (isNaN(a)|| isNaN(b)) return 'ERROR';

    let sum = 0;
    const from = Math.min(a,b);
    const to = Math.max(a,b);
    for (let i = from; i <= to; i++) {
        sum += i;        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
