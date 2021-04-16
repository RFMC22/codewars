//Area of a Square
function squareArea(A){
  let result = Math.pow(2 * A / Math.PI,2);
  return Number(result.toFixed(2));
}