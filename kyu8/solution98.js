//Will there be enough space?
function enough(cap, on, wait) {
  let total = on + wait;
  if(cap <= total)
    {
      return (on + wait) - cap;
    }else
      {
        return 0;
      }
}