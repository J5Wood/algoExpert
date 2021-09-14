function caesarCipherEncryptor(string, key) {
	let returnStr = string.split("").map(letter => {
		let codeIndex = letter.charCodeAt();
		if(key > 26) key = key % 26;
		codeIndex += key;
		if(codeIndex > 122) codeIndex -= 26;
		return String.fromCharCode(codeIndex);
	})
	return returnStr.join("")
}

console.log(caesarCipherEncryptor("abcdefgzyxwvut", 23))