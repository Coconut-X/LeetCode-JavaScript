/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let l=nums.length;
    if(l==0) return init;
var val=init;
    for(let i=0;i<l;i++)
    val=fn(val,nums[i]);

    return val;
};