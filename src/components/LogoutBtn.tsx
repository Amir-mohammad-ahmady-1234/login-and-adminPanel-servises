import { useLogout } from '@/hooks/useLogout';
import { Button } from '@/ui/button';

const LogoutBtn = () => {
  const logoutMutation = useLogout();

  return (
    <Button
      variant="destructive"
      onClick={() => logoutMutation.mutate()}
      disabled={logoutMutation.isPending}
    >
      {logoutMutation.isPending ? 'در حال خروج...' : 'خروج از حساب'}
    </Button>
  );
};

export default LogoutBtn;
