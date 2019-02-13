import Car from "../models/car.js";


//Private

let _state = {
  cars: [new Car({
      price: 10000,
      title: 'chevy',
      img: 'https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicle-groups/trucks/01-images/2018-trucks-ld.jpg?imwidth=491',
      description: 'here is some description'
    }),
    new Car({
      price: 500,
      title: 'ford',
      img: 'https://www.clarkscarcare.com/wp-content/uploads/2017/08/shopping-cta-ford.jpg',
      description: 'here is some description'
    })
  ],

}

let _subscribers = {
  cars: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn())
}

//Public
export default class CarService {

  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get Cars() {
    return _state.cars
  }

  addCar(rawCar) {
    let newCar = new Car(rawCar)
    _state.car.push(newCar)
    setState('cars', _state.cars)
  }
  deleteCar(id) {
    let carToDelete = _state.cars.find(car => car.id == id)
    let indexToRemove = _state.cars.indexOf(carToDelete)
    _state.cars.splice(indexToRemove, 1)
    setState('cars', _state.cars)
  }
}