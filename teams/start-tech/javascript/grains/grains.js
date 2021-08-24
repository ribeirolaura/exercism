/**
 * You can use the bigint type and BigInt global object to support numbers below
 * Number.MIN_SAFE_INTEGER and above NUMBER.MAX_SAFE_INTEGER.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
 */

//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const square = (quadrado) => {
  if (quadrado <= 0 || quadrado > 64) {
   
    throw new Error ("square must be between 1 and 64");

  }
  
  let n = quadrado - 1; 
  let graosNoQuadrado = BigInt(Math.pow(2,n)); 
  
  return graosNoQuadrado; 

};

export const total = () => {
  let soma = BigInt(0); 

  for (let i = 0; i < 64; i ++) {
    soma += BigInt(Math.pow(2,i)); 
  }

  return soma;
};
