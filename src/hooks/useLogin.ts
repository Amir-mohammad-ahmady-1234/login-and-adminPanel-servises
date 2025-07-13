import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/services/authService';
import toast from 'react-hot-toast';

export const useLogin = () => {
  const { mutate, status } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ access, refresh }) => {
      toast.success('ورود با موفقیت انجام شد', { duration: 3000 });
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
    },
    onError: (error: Error) => {
      if (error.message.includes('401')) {
        toast.error('کاربری با این مشخصات وجود ندارد', { duration: 3000 });
      } else {
        toast.error('خطا در برقراری ارتباط', { duration: 3000 });
      }
    },
  });

  return { mutate, status };
};
