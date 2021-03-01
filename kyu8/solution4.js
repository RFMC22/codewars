//Stringy Strings
function stringy(size) {
  let result = [];
  for(let i=0; i<size;i++){
    if(i%2 !== 0){
      result[i] = 0;
    }else{
      result[i] = 1;
    }
  }
  return result.join('');
}