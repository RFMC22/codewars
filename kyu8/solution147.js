//Keep Hydrated!
function litres(time) {
  let l = 0;
  for(let i = 0; i < Math.floor(time); i++){
    l += 0.5; 
  }
  return Math.floor(l);
}