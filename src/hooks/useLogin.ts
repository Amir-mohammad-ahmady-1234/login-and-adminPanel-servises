import { useMutation } from '@tanstack/react-query';
import { loginUser } from '@/services/authService';

export const useLogin = () => {
  const { mutate, status } = useMutation({
    mutationFn: loginUser,
    onSuccess: ({ access, refresh }) => {
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
    },
    onError: (error: Error) => {
      if (error.message.includes('401')) {
        console.log('کاربری با این مشخصات وجود ندارد');
      } else {
        console.log('خطا در برقراری ارتباط');
      }
    },
  });

  return { mutate, status };
};
