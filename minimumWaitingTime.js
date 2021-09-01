function minimumWaitingTime(queries) {
	let minWait = 0;
	let counter = queries.length - 1;
	queries = queries.sort((a,b) => a - b);
	
	for(let i = 0; i < queries.length - 1; i++){
		minWait += queries[i] * counter;
		counter--;
	}
  return minWait;
}