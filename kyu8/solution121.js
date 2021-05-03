//Merge two sorted arrays into one
function mergeArrays(arr1, arr2) {
  let arr = arr1.concat(arr2).sort((a,b)=>a-b);
  let result = arr.filter((item,index) =>{
    return arr.indexOf(item) == index;
  });
  return result
}