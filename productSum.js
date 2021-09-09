function productSum(array) {
	let sum = 0
	
	function disambigArr(array, multi = 1){
  	let returnVal = 0;
		for(let i = 0; i < array.length; i++){
			if(typeof(array[i]) === 'number'){
      	returnVal += array[i];
		  } else {
		  	returnVal += disambigArr(array[i], multi + 1);
		  }
		}
    return returnVal * multi;
	}
	sum += disambigArr(array);
	return sum;
}