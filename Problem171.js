/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    arr = s.split("");
    var base = 1;
    var total = 0
    for(var i=arr.length-1;i>=0;i--){
        var m = arr[i].charCodeAt()-64;
        total = m*base+total;
        base*=26;
    }
    return total;
};