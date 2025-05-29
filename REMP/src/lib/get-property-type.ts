import { PropertyTypeEnum } from "../enums/propertyType"
export const getPropertyType = (types:PropertyTypeEnum) : string => {
    switch(types) {
        case PropertyTypeEnum.House:
            return "House";
        case PropertyTypeEnum.Townhouse:
            return "Townhouse";
        case PropertyTypeEnum.Unit:
            return "Unit";
        case PropertyTypeEnum.Villa:
            return "Villa";
        case PropertyTypeEnum.Others:
            return "Others";
    }
}