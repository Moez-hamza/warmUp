// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// 1-Define a function called myTrueFun that returns true whenever its called.
	function myTrueFun()	{
// This function take no parameter and when called it returns true 		
		return true 
	}

// 2- Define a function called color in which returns true if type of the input is string and returns false otherwise.
	function color (string) {
		if (typeof(string) === 'string') {
			return true 
		}
		return false 
	}



// 3-Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.
	function prime(num) {
	// So a prime number if it's 1 it's not a prime and if it's 2 is a prime number  
		if (num===1) {
			return false 
		} else if (num ===2) {
			return true 
		}else{
	// after that we posed the two first conditions we need to figure out if the number is devided by other numbers or not if it can be divided by any number besides itself 
	// it's not a prime so we need to use a loop to test that so we define a new var which is x and that starts from 2 if num%2 === 0 so it's false and so on until it reaches x = num in that case it's true 
	// so we don't need that the loop reaches that point. 			
		}for (var x=2 ; x<num ; x++) {
			if (num%x===0) {
				return false 
			}
		}

			return true 
	}

// 4-write a function that accepts two numbers as parameters and returns true if the two parameters have the same value , false if not

	function sameValue(num1,num2) {
		if (num1===num2) {
			return true 
		} 
		return false 
	}



