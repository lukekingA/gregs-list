import CarService from "./carservice.js";


//Private


let _cs = new CarService()


function draw() {
  let cars = _cs.Cars
  let template = ''
  cars.forEach(car => {
    template += car.getTemplate()
  })
  document.getElementById('available-cars').innerHTML = template
}

//Public
export default class CarControler {
  constructor() {
    _cs.addSubscriber('cars', draw)
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

  }
  deleteCar(id) {
    _cs.deleteCar(id)

  }
}