function isValidSubsequence(array, sequence) {
	let counter = 0;
		for(let i = 0; i < array.length; i++){
			if(array[i] === sequence[counter]) counter++;
			if(counter === sequence.length) return true;
	}
	return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10],[1, 6, -1, 10]))