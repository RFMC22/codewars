//Multiplication table for number
function multiTable(number) {
  let result = '';
  for(let i = 1; i <= 10; i++){
    result = result + "\n" + `${i} * ${number} = ${i*number}`
  }
  return result.replace("\n","");
}