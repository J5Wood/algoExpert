function classPhotos(redShirtHeights, blueShirtHeights) {
	let frontRow = redShirtHeights.sort((a,b) => a - b);
	let backRow = blueShirtHeights.sort((a,b) => a - b);
	if( frontRow[frontRow.length - 1] > backRow[backRow.length - 1]){
		[frontRow, backRow] = [backRow, frontRow];
	}
	for( let i = 0; i < frontRow.length; i++){
		if(backRow[i] <= frontRow[i]) return false;
	}
  return true;
}