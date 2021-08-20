//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.

// possibilidade de fazer com SWITCH! 

export const age = (planeta, segundos) => {

  const segundosAnoTerrestre = 31557600;
 
  let anoNoPlaneta; 

  if (planeta === "earth") {
    anoNoPlaneta = 1;
    } else if (planeta === "mercury") {
    anoNoPlaneta = 0.2408467;
    } else if (planeta === "venus") {
    anoNoPlaneta = 0.61519726;
    } else if (planeta === "mars") {
    anoNoPlaneta = 1.8808158;
    } else if (planeta === "jupiter") {
    anoNoPlaneta = 11.862615;
    } else if (planeta === "saturn") {
    anoNoPlaneta = 29.447498;
    } else if (planeta === "uranus") {
    anoNoPlaneta = 84.016846;
    } else if (planeta === "neptune") {
    anoNoPlaneta = 164.79132;
    } 

  let calculo =  segundos / segundosAnoTerrestre / anoNoPlaneta; 

  const idadeNoPlaneta = parseFloat(calculo.toFixed(2));

  return idadeNoPlaneta;
};