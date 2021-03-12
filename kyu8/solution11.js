//Is he gonna survive? 
function hero(bullets, dragons){
  let aux = dragons * 2;
  if(bullets < aux){
    return false;
  }else{
    return true;
  }
}