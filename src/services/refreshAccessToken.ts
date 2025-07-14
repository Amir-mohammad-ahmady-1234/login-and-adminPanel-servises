import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || '';

export const refreshAccessToken = async (
  refreshToken: string
): Promise<string> => {
  const formData = new FormData();
  formData.append('refresh', refreshToken);

  const { data } = await axios.post(`${BASE_URL}/login/refresh/`, formData);
  return data.access;
};
