// 1-Choose the correct comparison operator to display "true", when: 5 is less than 7.
<<<<<<< HEAD
//answer : 
5<7 
=======
//answer : 5 < 7 ? true : false;
>>>>>>> eedf4d1da29beb7f6472f832fb846002ed7197b5

//2- Write a function named helloWorld that:
//takes 1 argument, a language code (e.g. "fr", "es", "en")
//returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
//ex: helloWorld('fr') ==> 'Bonjour tout le monde'
//    helloWorld('es') ==> 'Hola, Mundo'
//    helloWorld('') ==> 'Hello, World'
function helloWorld(language) {
	if (language === 'fr')	{
		return 'Bonjour tout le monde'
	} else if (language === 'es') {
		return 'Hola, Mundo'
	} else {
		return 'Hello, World'
	}
 
}


//3- write a function to Reverse an array without use array.reverse() method:
// ex: reverseArray([1,2,3]) ==> [3,2,1]
function reverseArray(arr) {
	var reArr = []
	for (var i = arr.length-1; i>=0; i--) {
		reArr.push(arr[i])
	}
	return reArr
}	 