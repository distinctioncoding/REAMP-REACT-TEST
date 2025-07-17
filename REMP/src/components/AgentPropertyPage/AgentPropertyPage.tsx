import NavBar from "./NavBar"
import PropertyCard from "./PropertyCard"
import Sidebar, { ButtonType } from "./SideBar"
import { useEffect, useState } from "react";
import { getListingCases } from "../../api/listingcase/listing-api";
import { ListingCase } from "../../interfaces/listing-case";
import { getStatusLabel } from "../../lib/get-status-label";
import ChangePasswordPopup from "./ChangePasswordPage";

export const AgentPropertyPage = () => {
  const [listings, setListings] = useState<ListingCase[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<ButtonType>("All");
  const [showPasswordPopup, setShowPasswordPopup] = useState(false); // ⬅️ 新增状态控制

  useEffect(() => {
    getListingCases()
      .then(setListings)
      .catch((err) => {
        console.error("Failed to fetch listings", err);
      });
  }, []);

  const filterListingCases = listings.filter((listing) => {
    const statusLabel = getStatusLabel(listing.listcaseStatus);
    return selectedStatus === "All" || statusLabel === selectedStatus;
  });

  return (
    <div className="w-full mx-auto bg-gray-50">
      <NavBar />
      <div className="flex px-28">
        <Sidebar
          selected={selectedStatus}
          onSelect={setSelectedStatus}
          onChangePasswordClick={() => setShowPasswordPopup(true)} // ⬅️ 传递控制函数
        />

        <div className="flex-1">
          {filterListingCases.map((listing) => (
            <PropertyCard key={listing.id} listing={listing} />
          ))}
        </div>
      </div>

      {showPasswordPopup && (
        <ChangePasswordPopup onClose={() => setShowPasswordPopup(false)} />
      )}
    </div>
  );
};
