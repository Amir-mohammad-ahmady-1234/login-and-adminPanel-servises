import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { getUsers, deleteUser } from '../services/users';
import toast from 'react-hot-toast';

import Loading from '@/ui/Loading';
import type { UsersResponse } from '@/types/usersType';
import UsersListLayout from '@/components/admin/UsersListLayout';

const PAGE_SIZE = 20;

const UsersList = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { data, isLoading, isError, isFetching } = useQuery<
    UsersResponse,
    Error
  >({
    queryKey: ['users', page],
    queryFn: () => getUsers(page, PAGE_SIZE),
  });

  const { mutate, isPending: isDeleting } = useMutation({
    mutationFn: (id: number) => deleteUser(id),
    onSuccess: () => {
      toast.success('کاربر حذف شد');
      queryClient.invalidateQueries({ queryKey: ['users', page] });
      setDeleteId(null);
    },
    onError: () => {
      toast.error('حذف کاربر با خطا مواجه شد');
    },
  });

  const onDeleteConfirm = () => {
    if (deleteId !== null) mutate(deleteId);
  };

  if (isError)
    return (
      <p className="text-center mt-4 text-red-600">خطا در دریافت کاربران</p>
    );

  if (isLoading || isFetching) return <Loading />;

  return (
    <UsersListLayout
      data={data}
      page={page}
      setPage={setPage}
      isDeleting={isDeleting}
      deleteId={deleteId}
      setDeleteId={setDeleteId}
      onDeleteConfirm={onDeleteConfirm}
      isFetching={isFetching}
    />
  );
};

export default UsersList;
