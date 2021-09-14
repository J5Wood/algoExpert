function insertionSort(array) {
	for(let i = 1; i < array.length; i++){
		let checkIndex = i
		while(array[checkIndex] < array[checkIndex - 1]){
			[array[checkIndex], array[checkIndex - 1]] = [array[checkIndex - 1], array[checkIndex]]
			checkIndex--;
		}
	}
	return array;
}

console.log(insertionSort([8, 5, 2, 9, 5, 6, 3]))