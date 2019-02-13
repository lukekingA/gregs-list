import HouseService from "./houseService.js";

let _hs = new HouseService

function draw() {
  let houses = _hs.House
  let template = ''
  houses.forEach(house => template += house.getTemplate())
  document.getElementById('available-houses').innerHTML = template
}

//Public

export default class HouseControler {
  constructor() {
    _hs.addSubscriber('houses', draw)
    draw()
  }

  addHouse(event) {
    event.preventDefault()
    let form = event.target
    let rawData = {
      title: form.title.value,
      price: form.price.value,
      description: form.price.value,
      img: form.img.value
    }
    _hs.addHouse(rawData)
    form.reset()
  }

  deleteHouse(id) {
    _hs.deleteHouse(id)
  }
}