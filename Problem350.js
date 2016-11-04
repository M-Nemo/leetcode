/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    function sortnumber(a,b){
        return a-b;
    }
    nums1 = nums1.sort(sortnumber);
    nums2 = nums2.sort(sortnumber);
    var arr = [];
    var i=0,j=0;
    while(i<nums1.length && j<nums2.length){
        if(nums1[i]>nums2[j]) j++;
        else if(nums1[i]<nums2[j]) i++;
        else {
            arr.push(nums1[i]);
            i++;j++;
        }
    }
    return arr;
};