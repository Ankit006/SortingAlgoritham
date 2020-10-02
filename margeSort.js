function marge(leftArr,rightArr){
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex <rightArr.length){
        const leftValue = leftArr[leftIndex]
        const rightValue = rightArr[rightIndex]
        if(leftValue <rightValue){
            output.push(leftValue)
            leftIndex ++;
        }else{
            output.push(rightValue)
            rightIndex++
        }
    }
    return [...output,...leftArr.slice(leftIndex),...rightArr.slice(rightIndex)]
}


function margeSort(array){
    if(array.length === 1){
        return array;
    }
    let findMiddle = Math.floor(array.length / 2)
    let firstPart = array.slice(0,findMiddle);
    let secondPart = array.slice(findMiddle)
    return marge(margeSort(firstPart),margeSort(secondPart))
}

console.log(margeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]))