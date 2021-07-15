import { generateId } from "../Utils/generateId.js"



export default class Animal {

   constructor(imgUrl, name, price, description, stock, id = generateId()) {
      this.imgUrl = imgUrl
      this.name = name
      this.price = price.toLocaleString("en-US", { style: 'currency', currency: 'USD' })
      this.description = description
      this.stock = stock
      this.id = id
   }

   get Template() {
      return `<div class="col-lg-3 col-md-6 mt-3">
      <div class="bg-light rounded shadow-light card p-2">
          <div class="product-img" style="background-image: url('${this.imgUrl}')"></div>
          <h4 class="text-center m-2"><b>${this.name} - ${this.price}</b></h4>
          <p>${this.description}</p>
          <div class="d-flex justify-content-between">
              <h5>STOCK: ${this.stock}</h5><button class="btn btn-primary">ADD</button>
          </div>
      </div>
  </div>`
   }
}