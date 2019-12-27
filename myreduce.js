'use strict';

var arr = [1, 2, 3, 4];
Array.prototype.myReduce = function(callback, invital) {
    let nextIndex = invital ? 0 : 1;
    invital = invital ? invital : this[0];
    for (; nextIndex < this.length; nextIndex++) {
        invital = callback(invital, this[nextIndex]);
    }
    return invital;
};

var sum = arr.myReduce((prev, next) => {
    console.log('pre:', prev, 'next', next);
    return prev + next;
}, 0);

console.log(sum);

// const sum = (...arg) => {
//     return arg.reduce((prev, cur) => {
//         return prev + cur;
//     }, 0);
// };
module.exports = sum;
