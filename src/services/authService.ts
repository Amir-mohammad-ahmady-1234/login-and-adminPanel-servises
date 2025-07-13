import axios from 'axios';
import type { LoginSchemaType } from '@/schemas/loginSchema';

export const loginUser = async (data: LoginSchemaType) => {
  const res = await axios.post(
    'https://ultimatefitness.liara.run/login/',
    data
  );
  return res.data;
};
