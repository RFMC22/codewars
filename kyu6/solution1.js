//Sums of Parts
function partsSums(ls) {
  let sum = ls.reduce((acc, val) => acc + val, 0)
  let newArray = [sum];
  for (let i = 1; i <= ls.length; i++){
        sum -= ls[i-1]
        newArray.push(sum)
    }
  return newArray
}