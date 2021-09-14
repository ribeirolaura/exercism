// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // let soma = 0;
  // for (let i = 0; i < birdsPerDay.length; i++) {
  //   soma += birdsPerDay[i];
  // }
  // return soma;
  let soma = birdsPerDay.reduce((acc, birds) => acc + (2*birds), 0); 
  return soma; 
}

/**
 *
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let newArray = [];
  let somaArrayPerWeek = []; 
  //console.log(birdsPerDay);
 // console.log(week);
  
  for (let a = 0; a <= birdsPerDay.length-1; a++) { //estudar de novo novamente mais um vez
  newArray.push(birdsPerDay[a]);  
    if (a > 0 && (a+1) % 7 === 0) {   // quer olhar de 7 em 7 elementos - daria para fazer por 6 mas ai ficaria confusa. 
      somaArrayPerWeek.push(totalBirdCount(newArray)); 
      newArray = []; 
    } else if (a == birdsPerDay.length-1){ 
      somaArrayPerWeek.push(totalBirdCount(newArray));
    }
  }
  return somaArrayPerWeek[week-1];
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if (!(index % 2)){
      birdsPerDay[index] += 1;
  }
}
  return birdsPerDay; 
}