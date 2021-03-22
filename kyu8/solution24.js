//Transportation on vacation 
function rentalCarCost(d) {
  let total;
  let cost = 40;
  if(d>=7){
    return total = cost * d - 50;
  }else if(d>=3){
    return total = cost * d - 20;
  }else{
    return total = cost * d;
  }
}