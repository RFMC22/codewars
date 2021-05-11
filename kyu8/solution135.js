//N-th Power
function index(array, n){
  let result = 0;
  for(let i = 0; i <= n; i++)
    {
     if(array.length <= n)
       {
         return -1
       }else{
         result = Math.pow(array[i],n);
       }
    }
  return result
}