//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {

  constructor(numero) {
    this.numero = numero; 
  }

  get sumOfSquares() {
    let somaDosQuadrados = 0; 

    for (let n = 0; n <= this.numero; n++) {
      somaDosQuadrados += Math.pow (n, 2); 
    }
    return somaDosQuadrados;
  }

  get squareOfSum() {
    let quadradoDaSoma = 0; 

    for (let n = 0; n <= this.numero; n++) {
      quadradoDaSoma += n; 
    }
    return (Math.pow(quadradoDaSoma, 2));
  }

  get difference() {
    let diferencaQuadradoESoma = this.squareOfSum - this.sumOfSquares;
    return diferencaQuadradoESoma; 
  }
}
