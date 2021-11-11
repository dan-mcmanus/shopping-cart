import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/shared/models/product.interface';

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.sass']
})
export class ProductCollectionComponent {

  @Input() products: ReadonlyArray<IProduct> = [];

  @Output() remove = new EventEmitter<number>();

}
