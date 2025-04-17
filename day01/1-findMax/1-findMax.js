function findMax(arr){
    if (arr.length === 0 ) return null; //handle empty array

    let max = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}

export default findMax;

// console.log(findMax([3, 7, 2, 9, 5])); 
