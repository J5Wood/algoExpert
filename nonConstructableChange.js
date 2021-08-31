// Finds first non sumable value given an array of numbers

// Works because:
    // You start from 0, and just keep adding each consecutinve number in a sorted array to a running total. If the current array value is less than or equal to the running total plus 1, every number below the running total + 1 will be able to be made with a combination of the previous and current numbers in the array. If the current array value is greater than the running total plus 1, that running total plus one can't be made, and is the first unattainable number.

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

const coins = [5, 7, 1, 1, 2, 3, 22]

console.log(nonConstructibleChange(coins))