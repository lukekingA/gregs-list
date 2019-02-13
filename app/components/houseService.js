import House from "../models/house.js";


//Private

let _state = {
  houses: [
    new House({
      price: 100000,
      title: 'A real fixer-upper',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuepNRSAOaVd4eDB38kn8PTc2pP8qo3xh9WAY4vwsEsUlT3Wq2g',
      description: 'There are many things about this house that you should be aware of, but I\'m not tellin'
    }),
    new House({
      price: 60000,
      title: 'Country Home',
      img: ' https://www.porterdavis.com.au/~/media/homes/verona/22/facades/verona-island-facade-classic.jpg?w=582&amp;h=320&amp;crop=1',
      description:
    })
  ]
}

let _subscribers = {
  houses: []
}

function setState(dataName, value) {
  _state[dataName] = value
  _subscribers[dataName].forEach(fn => fn())
}

//Public
export default class HouseService {
  addSubscriber(dataName, fn) {
    _subscribers[dataName].push(fn)
  }

  get House() {
    return _state.houses
  }

  addHouse(rawHouse) {
    let newHouse = new House(rawHouse)
    _state.houses.push(newHouse)
    setState('houses', _state.houses)
  }

  deleteHouse(id) {
    let houseToDelete = _state.houses.find(house => house.id == id)
    let indexToRemove = _state.houses.indexOf(houseToDelete)
    _state.houses.splice(indexToRemove, 1)
  }
}