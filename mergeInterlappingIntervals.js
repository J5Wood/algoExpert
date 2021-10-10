function mergeOverlappingIntervals(array) {
    array.sort((a,b) => a[0] - b[0])
        
    for(let i = 0; i < array.length - 1; i++){
        if(array[i][1] >= array[i + 1][0]){
            let leftSide = array.slice(0, i)
            let rightSide = array.slice(i + 2)
            let middle = [[array[i][0], Math.max(array[i][1], array[i + 1][1])]]

            array = leftSide.concat(middle, rightSide)
        }
    }
    return array;
}

mergeOverlappingIntervals([
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
])
.forEach(arr => console.log(arr))