/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var values = {
        "M": 1000,
        "D": 500,
        "C": 100,
        "L": 50,
        "X": 10,
        "V": 5,
        "I": 1
    };
    arr = s.split("");
    var total = values[arr[arr.length-1]];
    for(var i=arr.length-1;i>0;i--){
        if(values[arr[i]]>values[arr[i-1]]) total = total-values[arr[i-1]]
        else total = total+values[arr[i-1]];
    }
    return total;
};