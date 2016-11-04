/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var step = [];
    step[0]=1;
    step[1]=2;
    if(n<=2) return n;
    else{
        for(var i=2;i<n;i++){
            step[i] = step[i-1]+step[i-2];
        }
        return step[n-1];
    }
};