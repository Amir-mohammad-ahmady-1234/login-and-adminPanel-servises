import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type ProtectedRouteProps = {
  allowedRoles?: string[];
  redirectTo?: string;
  guestOnly?: boolean;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowedRoles,
  guestOnly = false,
}) => {
  const access = localStorage.getItem('access');
  const role = localStorage.getItem('role');

  if (guestOnly) {
    if (access) {
      if (role === 'manager') return <Navigate to="/admin/users" replace />;
      return <Navigate to="/home" replace />;
    }
    return <Outlet />;
  }

  if (!access) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles?.length && !allowedRoles.includes(role || '')) {
    if (role === 'manager') return <Navigate to="/admin/users" replace />;
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
