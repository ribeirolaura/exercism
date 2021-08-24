//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// 
const cores = { //Definindo o valor referente a cada cor 
black: 0,
brown: 1, 
red: 2, 
orange: 3, 
yellow: 4,
green: 5, 
blue: 6, 
violet: 7, 
grey: 8,
white: 9
}

export const colorCode = (color) => {
  return cores[color]; //retorna o valor de acordo com a cor do resistor
};

export const COLORS = Object.keys(cores); //retorna a cor do resistor 
