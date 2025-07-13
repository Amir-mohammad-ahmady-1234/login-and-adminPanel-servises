import axios from 'axios';
import axiosInstance from './axios';
import type { LoginSchemaType } from '@/schemas/loginSchema';

const BASE_URL = import.meta.env.VITE_BASE_URL || '';

export const loginUser = async (data: LoginSchemaType) => {
  const res = await axios.post(`${BASE_URL}/login/`, data, {
    withCredentials: true,
  });
  return res.data;
};

export const logoutUser = async (refreshToken: string) => {
  const formData = new FormData();
  formData.append('refresh', refreshToken);

  const { data } = await axiosInstance.post('/logout/', formData);
  if (data.error) throw new Error(data.error);
  return data;
};
