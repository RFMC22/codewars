//Beginner - Reduce but Grow 
function grow(x){
  return x.reduce((acc,val)=>{
    return acc*val;
  });
}