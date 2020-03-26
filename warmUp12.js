// 1-Write a function that takes a string as an input and returns the reverse of each letter
//followed by a number starting from zero(solve it using while loop).
// example:    reverseStr('hello'); "o0l1l2e3h4"
function reverseStr(str) {
	var result =''
	var count=str.length-1
	var i=0
	while (count>=0) {
		result+=str[count]+i
		count--
		i++
	}
	return result
}
// 2-write a function that takes array of strings and returns an array of the strings that have the same length
// example :  ['hi','hello','welcome','hy'] == > ["hi","hy"]
function sameLength(array) {
	var i=0
	var l= array.length-1
	result=[]
	while (i<array.length){
		if (array[i].length===array[l].length){
			result.push(array[i])
			result.push(array[l])
		}
		i++
		l--
	}
	return result
}
