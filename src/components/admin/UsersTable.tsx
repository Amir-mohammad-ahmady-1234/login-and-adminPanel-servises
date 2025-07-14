import type { User, UsersResponse } from '@/types/usersType';

interface IProps {
  data: UsersResponse | undefined;
  setDeleteId: React.Dispatch<React.SetStateAction<number | null>>;
  isPending: boolean;
}

const UsersTable = ({ data, setDeleteId, isPending }: IProps) => {
  return (
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
                    disabled={isPending}
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
  );
};

export default UsersTable;
