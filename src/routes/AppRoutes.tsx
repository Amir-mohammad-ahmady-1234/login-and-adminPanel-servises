import Home from '@/pages/Home';
import LoginPage from '@/pages/LoginPage';
import PageNotFound from '@/pages/PageNotFound';
import UsersList from '@/pages/UsersList';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/admin/users" element={<UsersList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
