//Calculate average
function find_average(array) {
 let result = array.reduce((acc,val) =>{
    return (acc + val);
  })/array.length;
  return result;
}
