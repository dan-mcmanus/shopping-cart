import { createReducer, on } from '@ngrx/store';
import { addProduct, removeProduct } from './products.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeProduct, (state, { id }) => state.filter((productId) => productId !== id)),
  on(addProduct, (state, {id}) => {
    if (state.indexOf(id) > -1) {
      return state;
    }

    return [...state, id];
  })
)
