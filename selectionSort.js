function selectionSort(array) {
	for(let i = 0; i < array.length; i++){
		let checkIdx = i;
		for(let j = i + 1; j < array.length; j++){
			if (array[j] < array[checkIdx]) checkIdx = j;
		}
		if(checkIdx !== i) {
			[array[i], array[checkIdx]] = [array[checkIdx], array[i]];
		}
	}
	return array;
}

console.log(selectionSort([8, 5, 2, 9, 5, 6, 3]))