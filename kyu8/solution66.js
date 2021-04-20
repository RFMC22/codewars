//Beginner Series #2 Clock
function past(h, m, s){
  let ms = h * 3600000 + m * 60000 + s * 1000;
  return ms;
}