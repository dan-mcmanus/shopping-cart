import { IProduct } from './product.interface';
export interface IShoppingBasket {
  id: number;
  products: IProduct[];
  isActive?: boolean;
  preTaxTotal?: number;
  totalWithTax?: number;
}
