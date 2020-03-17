// 1 - Write functions larger and smaller that each accept two strings as arguments, and return the larger and smaller strings, respectively
function largerAndSmaller (string1, string2) {
	if (string1.length > string2.length) {
		return string1 +' is larger than '+ string2
	}
	if (string2.length > string1.length) {
		return string2 +' is larger than '+ string1
	}
return string1+ ' and ' + string2 + ' are both equal'
}

// 2 - Write a function called counter that, when invoked, always returns a number that is one more than the previous invocation. For instance:
<<<<<<< HEAD
 // For this one i need to declare a variabe in the global scope (outside the function ) and do the count inside the function 
  	var count =0 
 function counting(n)
  {
 	return count = count +1  
} 


 
// counting(5); // => '1, 2, 3, 4, 5' 
// counting(1); // => '1' 
=======
// function counting(n) {
// TODO: your code here
// }
// counting(5); // => '1, 2, 3, 4, 5'
// counting(1); // => '1'
>>>>>>> 4ab3967cd0764bea1a7614a1d87ac2da4d6ea391
// counting(3); // => '1, 2, 3'

// 3 -  Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5
// welcome 1
function meetAndgreet(n) {
	var count = 1 
	var answer =''
	var innercount = 1
	while (counter<=n) {
		if (n ===1)
			return answer= 'welcome '+ count
	} else if (count===1)  { 
		answer = 'welcome ' + count + '/n'
	} else {
		answer = answer + 'welcome ' + count + ' ,meet '
	} while (innercount < count)
		if (innercount ===counter - 2 ) {
			answer =answer + innercount +' ,'
		}else if (innercount === count - 1) { 
			 answer = answer + innercount
			 } else { 
answer = answer + innerCounter + ',' 
 }
 innercount = innercount + 1;  
 answer = answer + '/n'; 
 count = count + 1; 
 return answer 
 }




// so first of all our first condition is that if the count = 1 the function will return welcome 1 
//  welcome 2, meet 1
// if the count is 2 it will return welcome2 , meeet count - 1  
//  welcome 3, meet 1 and 2
// if it's 3 meet count - 2 and count-1
//  welcome 4, meet 1, 2 and 3
// if the count is greater than 3 it will return welcome (count), meet (count) 
//  welcome 5, meet 1, 2, 3 and 4
//

// 4- Write a function shortestWord that works like longestWord, but returns the shortest word instead.
