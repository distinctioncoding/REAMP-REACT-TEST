import { AxiosResponse } from 'axios';
import apiClient from '../apiClient';
import { PhotographyCompany } from '../../interfaces/PhotographyCompany';

export const getAllPhotographyCompanies = async (): Promise<PhotographyCompany[]> => {
  const res: AxiosResponse<PhotographyCompany[]> = await apiClient.get(
    '/User/GetAllPhotographyCompany'
  );
  return res.data;
};
