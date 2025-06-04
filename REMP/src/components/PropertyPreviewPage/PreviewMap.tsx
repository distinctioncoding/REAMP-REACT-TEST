import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface PreviewMapProps {
  title: string;
  lat: number;
  lon: number;
}

const PreviewMap: React.FC<PreviewMapProps> = ({ title, lat, lon }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY || 'FAKE_KEY',
      version: 'weekly',
    });

    loader.load().then(() => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: lat, lng: lon },
        zoom: 14,
      });

      new google.maps.Marker({
        position: { lat: lat, lng: lon },
        map,
        title: 'Mock Location',
      });
    });
  }, [lat, lon]);

  return (
    <div className="bg-white py-4 border-b-8 border-gray-100">
      <h2 className="text-center text-2xl font-bold mt-4 mb-1">{title}</h2>
      <div className="flex justify-center px-2 py-5">
        <div
          ref={mapRef}
          className="w-full max-w-[800px] h-[300px] rounded shadow"
        />
      </div>
    </div>
  );
};

export default PreviewMap;

