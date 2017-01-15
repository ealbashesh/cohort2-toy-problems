/*
For this exercise you will create a flatten function. 
The function takes in any number of arguments and flattens them into a single array. 
If any of the arguments passed in are an array then the individual objects within the array
will be flattened so that they exist at the same level as the other arguments. 
Any nested arrays, no matter how deep, should be flattened into the single array result.

The following are examples of how this function would be used and what the expected results would be:

flatten(1, [2, 3], 4, 5, [6, [7]]) // returns [1, 2, 3, 4, 5, 6, 7]
flatten('a', ['b', 2], 3, null, [[4], ['c']]) // returns ['a', 'b', 2, 3, null, 4, 'c']

*/

function flatten(arg){
// since that function takes any number of arguments so we use Array.from() to ease deal
// with array:
var newArg = Array.from(arg);
// we define accArr
var accArr = [];
// now we loop over new array(newArg) and do the folowing steps:
  //- push any individual value into accArr
  //- put conditions to flatten other values, but for daynimic solution we define variable as
  // temp accumulator inside condition:
  	var temp;
    //- value = single arr make loop and push values into temp.
    //- value = array inside array loop twice and push into temp.
    //- but if we push in temp we will merge and that is not our target.
  //now we should refactor our approach, after seek by google I found that
  // function called Array.prototype.push.apply is beneficial with flatten and use (arguments)
  // instead of Array.from(arg) and Array.prototype.reduce() do flatten.


}