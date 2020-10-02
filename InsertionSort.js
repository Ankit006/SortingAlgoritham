function insertionSort(array) {
   for(let x = 1;x<array.length;x++){
       let item = array[x];
       for(let i=0;i<x;i++){
           if(array[i] > array[x]){
               array.splice(x,1)
               array.splice(i,0,item)
           }
       }

   }
   return array

}
  
  insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
  