// function bubbleSort(array) {
//     for(let i = 0; i < array.length; i++){
//           for(let j = i + 1; j < array.length; j++){
//               if(array[i] > array[j]){
//                   [array[j], array[i]] = [array[i], array[j]]
//               }
//           }
//       }
//       return array;
//   }

  function bubbleSort(array) {
	for(let i = array.length - 1; i > 0; i--){
		let noswaps = true;
		for(let j = 0; j < i; j++){
			if(array[j] > array[j + 1]){
				[array[j], array[j+1]] = [array[j + 1], array[j]];
				noswaps = false
			}
		}
		if(noswaps) break;
	}
	return array;
}
console.log(bubbleSort([8, 5, 2, 9, 5, 6, 3]))