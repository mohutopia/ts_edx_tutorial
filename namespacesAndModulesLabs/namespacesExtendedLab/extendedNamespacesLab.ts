/// <reference path="extendedNamespacesLab_part2.ts"/>

namespace ArrayUtilities {
 export function reverseArray(array:number[]){
  return array.slice(0).reverse();
 }

 export function lastItemOfArray(array:number[]){
  return array.slice(0).pop();
 }
}