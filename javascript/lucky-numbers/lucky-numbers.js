// @ts-check

//import { loadPartialConfig } from "@babel/core";

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let concatArray1 = ''; 
    for (let i = 0; i < array1.length; i++){
    concatArray1 += String(array1[i]);
    }
  let concatArray2 = ''; 
    for (let i = 0; i < array2.length; i++){
    concatArray2 += String(array2[i]);
    }  
  return Number(concatArray1) + Number(concatArray2); 
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let arrayNumber = String(value); 
  let inverso = arrayNumber.split('').reverse().join(''); 

 return arrayNumber === inverso; 
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if(input === String('') || input === null || input === undefined) {
    return 'Required field';
  } else if (!Number(input)) {
    return 'Must be a number besides 0';
  } else {
    return ''; 
    }

}
