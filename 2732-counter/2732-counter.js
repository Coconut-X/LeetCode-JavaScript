/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    var count=1;
    for(let i=1;i<=count;i++)
    return function() {
        return n++;
    };
    count++;
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */