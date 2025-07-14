import { Card, CardHeader, CardTitle, CardContent } from '@/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            صفحه اصلی
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-gray-600">
            این صفحه برای تست Protected Route است. تنها کاربران عادی اجازه ورود
            دارند.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
