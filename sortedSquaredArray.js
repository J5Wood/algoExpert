// function sortedSquaredArray(array) {
// 	let sqrArr = array.map(num => num ** 2);
// 	sqrArr.sort(function(a,b) {
// 								return a - b;
// 										 })
//   return sqrArr
// }

function sortedSquaredArray(array) {
	return array.map(num => Math.abs(num) ** 2).sort((a,b) => a - b);
}

console.log(sortedSquaredArray([-2, 1, 2, 3, 5, 6, 8, 9]))