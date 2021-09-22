function isMonotonic(array) {
	let firstChange = 1;
	while(array[0] === array[firstChange] && firstChange < array.length) firstChange++;
	
	if(array[0] < array[firstChange]){
		for(let i = 0; i < array.length - 1; i++){
			if(array[i] > array[i + 1]) return false
		}
	} else {
		for(let i = 0; i < array.length - 1; i++){
			if(array[i] < array[i + 1]) return false
		}
	}
	return true
}

console.log(isMonotonic([-1, -1, -1, -1, -5, -10, -1100, -1100, -1101, -1102, -9001]))