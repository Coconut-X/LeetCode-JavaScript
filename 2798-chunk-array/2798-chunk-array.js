/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var chunked=[]
    let l=arr.length;
   for(var i=0;i<l;)
   {
    chunked.push(arr.slice(i,i+size));
    i+=size;
   }

   return chunked;
};
