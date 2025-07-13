import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import FormInputField from '@/components/FormInputField';
import { loginSchema, type LoginSchemaType } from '@/schemas/loginSchema';
import { useLogin } from '@/hooks/useLogin';
import { fields } from '@/data/authFields';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, status } = useLogin();

  const onSubmit = (data: LoginSchemaType) => {
    mutate(data);
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-['Vazirmatn',sans-serif]"
    >
      <Card className="w-full max-w-md shadow-lg rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            ورود به حساب
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
            noValidate
          >
            {fields.map(({ id, label, placeholder, type }) => (
              <FormInputField<LoginSchemaType>
                key={id}
                id={id}
                label={label}
                placeholder={placeholder}
                type={type}
                register={register}
                error={errors[id]?.message}
              />
            ))}

            <Button
              type="submit"
              className="w-full mt-4"
              disabled={status === 'pending'}
            >
              {status === 'pending' ? 'در حال ارسال دیتا ...' : 'ورود'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
