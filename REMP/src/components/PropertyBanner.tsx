import { ListingCase } from '../interfaces/listing-case';
import { getPropertyType } from '../lib/get-property-type';
import { PropertyTypeEnum } from '../enums/propertyType';
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { RxRulerSquare } from "react-icons/rx";
import { getSaleCategory } from '../lib/get-sales-category';
import { SaleCategoryEnum } from '../enums/saleCategory';

const PropertyBanner = () => {
  const mockListing: Partial<ListingCase> = {
    propertyType: 2,
    saleCategory: 3,
    street: "93 Beach Road",
    city: "North Bondi",
    state: "NSW",
    postcode: 2026,
    bedrooms: 2,
    bathrooms: 2,
    garages: 2,
    floorArea: 2
  };

  const saleCategory = getSaleCategory(mockListing.saleCategory as SaleCategoryEnum);
  const propertyType = getPropertyType(mockListing.propertyType as PropertyTypeEnum);

  return (
    <div className="flex w-full">
      {/* Left: Image */}
      <div className="w-3/5">
        <img
          src="/drop.webp"
          alt="banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right: Info panel */}
      <div className="w-2/5 bg-[#2B0B06] text-white p-10 flex flex-col justify-center text-center">
        {/* Tag */}
        <div className="text-sm bg-amber-950 text-white px-3 py-1 rounded-md w-fit mx-auto mb-3">
          {propertyType} {saleCategory}
        </div>

        {/* Address */}
        <h1 className="text-3xl font-semibold mb-2">{mockListing.street}</h1>
        <p className="text-lg text-gray-300 mb-6">
          {mockListing.city}, {mockListing.state}, {mockListing.postcode}
        </p>

        {/* Icons row */}
        <div className="flex space-x-8 text-center">
          <div className="flex flex-col items-center">
            <IoBedOutline size={24} />
            <span>{mockListing.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <LuBath size={24} />
            <span>{mockListing.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <GiHomeGarage size={24} />
            <span>{mockListing.garages} Garages</span>
          </div>
          <div className="flex flex-col items-center">
            <RxRulerSquare size={24} />
            <span>{mockListing.floorArea} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
