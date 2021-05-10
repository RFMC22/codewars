//CSV representation of array
function toCsvText(array) {
  let result = array.map(a =>{
    return a.join(',')
  }).join('\n');
  return result;
}