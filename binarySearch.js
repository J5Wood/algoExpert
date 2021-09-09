function binarySearch(array, target) {
    let leftPoint = 0;
    let rightPoint = array.length - 1

    while (leftPoint <= rightPoint){
        let midpoint = Math.floor((leftPoint + rightPoint) / 2)
        if (array[midpoint] === target) return midpoint;
        if (array[midpoint] > target) {
            rightPoint = midpoint - 1;
        } else {
            leftPoint = midpoint + 1;
        }
    }
    return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33))