function nonConstructibleChange(coins) {
	let sortedCoins = coins.sort((a,b) => a - b);
	let changeStore = 0;
	for(let i = 0; i < sortedCoins.length; i++){
		if(sortedCoins[i] > changeStore + 1){
			break;
		} else {
			changeStore += sortedCoins[i];
		}
	}
	return changeStore + 1;
}