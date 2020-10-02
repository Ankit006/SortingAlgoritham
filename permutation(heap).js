// get permutation value
const getPermutations = arr => {

    const output = [];
  
    const swapInPlace = (arrToSwap, indexA, indexB) => {
      const temp = arrToSwap[indexA];
      arrToSwap[indexA] = arrToSwap[indexB];
      arrToSwap[indexB] = temp;
    };
  
    const generate = (n, heapArr) => {
      if (n === 1) {
        output.push(heapArr.slice().join(""));
        return;
      }
  
      generate(n - 1, heapArr);
  
      for (let i = 0; i < n - 1; i++) {
        if (n % 2 === 0) {
          swapInPlace(heapArr, i, n - 1);
        } else {
          swapInPlace(heapArr, 0, n - 1);
        }
  
        generate(n - 1, heapArr);
      }
    };
  
    generate(arr.length, arr.slice());
  
    return output;
  };

 
// repeated values

function permAlone(str){
   str= str.split("");
   let count = 0;
   let testPatt= new RegExp("([a-zA-Z])\\1")
   let permutation = getPermutations(str)
   for(let i=0;i<permutation.length;i++){
     if(!testPatt.test(permutation[i])){
       count++
     }
   }
   return count;
}
permAlone("AAB")