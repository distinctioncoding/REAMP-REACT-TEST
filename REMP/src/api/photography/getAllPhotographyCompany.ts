import { PhotographyCompany } from "../../interfaces/PhotographyCompany";
import apiClient from "../apiClient";

export const getAllPhotographyCompanies = async (): Promise<PhotographyCompany[]> => {
  const res = await apiClient.get('/photography-company/GetAllPhotographyCompany');
  return res.data;
};
