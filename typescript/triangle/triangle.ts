export class Triangle {
  private readonly sideA: number; 
  private readonly sideB: number; 
  private readonly sideC: number; 

  constructor(...sides: number []) {
    this.sideA = sides[0];
    this.sideB = sides[1];
    this.sideC = sides[2];
  }

  private todosLadosMaiorQueZero (): boolean {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0; 
  }

  private somaDoisLadoMaiorQueUmLado (): boolean {
    return (this.sideA + this.sideB >= this.sideC) && (this.sideB + this.sideC >= this.sideA) && (this.sideA + this.sideC >= this.sideB); 
  }

  private validacaoExistencia (): boolean {
    return this.todosLadosMaiorQueZero() && this.somaDoisLadoMaiorQueUmLado(); 
  }

  get isEquilateral(): boolean { //o uso do get permite que ao inves de chamar a função chame o método
    return this.validacaoExistencia() && (this.sideA === this.sideB && this.sideA === this.sideC);
  }

  get isIsosceles(): boolean {
    return this.validacaoExistencia() && (this.sideA === this.sideB || this.sideA === this.sideC || this.sideB === this.sideC);
  }

  get isScalene(): boolean {
    return this.validacaoExistencia() && (this.sideA != this.sideB && this.sideB != this.sideC && this.sideC != this.sideA); 
  }
}
