import { ProxyState } from "../AppState.js";


function _draw() {
   let template = ''
   let animals = ProxyState.animals
   animals.forEach(animal => template += animal.Template)
   document.getElementById('animals').innerHTML = template
}

export default class AnimalsController {
   constructor() {
      _draw()
   }
}