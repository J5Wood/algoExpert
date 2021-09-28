function spiralTraverse(array) {
	let returnArr = []
	let startRow = 0
	let endRow = array.length - 1
	let startCol = 0
	let endCol = array[0].length - 1
    
    function breakCheck() {
    	if(returnArr.length >= array.length * array[0].length){
    		return true;
    	} else { 
    	    return false;
    	}
    }
	while(returnArr.length < array.length * array[0].length){
		for(let i = startCol; i <= endCol; i++){
			returnArr.push(array[startRow][i])
		}
		for(let i = startRow + 1; i <= endRow; i++){
			returnArr.push(array[i][endCol])
		}
		for(let i = endCol - 1; i >= startCol; i--){
            if(breakCheck()) break
			returnArr.push(array[endRow][i])
		}
		for(let i = endRow - 1; i > startRow; i--){
            if(breakCheck()) break
			returnArr.push(array[i][startCol])
		}
		startCol++;
		startRow++;
		endRow--;
		endCol--;
	}
	return returnArr;
}

console.log(spiralTraverse([
    [1, 2, 3, 4],
    [10, 11, 12, 5],
    [9, 8, 7, 6]
  ]))