function getNthFib(n) {
	if(n === 1) return 0;
	if (n <= 3) return 1;
	let fibNums = [0,1,1];
	for(let i = 3; i < n; i++){
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2] 
	}
	return fibNums[n - 1]
}