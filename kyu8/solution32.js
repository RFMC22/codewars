//Get the mean of an array
function getAverage(marks){
  let s = marks.reduce((acc,val) => acc + val);
  let n = marks.length;
  return Math.floor(s/n);
}