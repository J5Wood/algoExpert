function tournamentWinner(competitions, results) {
	let points = {};
	let winner;
	for(let i = 0; i < competitions.length; i++){
		if(results[i] === 0){
			points[competitions[i][1]] ? points[competitions[i][1]] += 3 : points[competitions[i][1]] = 3;
		} else if (results[i] === 1) {
			points[competitions[i][0]] ? points[competitions[i][0]] += 3 : points[competitions[i][0]] = 3;
		}
	}
	for(let key in points){
		if(!winner || points[winner] < points[key]){
			winner = key
		}
	}
  return winner;
}
const contestants = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
    ["Ruby", "Java"],
    ["C", "Ruby"],
    ["Python", "Java"],
    ["CSS", "HTML"],
    ["Java", "Ruby"]
];
debugger

const results = [0, 0, 1, 1, 0, 0, 1, 0];

console.log(tournamentWinner(contestants, results));