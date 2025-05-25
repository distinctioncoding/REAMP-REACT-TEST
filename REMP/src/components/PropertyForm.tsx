import React, { useState } from 'react';
import { PropertyData } from "../types/Property";
import { createListing } from "../services/PropertyService";
import { PropertyTypeOptions } from "../enums/propertyType";
import { SaleCategoryOptions } from "../enums/saleCategory";
import { FaBed, FaBath, FaCar, FaRulerCombined } from 'react-icons/fa';
import { FiPlus, FiMinus } from 'react-icons/fi';

import GooglePlacesAutocomplete from './GooglePlacesAutocomplete';

type PropertyFormProps = {
onClose: () => void;
};

const PropertyForm: React.FC<PropertyFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<PropertyData>({
    title: '',
    propertyType: 1,
    saleCategory: 1,
    street: '',
    city: '',
    state: '',
    postcode: 0,
    longitude: 0,
    latitude: 0,
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    garages: 0,
    floorArea: 0,
  });

const handleChange = <K extends keyof PropertyData>(key: K, value: PropertyData[K]) => {
setFormData({ ...formData, [key]: value });
};

const [streetInput, setStreetInput] = useState('');

type NumericKeys = 'bedrooms' | 'bathrooms' | 'garages' | 'floorArea';

type BasicItem = {
  key: NumericKeys;
  label: string;
  icon: React.ReactNode;
};

const handlePlaceSelect = (address: any) => {
  console.log("📍 Selected Address:", address);
  setStreetInput(address.street);

  handleChange('street', address.street);
  handleChange('city', address.city);
  handleChange('state', address.state);
  handleChange('postcode', Number(address.postcode));
  handleChange('latitude', address.latitude);
  handleChange('longitude', address.longitude);
};

const basicItems: BasicItem[] = [
  { key: 'bedrooms', label: 'Bed', icon: <FaBed /> },
  { key: 'bathrooms', label: 'Bath', icon: <FaBath /> },
  { key: 'garages', label: 'Car', icon: <FaCar /> },
  { key: 'floorArea', label: 'Area', icon: <FaRulerCombined /> },
];

const handleSave = async () => {
  try {
    const result = await createListing(formData);
    console.log('Listing created successfully:', result);
    onClose();
  } catch (error) {
    console.error('Failed to create listing:', error);
  }
};

return (
  <form className="space-y-6 text-gray-800 dark:text-white">
    {/* Property Title */}
    <div>
      <label className="block font-semibold mb-4">Property Title</label>
      <input
        type="text"
        value={formData.title}
        onChange={(e) => handleChange('title', e.target.value)}
        placeholder="Enter property title"
        className="w-full border px-3 h-14 rounded-lg"
      />
    </div>

    <div className="border-b border-gray-200 pb-2 mb-8">
      {/* Section Content */}
    </div>

    {/* Property Status */}
    <div>
      <label className="block font-semibold mb-4">Property Status</label>
      <div className="flex gap-12">
        {SaleCategoryOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="saleCategory"
              value={option.value}
              checked={formData.saleCategory === option.value}
              onChange={(e) => handleChange('saleCategory', Number(e.target.value))}
              className="peer hidden"
            />
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition
              ${formData.saleCategory === option.value
                ? 'bg-gray-900 text-white border border-gray-900'
                : 'bg-white border border-gray-400'}
            `}>
              {formData.saleCategory === option.value && '✔'}
            </div>
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="border-b border-gray-200 pb-2 mb-8">
      {/* Section Content */}
    </div>

    {/* Property Type */}
    <div>
      <label className="block font-semibold mb-4">Property Type</label>
      <div className="flex flex-wrap gap-12">
        {PropertyTypeOptions.map((option) => (
          <label key={option.value} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="propertyType"
              value={option.value}
              checked={formData.propertyType === option.value}
              onChange={(e) => handleChange('propertyType', Number(e.target.value))}
              className="peer hidden"
            />
            <div className={`w-6 h-6 rounded-lg flex items-center justify-center transition
              ${formData.propertyType === option.value
                ? 'bg-gray-900 text-white border border-gray-900'
                : 'bg-white border border-gray-400'}
            `}>
              {formData.propertyType === option.value && '✔'}
            </div>
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>

    <div className="border-b border-gray-200 pb-2 mb-8">
      {/* Section Content */}
    </div>

    {/* Address */}
    <div className="mb-6">
      <label className="block font-semibold mb-4">Address</label>
      <GooglePlacesAutocomplete
        value={streetInput}
        setStreet={setStreetInput}
        onPlaceSelect={handlePlaceSelect}
      />

    </div>

    {/* City, State, Postcode, Price */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block font-semibold mb-1 text-gray-600">City</label>
        <input
          type="text"
          value={formData.city}
          onChange={(e) => handleChange('city', e.target.value)}
          placeholder="Enter city"
          className="w-full border px-3 h-14 rounded-lg"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-gray-600">State</label>
        <input
          type="text"
          value={formData.state}
          onChange={(e) => handleChange('state', e.target.value)}
          placeholder="Enter state"
          className="w-full border px-3 h-14 rounded-lg"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-gray-600">Postcode</label>
        <input
          type="number"
          value={formData.postcode === 0 ? '' : formData.postcode}
          onChange={(e) => handleChange('postcode', Number(e.target.value))}
          placeholder="Enter postcode"
          className="w-full border px-3 h-14 rounded-lg"
        />
      </div>

      <div>
        <label className="block font-semibold mb-1 text-gray-600">Price</label>
        <input
          type="number"
          value={formData.price === 0 ? '' : formData.price}
          onChange={(e) => handleChange('price', Number(e.target.value))}
          placeholder="Enter price"
          className="w-full border px-3 h-14 rounded-lg"
        />
      </div>
    </div>

    <div className="border-b border-gray-200 pb-2 mb-8">
      {/* Section Content */}
    </div>

    {/* Basic Info */}
    <div>
      <label className="block font-semibold mb-4">Basic Information</label>
      <div className="flex flex-wrap gap-4">
        {basicItems.map((item) => (
          <div key={item.key} className="bg-gray-100 rounded p-3 flex items-center justify-between" style={{ width: '250px', height: '80px' }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-400">{item.icon}</div>
              <span>{item.label}</span>
            </div>

            {item.key === 'floorArea' ? (
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={formData[item.key] as number}
                  onChange={(e) => handleChange(item.key, Number(e.target.value))}
                  className="w-16 border rounded text-center"
                />
                <span>m²</span>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="w-8 h-8 border rounded flex items-center justify-center"
                  onClick={() =>
                    handleChange(item.key, Math.max(0, (formData[item.key] as number) - 1))
                  }
                >
                  <FiMinus />
                </button>

                <span className="min-w-[20px] text-center">{formData[item.key]}</span>

                <button
                  type="button"
                  className="w-8 h-8 border rounded flex items-center justify-center"
                  onClick={() =>
                    handleChange(item.key, (formData[item.key] as number) + 1)
                  }
                >
                  <FiPlus />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>

    {/* Footer Buttons */}
    <div className="flex justify-end gap-4 p-5 border-t border-gray-200 dark:border-gray-700">
      <button
        type="button"
        onClick={onClose}
        className="flex items-center justify-center h-[44px] py-[14px] px-[36px] rounded-full border border-gray-500 text-gray-700 hover:bg-gray-100 gap-[10px]"
        style={{ width: '122px' }}
      >
        Cancel
      </button>

      <button
        type="button"
        onClick={handleSave}
        className="flex items-center justify-center h-[44px] py-[14px] px-[36px] rounded-full bg-blue-500 text-white hover:bg-blue-600 gap-[10px]"
        style={{ width: '122px' }}
      >
        Save
      </button>
    </div>
  </form>
  );
};

export default PropertyForm;
