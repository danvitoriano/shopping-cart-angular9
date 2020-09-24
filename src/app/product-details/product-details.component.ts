import { Component } from "@angular/core";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"],
})
export class ProductDetailsComponent {
  product;

  // serviço
  addToCart(product) {
    window.alert("Your product has been added to the cart!" + product);
  }
}
