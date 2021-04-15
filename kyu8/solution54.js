//Abbreviate a Two Word Name
function abbrevName(name){
  let result = name.split(' ');
  return result[0].charAt(0).toUpperCase() + '.' + result[1].charAt(0).toUpperCase();
}