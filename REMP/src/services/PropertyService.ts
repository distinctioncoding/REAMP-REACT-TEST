import apiClient from "../api/apiClient";
import { PropertyData } from "../types/Property"

export const createListing = async (formData: PropertyData) => {
    try {
      const response = await apiClient.post("/ListingCase/listings", formData);
      return response.data;
    } catch (error) {
      console.error("Failed to create listing:", error);
      throw error;
    }
  };