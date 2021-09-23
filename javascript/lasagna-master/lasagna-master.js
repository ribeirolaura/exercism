 //<reference path="./global.d.ts" />

// import { lastIndexOf } from "core-js/core/array";


/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus (remainingTime) {
    if (remainingTime === 0) {  
        return 'Lasagna is done.'; 
    } else if (remainingTime > 0){
        return 'Not done, please wait.'; 
    } else if (remainingTime === undefined) { 
        return 'You forgot to set the timer.'
    }
}

export function preparationTime (layers, timePerLayer = 2) {
    let numLayer = layers.length; 
    return timePerLayer*numLayer; 
}

export function quantities (layers) {
    let noodles = layers.filter(noodle => noodle === 'noodles');
    let qtdTotalNoodles = noodles.length * 50; 
    
    let sauce = layers.filter(sauces => sauces === 'sauce');
    let qtdTotalSauce = sauce.length * 0.2; 

    return {
        noodles: qtdTotalNoodles,
        sauce: qtdTotalSauce
    }
}

export function addSecretIngredient (friendsList, myList) {
let lastFriendList = friendsList[friendsList.length - 1]; //nao altera a array original
let newList = myList.push(lastFriendList);
}

export function scaleRecipe (recipe, portions) {
    for (const key in recipe) {
    recipe[key] = (recipe[key] / 2) * portions;  
    }
    return recipe;
}