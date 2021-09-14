function runLengthEncoding(string) {
	for(let i = 0; i < string.length; i++){
		let counter = 1;
		if(string[i] === string[i + counter]){
			while (string[i] === string[i + counter] && counter < 9){
				counter++
			}
		}
		string = string.slice(0,i) + counter + string[i] + string.slice(i + counter)
		i++
	}
	return string
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"))