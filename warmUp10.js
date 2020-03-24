// Style your code and explain it step by step before jumping to code :D
// Read carefully, focus and test your code :) ... /\ HaPPy HaCkInG /\

// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 1- Using recursion Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function gcd(x,y){
    if (x === 0){
        return y;
    }if (y === 0){
        return x;
    }
        return gcd(y,x%y);
}


// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************

// 2-Write a function called sum that accepts two numbers as parameters, and sum them together but without suming them togther directly
//you can only add one at each summetion, you'll need to use recursion in this.
 function inc(x) {
	  return x + 1;
  }
  function dec(x) {
		return x - 1;
  }
function sum(x,y) {
	if (x===0) {
		return y
	} if (y===0){
		return x 
	} if (x<y) { 
return inc(sum(x,dec(y)))
}
return inc(sum(dec(x),y))
}



// **************** git status ****************
// **************** git add fileName.js ****************
// **************** git status ****************
// **************** git commit -m "your message" ****************
// **************** git status ****************
// **************** git push origin master ****************
