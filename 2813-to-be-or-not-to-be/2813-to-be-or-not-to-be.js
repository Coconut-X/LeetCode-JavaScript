/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) 
{
    return {
        toBe(v1){
            if(v1===val) return true;
            else throw Error("Not Equal");
        }
    ,

    
        notToBe(v2)
        {
            if(v2!==val) return true;
            else throw Error ("Equal");
        }
    }
    

};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */