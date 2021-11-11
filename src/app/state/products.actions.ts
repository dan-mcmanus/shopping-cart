import { createAction, props } from '@ngrx/store';
import { IProduct } from '../shared/models/product.interface';


export const addProduct = createAction(
  '[Product List] Add Product',
  props<{ id: number }>()
);

export const removeProduct = createAction(
  '[Product Collection] Remove Product',
  props<{ id: number }>()
);
export const retrieveProductsList = createAction(
  '[Products List/API] Retrieve Products Success',
  props<{ products: ReadonlyArray<IProduct> }>()
)
