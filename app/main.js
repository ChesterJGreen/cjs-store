import AnimalsController from "./Controllers/AnimalsController.js";

class App {

  animalsController = new AnimalsController()
}

window["app"] = new App();
