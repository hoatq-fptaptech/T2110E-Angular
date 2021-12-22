import {Component,Input} from "@angular/core";
import {ProductData} from "../../data/ProductData";


@Component({
  selector:'product',
  templateUrl:"./product.component.html"
})
export class ProductComponent{
    @Input() product!: ProductData ;
}
