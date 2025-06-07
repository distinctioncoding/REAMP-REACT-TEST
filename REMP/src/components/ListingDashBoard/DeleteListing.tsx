import { useState } from "react";
import { deleteListingCaseById } from "../../api/listingcase/listing-delete";

interface Props {
    listingId: number;
    onDelete: () => void;
}

const DeleteListingButton = ({listingId, onDelete}:Props) => {
  const [confirming, setConfirming] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async() => {
    setLoading(true)
    try {
      await deleteListingCaseById(listingId)
      onDelete()
      setConfirming(false)
    } catch(err){
        console.error("Delete failed", err);
        alert("Delete failed.");
    } finally {
        setLoading(false);
    }
    
  }
  return (
    <div className="relative inline-block">
        <button 
          onClick={()=> {setConfirming(true)}}
          className="block w-full text-left text-red-500 hover:bg-gray-100 px-4 py-2"
        >
            Delete
        </button>

        {confirming && (
            <div className="absolute z-20 bg-white border rounded shadow-md mt-1 right-0 p-4 w-56">
                <p className="text-sm text-gray-700 mb-3">Are you sure you want to delete this listing?</p>
                <div className="flex justify-end space-x-2">
                    <button 
                        onClick={()=>{setConfirming(false)}}
                        className="px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded"
                        >
                            Cancel
                    </button>

                    <button 
                        onClick={handleDelete} 
                        disabled={loading}
                        className={`px-3 py-1 text-sm text-white rounded 
                            ${loading ? 'bg-red-300' : 'bg-red-500 hover:bg-red-600'}`}
                        >
                            {loading ? "Deleting..." : "Confirm"}
                    </button>
                </div>
                
            </div>
        )}
    </div>
  )
}

export default DeleteListingButton