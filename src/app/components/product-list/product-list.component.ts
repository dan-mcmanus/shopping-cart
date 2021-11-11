import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.interface';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input() errorMessage: string;
  @Input() products: ReadonlyArray<IProduct> = [];
  @Input() selectedProduct: IProduct;
  @Output() add = new EventEmitter<number>();
  @Output() productWasSelected = new EventEmitter<number>();

  productSelected(product: IProduct): void {
    this.productWasSelected.emit(product.id);
    this.selectedProduct = product;
  }
}
