//Holiday VIII - Duty Free
function dutyFree(normPrice, discount, hol){
  let total = hol / (normPrice * discount * 0.01);
  return Math.floor(total);
}