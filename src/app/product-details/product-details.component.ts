import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
// add cart service
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product;

  // metodo onInit
  ngOnInit() {
    //  subscribe to route params and fetch the product based on the productId  
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

  // serviço
  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }

  // construtor
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

}