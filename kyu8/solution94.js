//Twice as old
function twiceAsOld(dadYearsOld, sonYearsOld) {
  let double = (dadYearsOld - sonYearsOld * 2);
  return double < 0 ? double * -1 : double ;
}