function firstDuplicateValue(array) {
	const valueObj = {}
	let returnIdx = -1
	for(let val in array){
		if(valueObj[array[val]]){
			returnIdx = array[val]
			break
		} else {
			valueObj[array[val]] = true
		}
	}
  return returnIdx;
}

console.log(firstDuplicateValue([2, 1, 5, 2, 3, 3, 4]))