//Fake Binary 
function fakeBin(x){
  return x.split('').map( int =>{
    if(int < 5){
      return '0';
    }else{
      return '1';
    }
  }).join('');
}
