import { IProduct } from "../shared/models/product.interface";

export interface AppState {
  products: ReadonlyArray<IProduct>;
  collection: ReadonlyArray<number>;
}
