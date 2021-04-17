//Array plus array
function arrayPlusArray(arr1, arr2) {
  let num1 = arr1.reduce((acc1, val1)  => acc1 + val1);
  let num2 = arr2.reduce((acc2 ,val2 ) => acc2 + val2);
  return num1 + num2;
}