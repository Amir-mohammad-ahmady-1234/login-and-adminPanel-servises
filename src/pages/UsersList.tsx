import { useState } from 'react';

import Loading from '@/ui/Loading';
import UsersListLayout from '@/layouts/UsersListLayout';

import { useUsers } from '../hooks/useUsers';
import { useDeleteUser } from '../hooks/useDeleteUser';

const UsersList = () => {
  const [page, setPage] = useState(1);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const { data, isLoading, isError, isFetching } = useUsers(page);

  const { mutate, isPending: isDeleting } = useDeleteUser(page, () =>
    setDeleteId(null)
  );

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
