import CarService from "./carservice.js";

//Public


let _cs = new CarService()


function draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  })
  document.getElementById('available-cars').innerHTML = template
}

//Private
export default class CarControler {
  constructor() {
    draw()
  }


  addCar(event) {
    event.preventDefault()
    let form = event.target
    let rawData = {
      title: form.title.value,
      price: form.price.value,
      description: form.description.value,
      img: form.img.value
    }
    _cs.addCar(rawData)
    form.reset()
    draw()
  }
  deleteCar() {

  }
}