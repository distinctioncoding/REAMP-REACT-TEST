import { UpdatePasswordDTO } from '../../interfaces/User';
import apiClient from '../apiClient';

export const changePassword = async (data: UpdatePasswordDTO): Promise<void> => {
  await apiClient.post('/user/update-password', data);
};
