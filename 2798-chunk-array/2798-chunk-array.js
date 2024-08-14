/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var chunked=[]
   for(var i=0;i<arr.length;)
   {
    chunked.push(arr.slice(i,i+size));
    i+=size;
   }

   return chunked;
};
