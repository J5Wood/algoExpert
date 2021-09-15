function threeNumberSum(array, targetSum) {
	let checkArr = array.sort((a,b) => a - b)
	let returnArr = []
	for(let i = 0; i < checkArr.length; i++){
		for(let j = i + 1; j < checkArr.length; j++){
			for(let k = j + 1; k < checkArr.length; k++){
				if(checkArr[i] + checkArr[j] + checkArr[k] === targetSum){
					returnArr.push([checkArr[i], checkArr[j], checkArr[k]])
				}
			}
		}
	}
	return returnArr;
}

console.log(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0));