// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//create a function isSubset that should take two arrays and determine whether the second array is a subset of the first array.
//For example:
function isSubset(array1,array2){
	var result=[]
	for (var i=0;i<array1.length;i++){
		for (j=0;j<array2.length;j++){ 
			if (array1[i]===array2[j]){
			result.push(array2[j])
			}
		}
	}
	if (result.length===array2.length){
		return true
	}
	return false 
}	
// array: [ 1, 2, 3, 4 ], sub:[ 2, 3, 4 ] => true
// array: [ 2, 2, 2, 3, 4 ], sub:[ 2, 4, 3 ] => true
// array: [ 2, 3, 3, "a" ],  sub:[ 3, 3, 3, "a" ] => false
