//Total pressure calculation
solution = (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
  temp = 273.15 + temp;
  let n1 = givenMass1/molarMass1;
  let n2 = givenMass2/molarMass2;
  const R = 0.082;
  return ((n1 + n2) * R * temp)/volume;
}