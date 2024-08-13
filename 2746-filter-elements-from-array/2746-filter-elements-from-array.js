/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let fa=[];
let i=0;
    arr.forEach(element=>{  

        let x=fn(element,i++);
        if(x) fa.push(element);

    });

    return fa;
};