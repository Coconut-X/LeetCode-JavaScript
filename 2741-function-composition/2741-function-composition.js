/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
  let l=functions.length;

return (x)=>{
    var result=x;

    for(let i=l-1;i>=0;i--)
    {
        x=functions[i](x);
    }
    return x;
}
  

   
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */