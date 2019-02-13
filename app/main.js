import CarControler from "./components/carControler.js";







class App {
  constructor() {
    this.controlers = {
      carControlers: new CarControler()
    }
  }
}

window.app = new App()