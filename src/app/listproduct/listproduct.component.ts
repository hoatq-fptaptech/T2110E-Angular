import {Component} from "@angular/core";
import {ProductData} from "../../data/ProductData";

@Component({
  selector: "list-products",
  templateUrl:"./listproduct.component.html"
})
export class ListproductComponent{
   products: ProductData[] =  [
     {
       name:"San pham 1",
       image:"demo.png",
       price:1000
     },
     {
       name:"San pham 2",
       image:"demo.png",
       price:2000
     }
   ];
}
