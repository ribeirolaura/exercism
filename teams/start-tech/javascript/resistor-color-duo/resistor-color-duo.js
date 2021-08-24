//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// Há duas formas de fazer esse exercício, através de strings e números. 
/*const COLORS = {
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
};*/

const COLORS2 = {
  black: "0",
  brown: "1", 
  red: "2", 
  orange: "3", 
  yellow: "4",
  green: "5", 
  blue: "6", 
  violet: "7", 
  grey: "8",
  white: "9",
};

export const decodedValue = (colorArray) => {
  //returN COLORS[colorArray[0]] * 10 + COLORS[colorArray[1]];
  const result = COLORS2[colorArray[0]] + COLORS2[colorArray[1]]; 
  return +result; // o mais converte a string acima para número
};
