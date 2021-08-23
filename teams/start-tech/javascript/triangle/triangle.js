//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  sideA; 
  sideB; 
  sideC; 

  constructor(...sides) { //o construtor funciona como os ingredientes do que vai ser construído! 
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
  };

  get todosLadosMaiorQueZero () {
    // método completo para validação da existência do triângulo
    // usando funções de array (forma alternativa)
    // side.some(size => size === 0)
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
  }; 
  
  get somaDoisLadosMaiorQueUmLado() { 
    return (this.sideA + this.sideB >= this.sideC) && (this.sideB + this.sideC >= this.sideA) && (this.sideC + this.sideA >= this.sideB); 
  };

  get validacaoExistenciaTriangulo() {
    return this.todosLadosMaiorQueZero && this.somaDoisLadosMaiorQueUmLado;
  }; 

  get isEquilateral() {
    return this.validacaoExistenciaTriangulo && (this.sideA === this.sideB && this.sideB === this.sideC && this.sideA === this.sideC);
  };
  
  get isIsosceles() {
    return this.validacaoExistenciaTriangulo && (this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC);
  };

  get isScalene() {
    return this.validacaoExistenciaTriangulo && (this.sideA !== this.sideB && this.sideB !== this.sideC && this.sideC !== this.sideA);
  };
}

