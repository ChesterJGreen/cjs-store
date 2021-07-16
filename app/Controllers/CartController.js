<<<<<<< HEAD


=======
import { ProxyState } from "../AppState.js";
import { animalsService } from "../Services/AnimalsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
>>>>>>> 7aa59f17ccc53b78f2adfcd1be9c7d85e105af99
//The next step is to have this iterate over the "animals" object in AppState, determine if any of them have a "cart" value higher than 0, and then drawing the cart based on the values of that object.

export default class CartController {
   _draw() {
      if (document.getElementById('cart').hidden) {
         document.getElementById('cart').hidden = false

      } else {
         document.getElementById('cart').hidden = true

      }
   }
}
