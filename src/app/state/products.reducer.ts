import { createReducer, on } from '@ngrx/store';

import { retrieveProductsList } from './products.actions';
import { IProduct } from '../shared/models/product.interface';

export const initialState: ReadonlyArray<IProduct> = [];

export const productsReducer = createReducer(
  initialState,
  on(retrieveProductsList, (_state, { products }) => products )
)
