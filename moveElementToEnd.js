// function moveElementToEnd(array, toMove) {
// 	let stickyNums = array.filter(num => num !== toMove)
// 	let movedNums = array.filter(num => num === toMove)
// 	array = stickyNums.concat(movedNums)
// 	return array;
// }

function moveElementToEnd(array, toMove) {
	let left = 0;
	let right = array.length - 1;
	while(left < right){
		if(array[right] === toMove){
			right--;
		} else {
			if(array[left] === toMove){
				[array[left], array[right]] = [array[right], array[left]]
			}
			left++;
		}
	}
	return array;
}

console.log(moveElementToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2))