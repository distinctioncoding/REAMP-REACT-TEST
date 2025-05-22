    //     useEffect(() => {
    //     const fetchAssets = async () => {
    //       try {
    //         if (!listingId) return;
    //         const data = await getListingAssetsById(listingId); // 🔁 real API
    //         setAssets(data);
    //       } catch (err) {
    //         console.error('Failed to fetch assets:', err);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    
    //     fetchAssets();
    //   }, [listingId]);
    import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ListingAssetStatus } from '../interfaces/litsting-assets';
import { BsCamera, BsCameraVideo, BsHouse } from 'react-icons/bs';
import { FaVrCardboard } from 'react-icons/fa';
import { HiOutlineDocumentSearch } from 'react-icons/hi';

const PropertyDetail = () => {
  const { listingId } = useParams();
  const [assets, setAssets] = useState<ListingAssetStatus | null>(null);

  useEffect(() => {
    // Mock data for now
    const mockAssets: ListingAssetStatus = {
      photographyW: true,
      photographyP: true,
      floorPlan: true,
      videography: false,
      vrTour: false,
    };

    setTimeout(() => setAssets(mockAssets), 500);
  }, [listingId]);

  const assetBlocks = [
    { label: 'Photography-W', key: 'photographyW', icon: <BsCamera className="text-blue-600 text-2xl" /> },
    { label: 'Photography-P', key: 'photographyP', icon: <BsCamera className="text-orange-500 text-2xl" /> },
    { label: 'Floor Plan', key: 'floorPlan', icon: <HiOutlineDocumentSearch className="text-green-600 text-2xl" /> },
    { label: 'Videography', key: 'videography', icon: <BsCameraVideo className="text-gray-400 text-2xl" /> },
    { label: 'VR Tour', key: 'vrTour', icon: <FaVrCardboard className="text-gray-400 text-2xl" /> },
    { label: 'Property details', key: 'propertyDetails', icon: <BsHouse className="text-purple-500 text-2xl" />, alwaysOn: true },
  ];

  if (!assets) return <div className="p-6 text-gray-500">Loading...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Property Assets</h2>
  
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {assetBlocks.map((asset) => {
          const isAvailable = asset.alwaysOn || assets[asset.key as keyof ListingAssetStatus];
          return (
            <div
              key={asset.key}
              className={`w-40 h-40 flex flex-col items-center justify-center rounded-2xl transition-all
                ${isAvailable
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-100 text-gray-400'
                }
                hover:shadow-md
              `}
            >
              <div className="text-3xl mb-2">
                {asset.icon}
              </div>
              <span className="text-lg font-semibold text-center">
                {asset.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
  
};

export default PropertyDetail;

    