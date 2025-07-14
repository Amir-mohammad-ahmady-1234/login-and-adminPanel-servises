import Header from '@/ui/Header';
import { Outlet } from 'react-router-dom';
import { useUserInfo } from '@/hooks/useUserInfo';

const AppLayout = () => {
  const { data, isLoading, isError } = useUserInfo();

  if (isError) return <div>خطا در دریافت اطلاعات کاربر</div>;

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        userName={
          isLoading ? 'در حال بارگذاری ...' : data?.username || 'کاربر ناشناس'
        }
      />
      <main className="flex-grow bg-gray-50 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
