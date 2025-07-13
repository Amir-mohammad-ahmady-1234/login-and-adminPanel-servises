import { z } from 'zod';

export const loginSchema = z.object({
  username: z.string().min(2, 'نام کاربری باید حداقل ۲ کاراکتر باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
