import { Button } from '@/ui/button';
import { useNavigate } from 'react-router-dom';

const LogoutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <Button variant="destructive" onClick={handleLogout}>
      خروج از حساب
    </Button>
  );
};

export default LogoutBtn;
