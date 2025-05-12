import NavBar from "./NavBar"
import PropertyCard from "./PropertyCard"
import Sidebar from "./SideBar"
import { useEffect, useState } from "react";
import { getListingCases } from "../../api/listing-api";
import { ListingCase } from "../../interfaces/listing-case";
import { getStatusLabel } from "../../lib/get-status-label";
export const AgentPropertyPage = () => {

  const [listings, setLsitings] = useState<ListingCase[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  useEffect(()=>{
    getListingCases()
      .then(setLsitings)
      .catch((err) => {
        console.error("Failed to fetch listings", err);
      })
  },[])

   const filterListingCases = listings.filter((listing) => {
    const statusLabel = getStatusLabel(listing.listcaseStatus);
    return (selectedStatus === "All" || statusLabel === selectedStatus)
   })

  return (
    <div className="w-full mx-auto bg-gray-50">
      <NavBar />
      <div className="flex px-28">

        <Sidebar selected={selectedStatus} onSelect={setSelectedStatus}/>
 
        <div className="flex-1">
          {filterListingCases.map((listing) => (
            <PropertyCard key={listing.id} listing={listing}/>
          ))}         
        </div>

      </div>
    </div>
  );
};
