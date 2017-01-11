/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */

  var deepEquals = function(obj1, obj2){
  	// our two objects consist of pair(s) a key and value
  	// we will do here comparison between key:key and value: value
  	// if we have a distiguish keys, so we compare only the values
  	// for deep search of values we should use another approach
  	
  	for (var key1 in obj1){
  		for(var key2 in obj2)
  		if (obj1["key1"] === obj["key2"]) {   // values eqaulity when value isn't object.
  			return true;
  		}
  	}
  	        return false;

  }