//Filter out the geese
function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = birds.filter(name => {
    return !geese.includes(name);
  });
  return result;
};