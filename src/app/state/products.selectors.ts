import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IProduct } from '../shared/models/product.interface';

export const selectProducts = createFeatureSelector<ReadonlyArray<IProduct>>('products');

export const selectCollectionState = createFeatureSelector<ReadonlyArray<number>>('collection');

export const selectProductCollection = createSelector(
  selectProducts,
  selectCollectionState,
  (products, collection) => {
    return collection.map((id) => products.find((product) => product.id === id));
  }
);
