function generateDocument(characters, document) {
	let checkIdx;
	for(let i = 0; i < document.length; i++){
		checkIdx = characters.indexOf(document[i]);
		if (characters[checkIdx]){ 
			characters = characters.slice(0, checkIdx) + characters.slice(checkIdx + 1);
		} else {
			return false;
		}
	}
  return true;
}

console.log(generateDocument("aheaolabbhb", "hello"))