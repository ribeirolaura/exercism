// @ts-check

import { count } from "console";

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  let contador = 0; 
  let qtdeTipodeCarta = stack.forEach((eachCard) => {
    if (card === eachCard) {
      contador++;
    }
  })
  return contador; 
}


/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  let countEven = 0; 
  let countOdd = 0;
  
  for (const carta of stack) {
      if (carta % 2 === 0) {
        countEven++; 
      } else 
        countOdd++;      
    }

  if (type) {
    return countEven; 
  } else 
    return countOdd;
  
} 