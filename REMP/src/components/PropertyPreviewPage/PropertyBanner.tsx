import { ListingCase } from '../../interfaces/listing-case';
import { getPropertyType } from '../../lib/get-property-type';
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { GiHomeGarage } from "react-icons/gi";
import { RxRulerSquare } from "react-icons/rx";
import { getSaleCategory } from '../../lib/get-sales-category';
import { SaleCategoryEnum } from '../../enums/saleCategory';
import { PropertyTypeEnum } from '../../enums/propertyType';

interface Props {
  listing: Partial<ListingCase>; // 使用 Partial 兼容非必填字段
}
const PropertyBanner = ({listing} : Props) => {

  const saleCategory = getSaleCategory(listing.saleCategory as SaleCategoryEnum);
  const propertyType = getPropertyType(listing.propertyType as PropertyTypeEnum);

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
      <div className="w-2/5 bg-[#2B0B06] text-white p-10 flex flex-col justify-center text-center space-y-8">
        {/* Tag */}
        <div className="text-sm bg-amber-950 text-white px-3 py-1 rounded-md w-fit mx-auto mb-10">
          {propertyType} {saleCategory}
        </div>

        {/* Address */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{listing.street}</h1>
          <p className="text-lg text-gray-300 mb-6">
            {listing.city}, {listing.state}, {listing.postcode}
          </p>
        </div>

        <div className='font-bold'>——</div>


        {/* Icons row */}
        <div className="flex space-x-8 justify-center text-sm">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border text-white flex items-center justify-center">
              <IoBedOutline size={20}/>
            </div>            
            <span>{listing.bedrooms} Beds</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border text-white flex items-center justify-center">
              <LuBath size={20} />
            </div>             
            <span>{listing.bathrooms} Baths</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border text-white flex items-center justify-center">
              <GiHomeGarage size={20} />
            </div>  
            <span>{listing.garages} Garages</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full border text-white flex items-center justify-center">
              <RxRulerSquare size={20} />
            </div>
            <span>{listing.floorArea} m²</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyBanner;
