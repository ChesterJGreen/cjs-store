export default class Cart {

   constructor() {

      function FilterCart() {
         aSubtotal = []
         animals.forEach(subtotal => template += subtotal.Template)
         if (aSubtotal > 0)
            return aSubtotal;



      }


      //filter function on the animals array to return an array of ONLY the animals that have a "cart" value above 0, and then make a function that draws the template for cart-ed animals


   }


   //CART ITEMS:
   get Template() {
      return `
   <div class="col-12 p-1 border">
   <div class="row justify-content-between ml-1">
       <div class="col cart-img" style="background-image: url('${this.imgUrl}')"></div>
       <div class="col-3 d-flex align-items-end">
           <h3>${this.name}</h3>
       </div>
       <div class="col-3  d-flex align-items-end text-">
           <h6><em>CART: ${this.cart}</em></h6>
       </div>
       <div class="col-3 text-primary d-flex align-items-end">
           <h5>SUBTOTAL: ${this.subtotal}</h5>
       </div>
   </div>
</div>`
   }
}
//CART TOTAL:
/* <div class="col-12 text-right">
                <h3 class="px-3"><b>TOTAL: </b></h3>
            </div> */