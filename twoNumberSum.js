function twoNumberSum(array, targetSum){
    let sortedArr = array.sort(function(a,b){
        return a - b;
    });
    let leftPointer = 0;
    let rightPointer = sortedArr.length - 1;

    while(leftPointer <= rightPointer){
        let checkSum = sortedArr[leftPointer] + sortedArr[rightPointer];
        if(checkSum === targetSum) return [sortedArr[leftPointer], sortedArr[rightPointer]];
        if(targetSum < checkSum) rightPointer--;
        if(targetSum > checkSum) leftPointer++;
    }
    return [];
}

console.log(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10))