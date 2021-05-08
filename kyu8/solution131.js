//Smallest unused ID
function nextId(ids){
  let arr = ids.filter((a, b, c) => c.indexOf(a) === b).sort((a, b) => a - b);
  if(arr[0] !== 0)
    {
      return 0
    }
  for(let i = 0; i <= arr.length; i++)
    {
      if(arr[i+1] - arr[i] !== 1)
        {
          return arr[i] += 1;
        }
    }
}
