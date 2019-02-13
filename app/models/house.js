let id = 0

export default class House {
  constructor(data) {
    this.id = id;
    this.price = data.price;
    this.title = data.title;
    this.img = data.img;
    this.description = data.description || 'no description';
    id++
  }

  getTemplate() {
    return `
   <div class="card col-3">
        <img class="card-img-top" src=${this.img} alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">${this.title}</h4>
          <p class="card-text">
            ${this.description} -- ${this.price}
          </p>
          <button onclick=" app.controlers.carControlers.deleteCar(${this.id})">delete</button>
        </div>
      </div>`
  }
}