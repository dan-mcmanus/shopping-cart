export enum TaxType {
  TaxExempt,
  BasicSalesTax,
  ImportDutyTax
}

export enum GoodsType {
  Candy,
  Popcorn,
  Coffee,
  Vehicle,
  Alcohol,
  Electronics
}

// type Import = {
//   status: 'Import'
// }

// type Export = {
//   status: 'Export'
// }

export type TaxStatus = 'Import' | 'Export' | 'Exempt';
