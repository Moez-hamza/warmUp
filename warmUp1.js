// 1-using + operator combine your partner first and last name .

// 2-find if the number 13 is a multiple of 3 or not.

// 3-calculate the average age of the follwing ages [13,14,13,15,16,17,19,13,16,15]

// 4-calculate your age in seconds.

// your code is here

//1- 

"Moez"+" Hamza"

//2-

13%3!==0 //==> true so 13 is not a multiple of 3 

//3- 
function averageAge(ages)	{
	var sum = 0
	for (var i=0; i < ages.length; i=i+1) {
		
		sum =sum + ages[i]	
	}
	return sum/ages.length
}
var age = [13,14,13,15,16,17,19,13,16,15]
averageAge(age) //===> 15.1

//4-  1 year = 31556926 seconds; my age= 32 so 
32*31556926 //===> 1009821632 
// or 
function convertAge(age) {
	return age*31556926
}
