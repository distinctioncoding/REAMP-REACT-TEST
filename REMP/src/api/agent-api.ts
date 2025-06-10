// src/api/agent-api.ts
import { AxiosResponse } from 'axios';
import apiClient from './apiClient';
import { Agent } from '../interfaces/agent-response'; 

export const getAgentsByCompany = async (): Promise<Agent[]> => {
  const response: AxiosResponse<Agent[]> = await apiClient.get('/PhotographyCompany');
  return response.data;
};
