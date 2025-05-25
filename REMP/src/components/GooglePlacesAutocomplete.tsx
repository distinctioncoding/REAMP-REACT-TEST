import React, { useEffect, useRef, useState } from 'react';
import { Address } from '../types/Address';

interface AutocompleteOptions {
  types?: string[];
  componentRestrictions?: { country: string };
  fields?: string[];
  bounds?: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
  strictBounds?: boolean;
}

declare global {
  interface Window {
    google: {
      maps: {
        importLibrary: (library: string) => Promise<any>;
        places: {
          Autocomplete: new (
            input: HTMLInputElement,
            options?: AutocompleteOptions
          ) => any;
          PlaceAutocompleteElement: new () => HTMLInputElement & {
            place: any;
            toPlace: () => Promise<any>;
            componentRestrictions: { country: string };
            fields: string[];
            strictBounds: boolean;
            bounds: { north: number; south: number; east: number; west: number; };
          };
        };
        LatLngBounds: new (sw: any, ne: any) => any;
      };
    };
  }
}

interface GooglePlacesAutocompleteProps {
  country?: string;
  types?: string[];
  onPlaceSelect?: (address: Address) => void;
  value: string;
  setStreet: React.Dispatch<React.SetStateAction<string>>;
}

const GooglePlacesAutocomplete: React.FC<GooglePlacesAutocompleteProps> = ({
  country = 'au',
  types = ['establishment', 'geocode'],
  onPlaceSelect,
  value,
  setStreet,
}) => {
  const autocompleteContainerRef = useRef<HTMLDivElement>(null);
  const placeAutocompleteElementRef = useRef<any>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const loadGoogleMaps = async () => {
      try {
        await window.google.maps.importLibrary("places");
        setIsLoaded(true);
        setError(null);
      } catch (error) {
        console.error("Failed to load Google Maps:", error);
        setError("Failed to load Google Maps");
      }
    };

    const existingScript = document.querySelector('script[src^="https://maps.googleapis.com/maps/api/js"]');
    if (!window.google || !window.google.maps || !window.google.maps.importLibrary) {
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&language=en&v=beta`;
        script.async = true;
        script.defer = true;
        script.onload = () => loadGoogleMaps();
        script.onerror = () => setError("Failed to load Google Maps");
        document.head.appendChild(script);
      } else {
        existingScript.addEventListener('load', loadGoogleMaps);
      }
    } else {
      loadGoogleMaps();
    }
  }, [apiKey]);

  const extractAddressComponent = (components: any[] | undefined, type: string): string => {
    if (!components) return '';
    const comp = components.find(c => c.types.includes(type));
    return comp ? comp.long_name : '';
  };

  useEffect(() => {
    if (!isLoaded || !autocompleteContainerRef.current) return;

    try {
      const placeAutocompleteElement = document.createElement('gmp-place-autocomplete') as HTMLInputElement & {
        types?: string[];
        fields?: string[];
        includedRegionCodes?: string[];
        componentRestrictions?: { country: string };
        bounds?: { north: number; south: number; east: number; west: number };
        strictBounds?: boolean;
        value?: string;
      };

      placeAutocompleteElementRef.current = placeAutocompleteElement;

      placeAutocompleteElement.includedRegionCodes = [country];

      placeAutocompleteElement.fields = [
        'address_components',
        'formatted_address',
        'geometry',
        'name',
        'place_id',
        'displayName',
        'location',
      ];

      while (autocompleteContainerRef.current.firstChild) {
        autocompleteContainerRef.current.removeChild(autocompleteContainerRef.current.firstChild);
      }
      autocompleteContainerRef.current.appendChild(placeAutocompleteElement);

      const handlePlaceSelect = (event: any) => {
        try {
          const result = event.detail.place;
          if (!result || !result.address_components || !result.geometry?.location) return;

          const streetNumber = extractAddressComponent(result.address_components, 'street_number');
          const streetName = extractAddressComponent(result.address_components, 'route');
          const city = extractAddressComponent(result.address_components, 'locality');
          const state = extractAddressComponent(result.address_components, 'administrative_area_level_1');
          const postcode = extractAddressComponent(result.address_components, 'postal_code');

          const address: Address = {
            street: `${streetNumber} ${streetName}`.trim(),
            city,
            state,
            postcode,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng,
          };

          if (onPlaceSelect) {
            onPlaceSelect(address);
          }
          setStreet(address.street);
        } catch (err) {
          console.error("Failed to handle selected place:", err);
        }
      };

      placeAutocompleteElement.addEventListener('gmp-select', handlePlaceSelect);

      return () => {
        placeAutocompleteElement.removeEventListener('gmp-select', handlePlaceSelect);
        if (autocompleteContainerRef.current?.contains(placeAutocompleteElement)) {
          autocompleteContainerRef.current.removeChild(placeAutocompleteElement);
        }
      };
    } catch (e) {
      console.error("Initialization failed:", e);
      setError("Failed to initialize Google component");
    }
  }, [isLoaded, country, types, onPlaceSelect, setStreet]);

  useEffect(() => {
    if (placeAutocompleteElementRef.current && value !== placeAutocompleteElementRef.current.value) {
      placeAutocompleteElementRef.current.value = value;
    }
  }, [value]);

  return (
    <div className="w-full">
      <div className="mb-4">
        {error && (
          <div className="p-2 bg-red-50 text-red-600 rounded-md mb-2 text-sm">
            {error}
          </div>
        )}
        <div
          ref={autocompleteContainerRef}
          className="pl-4 w-full border border-gray-300 bg-transparent rounded-md py-2 px-3 text-gray-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-[#50B3E6]"
        />
      </div>
    </div>
  );
};

export default GooglePlacesAutocomplete;
