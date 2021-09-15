function smallestDifference(arrayOne, arrayTwo) {

	let smallestDiff = Infinity;
	let returnArr = []
	for(let i = 0; i < arrayOne.length; i++){
		for(let j = 0; j < arrayTwo.length; j++){
			let maxNum =  Math.max(arrayOne[i], arrayTwo[j])
			let minNum =  Math.min(arrayOne[i], arrayTwo[j])
			let checkNum = maxNum - minNum;
			if(checkNum < smallestDiff) {
					smallestDiff = checkNum
					returnArr = [arrayOne[i], arrayTwo[j]]
				}
		}
	}
	return returnArr;
}

console.log(smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]))