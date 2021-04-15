//A wolf in sheep's clothing
function warnTheSheep(queue) {
  let num = (queue.length - queue.indexOf('wolf')) - 1;
  if(num !== 0){
    return `Oi! Sheep number ${num}! You are about to be eaten by a wolf!`;
  }else{
    return "Pls go away and stop eating my sheep";
  }
}