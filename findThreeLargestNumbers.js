function findThreeLargestNumbers(array) {
	let returnArr = [-Infinity,-Infinity,-Infinity]
	let counter;
	for(let i = 0; i < array.length; i++){
		counter = 0
		while(counter < 3){
			if(array[i] >= returnArr[counter]){
				if(returnArr[counter - 1]) returnArr[counter - 1] = returnArr[counter]
				returnArr[counter] = array[i]
			}
			counter++
		}
	}
	return returnArr;
}

console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))