import axios from 'axios';
import type { LoginSchemaType } from '@/schemas/loginSchema';

export const loginUser = async (data: LoginSchemaType) => {
  const res = await axios.post(
    'https://ultimatefitness.liara.run/login/',
    data
  );
  return res.data;
};

export const logoutUser = async (refreshToken: string) => {
  const { data } = await axios.post(
    'https://ultimatefitness.liara.run/logout/',
    { refresh: refreshToken }
  );
  if (data.error) throw new Error(data.error);
  return data;
};
