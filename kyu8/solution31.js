//Lario and Muigi Pipe Problem
function pipeFix(numbers){
  let min = numbers[0];
  let max = numbers[numbers.length - 1];
  let total = max - min;
  let newnumbers = [];
  for(let i = 0; i < total + 1 ; i++){
    min++;
    newnumbers[i] = min - 1;
  }
  return newnumbers
}