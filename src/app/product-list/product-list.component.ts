import { Component, OnInit } from '@angular/core';
import { ProductService} from "../product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products;
  constructor( private productService: ProductService) {
    this.products = productService.products;
   }

  ngOnInit() {
  }
  share(){
    alert("El producto esta agotado");
  }
  onNotify(){
    alert("Notificacion de producto");
  }

}
