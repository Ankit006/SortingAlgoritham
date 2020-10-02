function selectionSort(array) {

    for(let x = 0;x<array.length;x++){

        for(let i=x;i<array.length;i++){
            if(array[x] > array[i] ){
                let tmp = array[x]
                array[x] = array[i]
                array[i] = tmp
            }
        }
    }
    console.log(array)
  }

  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);



