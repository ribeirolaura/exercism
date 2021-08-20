//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/* A leap year: 
On every year that is evenly divisible by 4, 
EXCEPT every year that is evenly divisible by 100, 
unless the year is also divisible by 400 */

export const isLeap = (anoAVerificar) => {
  const divisivelPor4 = anoAVerificar % 4 === 0; // ano é divisível por 4
  const divisivelPor100 = anoAVerificar % 100 === 0; // ano é divisível por 100
  const divisivelPor400 = anoAVerificar % 400 === 0; // ano é divisível por 400
  const ehBissexto = divisivelPor4 && !divisivelPor100 || divisivelPor400; // regras bissexto
  return ehBissexto;
};

export const isLeap = (ano) => { 
  if ( (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0) ) {
     return true 
  } 
  else { 
    return false 
  } 
};
