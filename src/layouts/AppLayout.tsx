import Header from '@/ui/Header';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header userName="امیر" />
      <main className="flex-grow bg-gray-50 p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
