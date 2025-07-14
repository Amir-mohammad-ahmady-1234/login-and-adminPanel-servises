import { useMutation } from '@tanstack/react-query';
import { refreshAccessToken } from '@/services/refreshAccessToken';
import { AxiosError } from 'axios';

export const useRefreshAccessToken = () => {
  const { mutate, status } = useMutation({
    mutationFn: refreshAccessToken,
    onSuccess: (newAccessToken: string) => {
      localStorage.setItem('access', newAccessToken);
    },
    onError: (error: unknown) => {
      const err = error as AxiosError;
      console.error('Refresh token failed', err);
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      window.location.href = '/login';
    },
  });

  return { mutate, status };
};
