//Sum Mixed Array
function sumMix(x){
  return Number(x.reduce((acc,val) => Number(acc) + Number(val)));
}