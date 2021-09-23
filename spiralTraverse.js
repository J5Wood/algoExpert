function spiralTraverse(array) {
	let returnArr = []
	let len = array.length
	let startRow = 0
	let endRow = len - 1
	let startCol = 0
	let endCol = len - 1
	while(returnArr.length < array.length ** 2){
		for(let i = startRow; i <= endCol; i++){
			returnArr.push(array[startRow][i])
		}
		for(let i = startRow + 1; i <= endCol; i++){
			returnArr.push(array[i][endCol])
		}
		for(let i = endRow - 1; i >= startCol; i--){
			returnArr.push(array[endRow][i])
		}
		for(let i = endRow - 1; i > startRow; i--){
			returnArr.push(array[i][startCol])
		}
		startCol++;
		startRow++;
		endRow--;
		endCol--;
	}
	return returnArr;
}