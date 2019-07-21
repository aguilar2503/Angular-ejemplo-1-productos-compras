import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

import { CartService } from "../cart.service";
import { ProductService} from "../product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public products;
  public product;
  constructor(private route: ActivatedRoute, private cartService: CartService, 
    private prodService: ProductService) { 
    this.products = prodService.products;
   }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.product = this.products[+params.get('productId')];
      }
    );
  }
  addToCart(product){
    this.cartService.addToCart(product);
    alert("se añadio un producto al carrito de compras"+JSON.stringify(this.cartService.getItems()));
  }

}
