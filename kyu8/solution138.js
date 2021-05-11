//Sum of differences in array
function sumOfDifferences(arr) {
  if(arr.length > 1){
    return Math.max(...arr) - Math.min(...arr);
  }else{
    return 0;
  }
}