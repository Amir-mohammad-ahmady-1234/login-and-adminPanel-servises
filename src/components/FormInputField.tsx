import type { UseFormRegister, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/ui/input';

type Props<T extends FieldValues> = {
  id: Path<T>;
  label: string;
  placeholder: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
};

function FormInputField<T extends FieldValues>({
  id,
  label,
  placeholder,
  register,
  error,
  type = 'text',
}: Props<T>) {
  return (
    <div className="flex flex-col">
      <label htmlFor={String(id)} className="mb-1 text-gray-700 font-semibold">
        {label}
      </label>
      <Input
        id={String(id)}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        className="focus-visible:ring-2 focus-visible:ring-offset-2"
      />
      {error && (
        <p className="mt-1 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default FormInputField;
