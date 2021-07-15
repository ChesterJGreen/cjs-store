import AnimalsController from "./Controllers/AnimalsController.js";
import CartController from "./Controllers/CartController.js";

class App {

  animalsController = new AnimalsController()
  cartController = new CartController()
}

window["app"] = new App();
