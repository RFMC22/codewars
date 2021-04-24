//Enumerable Magic #4 - True for None?
function none(arr, fun){
  return arr.filter(fun).length === 0
}