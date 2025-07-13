import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/services/authService';
import toast from 'react-hot-toast';

export const useLogout = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: () => {
      const refresh = localStorage.getItem('refresh') || '';
      return logoutUser(refresh);
    },
    onSuccess: () => {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('role');
      toast.success('با موفقیت خارج شدید');
      navigate('/login');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'خطا در خروج');
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      localStorage.removeItem('role');
      navigate('/login');
    },
  });
};
