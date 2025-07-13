import ProtectedRoute from '@/components/ProtectedRoute';
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

        <Route element={<ProtectedRoute guestOnly={true} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
          <Route path="/admin/users" element={<UsersList />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['simpleuser']} />}>
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
