//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.


export class ResistorColorTrio {
  constructor(...color) {
    this.color = color[0]; // this.color aqui define ele mesmo para que possa ser acessado através do this em outros blocos
    };
  

  get label() {
    var listaCores = {
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
    };

    var resistorDoisDigitosIniciais = +("" + listaCores[this.color[0]] + listaCores[this.color[1]]); //aspas duplas no inicio transforma a soma em string - no final soma primeiro e depois transforma em string.

    let calculo = resistorDoisDigitosIniciais * (Math.pow(10, (listaCores[this.color[2]])));
    
    if (Number.isNaN(calculo)) {
      throw new Error('invalid color');
    } else if (calculo > 0 && calculo <= 999) {
       return ("Resistor value: " + calculo + " ohms"); 
    } else if (calculo > 999){ 
       return ("Resistor value: " + (calculo/1000) + " kiloohms"); 
    }
  }
}