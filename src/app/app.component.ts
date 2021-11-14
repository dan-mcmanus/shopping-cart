import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductService } from './services/product.service';
import { ShoppingBasketService } from './services/shopping-basket.service';
import { addProduct, removeProduct, retrieveProductsList } from './state/products.actions';
import { selectCollectionState, selectProductCollection, selectProducts } from './state/products.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'shopping-cart';

  products$ = this.store.select(selectProducts);
  productsCollection$ = this.store.select(selectProductCollection);

  onAdd(id: number) {
    this.store.dispatch(addProduct({ id }));
  }

  onRemove(id: number) {
    this.store.dispatch(removeProduct({ id }));
  }

  constructor(
    private productService: ProductService,
    private basketService: ShoppingBasketService,
    private store: Store
  ) { }

  ngOnInit() {
    this.productService.getAllProducts()
      .subscribe((products) => this.store.dispatch(retrieveProductsList({ products })))

    this.basketService.getBasketById(1).subscribe(x => console.log(x))
  }
  search(event: any) {
    console.log(event)
  }
}
