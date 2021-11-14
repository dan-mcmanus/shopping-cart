import { InMemoryDbService } from 'angular-in-memory-web-api';
import { GoodsType, TaxStatus, TaxType } from '../enums/tax-types.enum';
import { IShoppingBasket } from './shopping-basket.interface';

export interface IProduct {
  id: number;
  name: string;
  retailPrice: number;
  priceWithTax: number | null;
  salesTaxPercentage?: number;
  isImported?: boolean;
  taxStatus?: TaxStatus,
  taxType: TaxType;
  goodsType: GoodsType;


  // private _taxAmount : number;
  // public get taxAmount() : number {
  //   if (this.taxType == TaxType.TaxExempt) {
  //     this._taxAmount = 0;
  //   }
  //   if (this.taxType === TaxType.BasicSalesTax) {
  //     this._taxAmount = 10;
  //   }
  //   if (this.taxType === TaxType.ImportDutyTax) {
  //     this._taxAmount += 5;
  //   }

  //   return this._taxAmount;
  // }
  // public set taxAmount(value : number) {
  //   this._taxAmount = value;
  // }


  // constructor(name: string, price: number, salesTaxPercentage: number, isTaxExempt: boolean, isImported: boolean, taxType: TaxType) {
  //   this.name = name;
  //   this.salesTaxPercentage = salesTaxPercentage;
  //   this.isTaxExempt = isTaxExempt;
  //   this.isImported = isImported;
  // }

  // build(): Product[] {
  //   const skittles = new Product('16lb bag of Skittles', 16.00, 0, true, false, TaxType.TaxExempt)
  //   const Walkman = new Product('Walkman', 99.99, 0, true, false, TaxType.BasicSalesTax )
  //   const popcorn = new Product('bag of microwave Popcorn', 0.99, 0, true, false, TaxType);
  //   const coffee = new Product('imported bag of Vanilla-Hazelnut Coffee', 11.00, this._taxAmount, false, true)
  // }
}


export class BasketData implements InMemoryDbService {
  createDb() {
    const baskets: IShoppingBasket[] = [
      {
        id: 1,
        products: [
          {
            id: 1,
            name: '16lb bag of Skittles',
            retailPrice: 16.00,
            priceWithTax: null,
            taxType: TaxType.TaxExempt,
            goodsType: GoodsType.Candy
          },
          {
            id: 2,
            name: 'Walkman',
            retailPrice: 99.99,
            priceWithTax: null,
            taxType: TaxType.BasicSalesTax,
            goodsType: GoodsType.Electronics
          },
          {
            id: 3,
            name: 'bag of microwave Popcorn',
            retailPrice: 0.99,
            priceWithTax: null,
            taxType: TaxType.TaxExempt,
            goodsType: GoodsType.Popcorn
          }
        ]
      },
      {
        id: 2,
        products: [
          {
            id: 4,
            name: 'bag of Vanilla-Hazelnut Coffee',
            retailPrice: 11.00,
            priceWithTax: null,
            isImported: true,
            taxType: TaxType.ImportDutyTax,
            goodsType: GoodsType.Candy
          },
          {
            id: 5,
            name: 'Vespa',
            retailPrice: 16.00,
            priceWithTax: null,
            isImported: true,
            taxType: TaxType.ImportDutyTax,
            goodsType: GoodsType.Vehicle
        }
        ]
      },
      {
        id: 3,
        products: [
          {
            id: 6,
            name: 'crate of Almond Snickers',
            retailPrice: 75.99,
            priceWithTax: null,
            isImported: true,
            taxType: TaxType.ImportDutyTax,
            goodsType: GoodsType.Candy
        },
        {
          id: 7,
          name: 'Bottle of Wine',
          retailPrice: 10.00,
          priceWithTax: null,
          isImported: true,
          taxType: TaxType.ImportDutyTax,
          goodsType: GoodsType.Alcohol
      },
      {
        id: 8,
        name: '300# bag of Fair-Trade Coffee',
        retailPrice: 997.99,
        priceWithTax: null,
        isImported: false,
        taxType: TaxType.TaxExempt,
        goodsType: GoodsType.Coffee
      },
        ]
      }
    ];

    return { baskets }
  }
}
export class ProductData implements InMemoryDbService {
/*
  id: number;
  name: string;
  retailPrice: number;
  priceWithTax?: number;
  salesTaxPercentage?: number;
  isImported?: boolean;
  taxType: TaxType;
  goodsType: GoodsType;
*/

    createDb() {
        const products: IProduct[] = [
            {
                id: 1,
                name: '16lb bag of Skittles',
                retailPrice: 16.00,
                priceWithTax: null,
                taxType: TaxType.TaxExempt,
                goodsType: GoodsType.Candy
            },
            {
                id: 2,
                name: 'Walkman',
                retailPrice: 99.99,
                priceWithTax: null,
                taxType: TaxType.BasicSalesTax,
                goodsType: GoodsType.Electronics
            },
            {
                id: 3,
                name: 'bag of microwave Popcorn',
                retailPrice: 0.99,
                priceWithTax: null,
                taxType: TaxType.TaxExempt,
                goodsType: GoodsType.Popcorn
            },
            {
                id: 4,
                name: 'bag of Vanilla-Hazelnut Coffee',
                retailPrice: 11.00,
                priceWithTax: null,
                isImported: true,
                taxType: TaxType.ImportDutyTax,
                goodsType: GoodsType.Candy
            },
            {
                id: 5,
                name: 'Vespa',
                retailPrice: 16.00,
                priceWithTax: null,
                isImported: true,
                taxType: TaxType.ImportDutyTax,
                goodsType: GoodsType.Vehicle
            },
            {
              id: 6,
              name: 'crate of Almond Snickers',
              retailPrice: 75.99,
              priceWithTax: null,
              isImported: true,
              taxType: TaxType.ImportDutyTax,
              goodsType: GoodsType.Candy
          },
          {
            id: 7,
            name: 'Bottle of Wine',
            retailPrice: 10.00,
            priceWithTax: null,
            isImported: true,
            taxType: TaxType.ImportDutyTax,
            goodsType: GoodsType.Alcohol
        },
        {
          id: 8,
          name: '300# bag of Fair-Trade Coffee',
          retailPrice: 997.99,
          priceWithTax: null,
          isImported: false,
          taxType: TaxType.TaxExempt,
          goodsType: GoodsType.Coffee
      },
        ];
        return { products };
    }
}
