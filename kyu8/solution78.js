//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let pos = 0;
  let neg = 0;
  if (input === null || input.length === 0) {
    return [];
  }else{
    pos = input.filter(n => 0 < n).length;
    neg = input.filter(n => 0 > n).reduce((a,b) => a+b);
  }
  return [pos,neg];
}