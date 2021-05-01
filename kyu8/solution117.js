//Invert values
function invert(array) {
  return array.map(a => {
    if(Math.sign(a) > 0){
      return -Math.abs(a);
    }else{
      return Math.abs(a);
    }
  })
}