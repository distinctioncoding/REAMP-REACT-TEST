import { useEffect, useState } from "react";
import { getListingCases } from "../api/listing-api";
import { ListingCase } from "../interfaces/listing-case";
import { useNavigate } from 'react-router-dom';

// Map backend enum values to readable labels
const getPropertyTypeLabel = (type: number): string => {
    switch (type) {
        case 1: return "House";
        case 2: return "Unit";
        case 3: return "Townhouse";
        case 4: return "Villa";
        case 5: return "Others";
        default: return "Unknown";
    }
};
const getStatusLabel = (status: number): string => {
    switch (status) {
        case 1: return "Created";
        case 2: return "Pending";
        case 3: return "Delivered";
        default: return "Unknown";
    }
};

// Mock data version
// const mockListingCases: ListingCase[] = [
//     {
//         id: 5,
//         propertyType: 1,
//         street: "",
//         city: "",
//         state: "",
//         postcode: 0,
//         createdAt: "2025-05-10T00:00:00Z",
//         listcaseStatus: 1,
//         title: "",
//         saleCategory: 0,
//         price: 0,
//         bedrooms: 0,
//         bathrooms: 0,
//         garages: 0,
//         floorArea: 0,
//         userId: "",
//         isDeleted: false
//     },
//     {
//         id: 4,
//         propertyType: 4,
//         street: "17 Carl Street",
//         city: "Brisbane",
//         state: "Queensland",
//         postcode: 4102,
//         createdAt: "2025-05-10T00:00:00Z",
//         listcaseStatus: 1,
//         title: "",
//         saleCategory: 0,
//         price: 0,
//         bedrooms: 0,
//         bathrooms: 0,
//         garages: 0,
//         floorArea: 0,
//         userId: "",
//         isDeleted: false
//     },
//     {
//         id: 2,
//         propertyType: 3,
//         street: "17 Carl Street",
//         city: "Brisbane",
//         state: "Queensland",
//         postcode: 4102,
//         createdAt: "2025-04-14T00:00:00Z",
//         listcaseStatus: 1,
//         title: "",
//         saleCategory: 0,
//         price: 0,
//         bedrooms: 0,
//         bathrooms: 0,
//         garages: 0,
//         floorArea: 0,
//         userId: "",
//         isDeleted: false
//     },
//     {
//         id: 1,
//         propertyType: 4,
//         street: "88 Church Street",
//         city: "Sydney",
//         state: "NSW",
//         postcode: 2000,
//         createdAt: "2025-04-14T00:00:00Z",
//         listcaseStatus: 1,
//         title: "",
//         saleCategory: 0,
//         price: 0,
//         bedrooms: 0,
//         bathrooms: 0,
//         garages: 0,
//         floorArea: 0,
//         userId: "",
//         isDeleted: false
//     },
// ];
// const ListingDashboard = () => {
//     const [listings, setListings] = useState<ListingCase[]>([]);

//     useEffect(() => {
//         setTimeout(() => {
//             setListings(mockListingCases);
//         }, 500);
//     }, []);

// API version
const ListingDashboard = () => {
    const [listings, setListings] = useState<ListingCase[]>([]);
    const navigate = useNavigate();
    const handleViewDetails = (id: number) => {
        navigate(`/property/${id}`);
    };
    useEffect(() => {
        getListingCases()
            .then(setListings)
            .catch((err) => {
                console.error("Failed to fetch listing cases:", err);
            });
    }, []);

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Display all ListingCases in dashboard</h1>
            </div>
            <table className="w-full text-left border-collapse shadow-sm rounded-lg overflow-hidden text-gray-700 font-medium">
                <thead className="bg-gray-100 border-b-2 border-gray-300">
                    <tr>
                        <th className="px-4 py-2">PROPERTY#</th>
                        <th className="px-4 py-2">PROPERTY TYPE</th>
                        <th className="px-4 py-2">PROPERTY ADDRESS</th>
                        <th className="px-4 py-2">CREATED AT</th>
                        <th className="px-4 py-2">STATUS</th>
                        <th className="px-4 py-2">ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
                    {listings.map((item) => (
                        <tr key={item.id} className="border-b border-gray-300">
                            <td className="px-4 py-2 font-bold">#{item.id}</td>
                            <td className="px-4 py-2">{getPropertyTypeLabel(item.propertyType)}</td>
                            <td className="px-4 py-2">
                                {item.street
                                    ? `${item.street}, ${item.city ?? ""}, ${item.state ?? ""}, ${item.postcode ?? ""}`
                                    : "Address not provided"}
                            </td>
                            <td className="px-4 py-2">{new Date(item.createdAt).toLocaleDateString()}</td>
                            <td className="px-4 py-2">
                                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
                                    {getStatusLabel(item.listcaseStatus)}
                                </span>
                            </td>
                            <td className="px-4 py-2">
                                <button
                                    onClick={() => handleViewDetails(item.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                                >
                                    View Details
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <p className="mt-6 text-gray-500 italic">
                Showing all current property listings...
            </p>
        </div>
    );
};

export default ListingDashboard;
