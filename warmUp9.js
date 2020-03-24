// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

//1. Write a JavaScript function to check whether an `input` is an array or not
// ex isArray([1,2])=>true
//    isArray(5)=>false
function isArray(arr) {
	if (Array.isArray(arr)===true) {
		return true 
	} else {
		return false 
	}
} 
// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//2-Write a JavaScript function to get the first n element of an array.
//ex  first([1,2,3],1)=>[1]
//    first([1,2,3,4],2)=>[1,2]
function first (arr,n) {
	var arr2 = []
	for (var i=0 ; i<n; i++) {
		arr2.push(arr[i])	
	}
	return arr2
} 

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

//3- Write a JavaScript function to convert an object into a list of `[key, value]` pairs
//ex: convert({name:'ahmed',age:20})=>[['name','ahmed'],['age', 20]]
function convert (obj) {
	var arr = []
		arr.push(Object.keys(obj))
		arr.push(Object.values(obj))

			return arr 
} 

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
