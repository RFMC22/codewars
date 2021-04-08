// Beginner Series #4 Cockroach
function cockroachSpeed(s) {
  let km = 1000;
  let m = 100;
  let seg = 1/3600;
  let cms = s * km * m * seg;
  return Math.floor(cms);
}