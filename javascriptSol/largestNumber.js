/**
 * Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
 */

var largestNumber = function(nums) {
    nums.sort( ( a, b ) => {
        const str1 = new String(a);
        const str2 = new String(b);
        const first = str1 + str2;
        const second = str2 + str1;
        if( first > second ) {
            return -1;
        } else if( second > first ) {
            return 1;
        } else {
            return 0;
        }
    } );
    console.log( 'NUMBERS ARE', nums.join('') )
    return nums.join('');
};
largestNumber( [3,30,34,5,9] );