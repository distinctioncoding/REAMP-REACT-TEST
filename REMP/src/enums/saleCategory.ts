export const SaleCategory = {
    ForSale: 1,
    Auction: 2,
    ForRent: 3,
  };
  
export const SaleCategoryOptions = [
  { label: "For Sale", value: SaleCategory.ForSale },
  { label: "Auction", value: SaleCategory.Auction },
  { label: "For Rent", value: SaleCategory.ForRent },
];

export enum SaleCategoryEnum {
    ForSale = 1,
    Auction = 2,
    ForRent = 3,
};