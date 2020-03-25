// 1-Create arrays in the global scope consisting of strings that represent:
// -name of females in your class
// -name of males in your class
// -name of your class instructors
var femalesName =['Emna','Nour','Leila']
var malesName= ['ahmed','Charaf','Malek','Oussema']
var classInstructors= ['Dhia','Farouk','Seif','Jihed','Hashem']
// 2-write a function that takes an array as an argument and returns the element that is located in the middle of that array.
function middleArray (array) {
	for (var i=0 ; i<array.length ; i++) {
		if (i==(array.length-1)/2)
		return array[i]
	}else {

	}
	return 'the array length is even so there\'s no middle'
}	
// 3-Change all the numbers in the array to be multiplied by two for even indexes.
function multiplybytwo(array) {
	for (var i=0 ; i<array.length ; i++) {
			array[i]=array[i]*2 
	}
	return array
}
