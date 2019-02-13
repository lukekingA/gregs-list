import Car from "../models/car.js";

//Private



let _cars = [
  new Car(10000, 'chevy', 'http://somthing.com', 'here is some description'),
  new Car(500, 'ford', 'http://somthingelse.com', 'here is some description')
]


//Public
export default class CarService {

  get Cars() {
    return _cars
  }

  addCar(rawCar) {
    let newCar = new Car(rawCar)
    _cars.push(newCar)
  }
  deleteCar() {

  }
}