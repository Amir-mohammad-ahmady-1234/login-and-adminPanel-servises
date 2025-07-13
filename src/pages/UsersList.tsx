import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';
import LogoutBtn from '@/components/LogoutBtn';

const UsersList = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            لیست کاربران
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            دسترسی به این صفحه فقط برای مدیران مجاز است
          </p>

          <div className="flex justify-center">
            <LogoutBtn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersList;
