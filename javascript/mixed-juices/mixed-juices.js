// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

import { time } from "console";
import { SourceMap } from "module";

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch (name){ 
    case 'Pure Strawberry Joy': 
      return 0.5;
      break;  
    case 'Energizer': case 'Green Garden': 
      return 1.5; 
      break; 
    case 'Tropical Island': 
      return 3; 
      break; 
    case 'All or Nothing': 
      return 5; 
      break;
    default: 
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let somaGominho = 0; 
  let limoes = 0; 

  if (wedgesNeeded === 0){
    return 0; 
  } else {
      for (let i = 0; i < limes.length; i++) { //fazer de novo com 
        if (limes[i] === 'small') {
          somaGominho += 6;
        } else if (limes[i] === 'medium'){ 
          somaGominho += 8; 
        } else if (limes[i] === 'large'){ 
          somaGominho += 10; 
        } 
      limoes ++;

      if (wedgesNeeded < somaGominho) {
        break;
        }
      }
      return limoes;
    }
} 
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  // let somaTempo = 0; 
  // for (let index = 0; index < orders.length; index++) {
  //     somaTempo += timeToMixJuice(orders[index]);
  //     if (somaTempo < timeLeft){ 
  //       orders.splice(somaTempo, orders.length); 
  //     } else break;
    
  // }
  // return orders;  
  // let somaTempo = 0;
  // let contador = 0;
  
  // if (timeLeft < 0.5){
  //   return orders.slice(1, orders.length)
  
  // } else{
  //   for (let index = 0; index < orders.length; index++){
  //   if (timeToMixJuice(orders[index]) < timeLeft){
  //    somaTempo += timeToMixJuice(orders[index]);
  //   }   
  //    contador++
  //    if (somaTempo > timeLeft) {
  //       break;
  //       }
  //  }
  //  return orders.slice(contador, orders.length)
  // }

  let contador = 0
  let tempo = timeLeft;  // boa prática: não alterar o valor do parâmetro dado, sempre tentar atribuir a uma nova variável !!!! 
  
  do {
     let totalSuco = timeToMixJuice(orders[contador]);
     tempo -= totalSuco; 
     contador ++; 
  } 
   while (tempo > 0); 
   return orders.slice(contador); 
}