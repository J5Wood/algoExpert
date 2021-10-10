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

  console.log(arrayOfProducts([5, 1, 4, 2]))