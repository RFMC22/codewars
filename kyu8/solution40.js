//Generate range of integers
function generateRange(min, max, step){
  let array = [];
  for(min; min<=max; step){
    array.push(min);
    min = min + step;
  }
  return array;
}