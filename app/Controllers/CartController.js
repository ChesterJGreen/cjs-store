

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
