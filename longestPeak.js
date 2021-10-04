function longestPeak(array) {
	let currentNum = array[0]
	let maxPeak = 0
	let currentRun = 1
	let movingUp = true
	
	for(let i = 1; i < array.length; i++){
		// if moving up and next num is up, continue counting
		if(currentNum < array[i] && movingUp){
			currentRun++ 
		// otherwise you're either moving down, next num is down, or nums are equal
		// if theres a current run, indicating you've moved up already,
		// and next num is down, continue counting, set moveup to false to keep from counting upnum
		} else if (currentRun > 1 && currentNum > array[i]){
			currentRun++
			movingUp = false
		// otherwise:
			//you've found equal nums or
			//you were moving down and next is up
			// reset counting cycle
		} else {
			if (!movingUp) {
				// if you were moving down and next num breaks cycle,
				// set peak to current run, decrement i to start new run with current val
				maxPeak = Math.max(maxPeak, currentRun)
				i--
			}
			currentRun = 1
			movingUp = true
		} 
		//increment current num for next loop
		currentNum = array[i]
	}
	if(!movingUp) maxPeak = Math.max(maxPeak, currentRun) 
	
	return maxPeak
}

const arr = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]

console.log(longestPeak(arr))