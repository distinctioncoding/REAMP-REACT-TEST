import { ListingCase } from "../../interfaces/listing-case";
import apiClient from "../apiClient";

export const updateListing = async(id:number, data: ListingCase) =>{
    await apiClient.put(`/ListingCase/listings/${id}`, data)
}