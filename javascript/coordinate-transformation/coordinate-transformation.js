// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
//forma 1
// export function translate2d(dx, dy) {
//   return (x, y) => [x + dx, y + dy ]
// }

// FORMA 2 CLOSURE 
export function translate2d(dx, dy) {

  const closure = function (x, y) {
    return [x + dx, y + dy];     
  }
return closure;
}

// FORMA 3 CLOSURE 
//export function translate2d(dx, dy) {
//   function moveCoordinatesRight (x, y) {
//     return [x + dx, y + dy];
//   };
//   return moveCoordinatesRight;
// }

//forma 4 

// export function translate2d (dx, dy){
//   const moveCoordinatesRight = (x, y) => [x+dx, y+dy]; 
//   return moveCoordinatesRight;
//  }
  


/**
 * Create a function which returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
  return (x, y) => [sx*x, sy*y];
}

/**
 * Create a composition function which returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
  return function (x, y) {
    let [x1, y1] = f(x, y); 
    return g(x1, y1); 
  }

}

/**
 * Return a function which memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes and x, y argument, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
  let xAntigo, yAntigo = undefined; 
  let resultadoAntigo = undefined; 

  return function (x, y) {
    if (x === xAntigo && y === yAntigo) {
      return resultadoAntigo; 
    } else {
      xAntigo = x; 
      yAntigo = y; 
      resultadoAntigo = f(x, y); 

      return resultadoAntigo; 
    }
  }
  
}
