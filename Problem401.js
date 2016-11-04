/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var arr = [];
    for(var h=0;h<12;h++){
        var hl = eval(parseInt(h).toString(2).split("").join("+"));
        for(var m = 0;m<60;m++){
            var ml = eval(parseInt(m).toString(2).split("").join("+"));
            if (hl+ml == num){
                if(m<10)  arr.push(h.toString()+":0"+m.toString())
                else arr.push(h.toString()+":"+m.toString())
            }
        }
    }
    return arr;
};