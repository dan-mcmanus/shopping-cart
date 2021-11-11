import { IProduct } from './product.interface';
export interface IShoppingBasket {
  products: IProduct[];
  isActive: boolean;
  preTaxTotal: number;
  totalWithTax: number;
}
