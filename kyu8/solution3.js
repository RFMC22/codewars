//Difference of Volumes of Cuboids
function findDifference(a, b) {
  a = a.reduce((ac,va)=>ac*va);
  b = b.reduce((ac,va)=>ac*va);
  a > b ? result = a - b : result = b - a ;
  return result;
}