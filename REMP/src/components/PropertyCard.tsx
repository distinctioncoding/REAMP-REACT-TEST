import { CiCamera } from "react-icons/ci";
import { FiLayout } from "react-icons/fi";
import { formatDate } from '../lib/formatDate';
import { Listing } from '../types/Listing'

interface PropertyCardProps {
  listing: Listing;
}
const PropertyCard = ({listing}: PropertyCardProps) => {
  const latestStatus = listing.statusLogs
  .slice()
  .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())[0]?.newStatus || 'Unknown';

  const formattedDate = formatDate(listing.createdAt);
  
  
  return (
      <div className="relative w-full max-w-screen-lg mx-auto my-6 px-4 py-5 bg-white border border-gray-200 rounded-md shadow-sm">
      {/* Status badge */}
      <div className="absolute top-0 right-0 bg-blue-100 text-blue-700 px-2 py-1 rounded-bl-md text-sm">
        {latestStatus}
      </div>
    
      {/* Header */}
      <div className="text-left">
        <p className="text-base text-gray-500">Property # {listing.id}</p>
        <p className="text-xs text-gray-400 mb-3">Created on {formattedDate}</p>
      </div>
    
      {/* Divider */}
      <hr className="border-t border-gray-200 mb-4" />
    
      {/* Address */}
      <h2 className="text-base font-semibold mb-4 text-left">
        {listing.street}, {listing.city}, {listing.state}, {listing.postcode}
      </h2>
    
      {/* Action buttons */}
      <div className="flex gap-2 mb-4">
          <button className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded">
              <CiCamera className="w-4 h-4" />
              Photography
          </button>
          <button className="flex items-center gap-1 px-3 py-1 text-xs bg-gray-100 text-gray-800 rounded">
              <FiLayout className="w-4 h-4" />
              Floor Plan
          </button>
      </div>
    
      {/* Bottom-right link */}
      <div className="text-right">
        <a href="#" className="text-xs text-gray-400 hover:underline">
          View property details →
        </a>
      </div>
    </div>
  );
};

export default PropertyCard;
