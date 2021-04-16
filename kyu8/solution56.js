//All Star Code Challenge #18
function strCount(str, letter){  
  let repeat = 0;
  for(let i = 0; i<str.length; i++){
    if(str[i] == letter){
      repeat++;
    }
  }
  return repeat;
}