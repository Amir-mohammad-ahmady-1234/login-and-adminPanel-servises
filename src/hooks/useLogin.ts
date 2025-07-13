import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/services/authService';
import toast from 'react-hot-toast';
import { AxiosError } from 'axios';

export const useLogin = () => {
  const { mutate, status } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ access, refresh, role }) => {
      toast.success('ورود با موفقیت انجام شد', { duration: 3000 });
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
      localStorage.setItem('role', role);
    },
    onError: (error) => {
      const err = error as AxiosError;

      if (err.response?.status === 401) {
        toast.error('کاربری با این مشخصات وجود ندارد', { duration: 3000 });
      } else if (err.response) {
        toast.error(`خطا: ${err.response.status}`, { duration: 3000 });
      } else {
        toast.error('خطا در برقراری ارتباط با سرور', { duration: 3000 });
      }
    },
  });

  return { mutate, status };
};
