import { SaleCategoryEnum } from "../enums/saleCategory"
export const getSaleCategory = (types:SaleCategoryEnum) : string => {
    switch(types) {
        case SaleCategoryEnum.ForSale:
            return "For Sale";
        case SaleCategoryEnum.Auction:
            return "Auction";
        case SaleCategoryEnum.ForRent:
            return "For Rent";
    }
}