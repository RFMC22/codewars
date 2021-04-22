//If you can't sleep, just count sheep!!
let countSheep = function (num){
  let text = '1 sheep...';
  for(let i = 2; i <= num; i++)
    {
      text = text + `${i} sheep...`
    }
  return text;
}