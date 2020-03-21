// 1 - Write a function named objKey that take an object as a parameter and returns an array containing the keys of the object
// objKey({name:'ahmed',age:20}) ==> ['name','age']
function objKey(obj) {
	return Object.keys(obj)
}

// 2 - Write a function named objLength to get the length of a JavaScript object
// objLength({name:'ahmed',age:20}) ==> 2 
function objLength(obj) {
	return	Object.keys(obj).length 
	
}

// 3 - Write a function named objSort to sort an array of JavaScript objects based on the id
// objSort([{id:2,value:50},{id:0,value:70},{id:1,value:40}]) ==> [{id:0,value:70},{id:1,value:40},{id:2,value:50}]
function objSort (arr) {
	for (var i=0; i<arr.length; i++) {
		if (arr[i].id===0) {
			arr.unshift(arr[i])
			arr.splice(i,1) 	
		} else if (arr[i].id > arr[i+1].id) {
			arr.push(arr[i+1])
			arr.splice(i+1,1)
			arr.push(arr[i])
			arr.splice(i,1)
		 } else {
		 	return arr 
		 }
		}
	}
 		//Or


 		function objSort (arr) {
	for (var i=0; i<arr.length; i++) {
		if (arr[i].id<arr[i+1].id) {
				arr.push(arr[i])
				arr.splice(i,1)
				arr.push(arr[i+1])
				arr.splice(i+1,1)
		} if  (arr[i].id > arr[i+1].id) {
			arr.push(arr[i+1])
			arr.splice(i+1,1)
			arr.push(arr[i])
			arr.splice(i,1)
		 } else {
		 	return arr 
		 }
		}
	}

 		