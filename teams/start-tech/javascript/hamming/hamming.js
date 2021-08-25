//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (esquerda, direita) => {
  
    if (esquerda === direita) // se igualar esquerda e direita, dá para abranger para casos onde o lado direito e lado esquerdo são iguais ou diferentes de acordo com os testes
      return 0; 

    if (esquerda === "") 
      throw new Error ("left strand must not be empty");

    if (direita === "") 
      throw new Error ("right strand must not be empty"); 

    if (direita.length !== esquerda.length) 
      throw new Error ("left and right strands must be of equal length"); 
    
    let hamming = 0; 

    for (let index = 0; index < esquerda.length; index++) {
         if (esquerda[index] !== direita[index]) {
           hamming ++;
         }
      }
    return hamming;
};

