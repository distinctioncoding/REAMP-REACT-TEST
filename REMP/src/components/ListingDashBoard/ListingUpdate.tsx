import { useState } from "react";
import { ListingCase } from "../../interfaces/listing-case";
import { updateListing } from "../../api/listing-update";

interface Props {
  listing: ListingCase;
  onClose: () => void;
  onUpdated: () => void;
}

const ListingUpdateDialog = ({ listing, onClose, onUpdated }: Props) => {
  const [form, setForm] = useState<ListingCase>({ ...listing });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    const numericFields = [
      "postcode",
      "price",
      "bedrooms",
      "bathrooms",
      "garages",
      "floorArea",
      "propertyType",
      "saleCategory",
      "latitude",
      "longitude"
    ];

    setForm((prev) => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await updateListing(form.id, form);
      onUpdated();
      onClose();
    } catch (err) {
      console.error("Failed to update listing:", err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Edit Listing</h2>
        <div className="grid grid-cols-2 gap-4">
          <input name="title" value={form.title} onChange={handleChange} placeholder="Title" className="input" />
          <input name="description" value={form.description} onChange={handleChange} placeholder="Description" className="input" />

          <select name="propertyType" value={form.propertyType} onChange={handleChange} className="input">
            <option value={1}>House</option>
            <option value={2}>Unit</option>
            <option value={3}>Townhouse</option>
            <option value={4}>Villa</option>
            <option value={5}>Other</option>
          </select>

          <select name="saleCategory" value={form.saleCategory} onChange={handleChange} className="input">
            <option value={1}>For Sale</option>
            <option value={2}>For Rent</option>
            <option value={3}>Auction</option>
          </select>

          <input name="street" value={form.street} onChange={handleChange} placeholder="Street" className="input" />
          <input name="city" value={form.city} onChange={handleChange} placeholder="City" className="input" />
          <input name="state" value={form.state} onChange={handleChange} placeholder="State" className="input" />
          <input name="postcode" value={form.postcode} onChange={handleChange} placeholder="Postcode" className="input" />
          <input name="longitude" value={form.longitude} onChange={handleChange} placeholder="Longitude" className="input" />
          <input name="latitude" value={form.latitude} onChange={handleChange} placeholder="Latitude" className="input" />
          <input name="price" value={form.price} onChange={handleChange} placeholder="Price" className="input" />
          <input name="bedrooms" value={form.bedrooms} onChange={handleChange} placeholder="Bedrooms" className="input" />
          <input name="bathrooms" value={form.bathrooms} onChange={handleChange} placeholder="Bathrooms" className="input" />
          <input name="garages" value={form.garages} onChange={handleChange} placeholder="Garages" className="input" />
          <input name="floorArea" value={form.floorArea} onChange={handleChange} placeholder="Floor Area" className="input" />
        </div>

        <div className="mt-6 flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingUpdateDialog;
