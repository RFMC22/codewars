// Counting sheep...
function countSheeps(arrayOfSheep) {
  let sum = 0;
  arrayOfSheep.forEach(dato=>{
    if(dato){
      sum++;
    }
  });
  return sum;
}