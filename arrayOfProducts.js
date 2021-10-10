function arrayOfProducts(array) {
    let returnArr = []
    let sum
    for(let i = 0; i < array.length; i++){
        sum = 1;
        for(let j = 0; j < array.length; j++){
            if(j !== i){
                sum *= array[j]
            }
        }
        returnArr.push(sum)
    }
    return returnArr;
  }

// function arrayOfProducts(array) {
//     let returnArr = []
//     let leftNums = []
//     let rightNums = []
//     let sum
//     for(let i = 0; i < array.length; i++){
//         sum = 1
//         leftNums = array.slice(0, i)
//         rightNums = array.slice(i + 1)
//         leftNums.forEach(num => sum *= num)
//         rightNums.forEach(num => sum *= num)
//         returnArr.push(sum)
//     }
//     return returnArr
// }

  console.log(arrayOfProducts([5, 1, 4, 2]))