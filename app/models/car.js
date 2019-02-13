export default class Car {
  constructor(data) {
    this.price = data.price;
    this.title = data.title;
    this.img = data.img;
    this.description = data.description || 'no description';

  }

  getTemplate() {
    return `
   <div class="card col-3">
        <img class="card-img-top" src=${this.img} alt="Card image cap">
        <div class="card-body">
          <h4 class="card-title">Car title</h4>
          <p class="card-text">
            car description -- price
          </p>
          <a href="#!" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
  }
}