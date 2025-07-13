import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import LogoutBtn from '@/ui/LogoutBtn';
import { getUsers, deleteUser } from '../services/users';
import toast from 'react-hot-toast';

import { Button } from '@/ui/button';
import Loading from '@/ui/Loading';

const PAGE_SIZE = 20;

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
};

type UsersResponse = {
  users: User[];
  nextPage: number | null;
  isLastPage: boolean;
  totalCount: number;
};

function SimpleDialog({
  open,
  onClose,
  onConfirm,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">حذف کاربر</h2>
        <p className="mb-6">آیا مطمئنید می‌خواهید این کاربر حذف شود؟</p>
        <div className="flex justify-around">
          <Button variant="destructive" onClick={onConfirm} disabled={loading}>
            حذف
          </Button>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            انصراف
          </Button>
        </div>
      </div>
    </div>
  );
}

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

          <div className="border rounded p-2 min-h-[200px] relative overflow-x-auto">
            {data && data.users.length === 0 ? (
              <p className="text-center">هیچ کاربری یافت نشد</p>
            ) : (
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border px-4 py-2">ID</th>
                    <th className="border px-4 py-2">نام</th>
                    <th className="border px-4 py-2">نام خانوادگی</th>
                    <th className="border px-4 py-2">ایمیل</th>
                    <th className="border px-4 py-2">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.users.map((user: User) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{user.id}</td>
                      <td className="border px-4 py-2">{user.first_name}</td>
                      <td className="border px-4 py-2">{user.last_name}</td>
                      <td className="border px-4 py-2">{user.email}</td>
                      <td className="border px-4 py-2 text-center">
                        <button
                          className="text-red-600 hover:text-red-800 disabled:opacity-50"
                          onClick={() => setDeleteId(user.id)}
                          disabled={mutation.isPending}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

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
