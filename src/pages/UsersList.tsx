import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import LogoutBtn from '@/ui/LogoutBtn';
import { getUsers, deleteUser } from '../services/users';
import toast from 'react-hot-toast';

import { Button } from '@/ui/button';
import Loading from '@/ui/Loading';
import SimpleDialog from '@/components/admin/simpleDialog';
import UsersTable from '@/components/admin/UsersTable';
import type { UsersResponse } from '@/types/usersType';

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

  const mutation = useMutation({
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
    if (deleteId === null) return;
    mutation.mutate(deleteId);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (data?.nextPage) setPage((prev) => prev + 1);
  };

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <p className="text-center mt-4 text-red-600">خطا در دریافت کاربران</p>
    );

  if (isFetching) return <Loading />;

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-8">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            لیست کاربران
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            دسترسی به این صفحه فقط برای مدیران مجاز است
          </p>

          <UsersTable
            data={data}
            isPending={mutation.isPending}
            setDeleteId={setDeleteId}
          />

          <div className="flex justify-between items-center mt-4">
            <Button
              onClick={handlePrevPage}
              disabled={page === 1 || isFetching}
              variant="outline"
            >
              صفحه قبل
            </Button>
            <span>صفحه {page}</span>
            <Button
              onClick={handleNextPage}
              disabled={!data?.nextPage || isFetching}
              variant="outline"
            >
              صفحه بعد
            </Button>
          </div>

          <SimpleDialog
            open={deleteId !== null}
            onClose={() => setDeleteId(null)}
            onConfirm={onDeleteConfirm}
            loading={mutation.isPending}
          />

          <div className="mt-6 flex justify-center">
            <LogoutBtn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersList;
