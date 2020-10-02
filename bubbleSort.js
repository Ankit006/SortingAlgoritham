/*in bubbele sort algorithma we swap item from start to end
 for example [5,1,4,2] =>[1,5,4,2]=>[1,4,5,2]=>[1,4,2,5]
 (see how we use swap to send big number to left right)
 now we loop again to send other big number ot right
*/


function bubbleSort(arr){
    for(let x=arr.length-1;x>=0;x--){
        for(let i=0;i<=x-1;i++){
            if(arr[i] > arr[i+1] ){
                let tmp = arr[i+1]
                arr[i+1] = arr[i]
                arr[i] = tmp
            }
        }
    }
    return arr
}

bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
