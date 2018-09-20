class ArrayUtilities {
 reverseArray(array:number[]){
  return array.slice(0).reverse();
 }

 lastItemOfArray(array:number[]){
  return array.slice(0).pop();
 }

 firstItemOfArray(array:number[]){
  return array.slice(0).shift();
 }

 concatenateArray(array1:number[],array2:number[]){
  return array1.concat(array2);
 }
}

export default new ArrayUtilities;