import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteUser } from '../services/users';
import toast from 'react-hot-toast';

export const useDeleteUser = (page: number, onClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      toast.success('کاربر حذف شد');
      queryClient.invalidateQueries({ queryKey: ['users', page] });
      onClose();
    },
    onError: () => {
      toast.error('حذف کاربر با خطا مواجه شد');
    },
  });
};
