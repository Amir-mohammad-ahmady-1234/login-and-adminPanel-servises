import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import ProtectedRoute from '@/components/ProtectedRoute';
import AppLayout from '@/layouts/AppLayout';
import Loading from '@/ui/Loading';

const LoginPage = lazy(() => import('@/pages/LoginPage'));
const Home = lazy(() => import('@/pages/Home'));
const UsersList = lazy(() => import('@/pages/UsersList'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/" element={<AppLayout />}>
            <Route element={<ProtectedRoute allowedRoles={['manager']} />}>
              <Route path="/admin/users" element={<UsersList />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['simpleuser']} />}>
              <Route path="/home" element={<Home />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoute guestOnly={true} />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
