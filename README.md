# پنل ورود و مدیریت کاربران (React + TypeScript + Vite)

این پروژه یک پنل ورود و مدیریت کاربران است که با استفاده از React، TypeScript و Vite توسعه داده شده و از معماری Clean Code بهره می‌برد. این پروژه شامل احراز هویت JWT و ارتباط کامل با بک‌اند برای مدیریت کاربران و نقش‌ها می‌باشد.

---

## ✨ قابلیت‌ها و امکانات

- **ورود کاربران با نقش‌های مختلف (مدیر و کاربر ساده)**
- **احراز هویت مبتنی بر JWT** (دریافت و ذخیره توکن‌های دسترسی و رفرش)
- **Protected Route**: فقط کاربران مجاز به صفحات خاص دسترسی دارند
- **مدیریت کاربران (ویژه مدیر):**
  - مشاهده لیست کاربران با صفحه‌بندی
  - حذف کاربر با تاییدیه
- **راهنمای ورود با اطلاعات تست** (در صفحه ورود)
- **نمایش پیام‌های موفقیت و خطا با Toast**
- **رعایت Clean Code و استفاده از TypeScript**
- **استفاده از React Query برای مدیریت داده‌ها و کشینگ**
- **استفاده از TailwindCSS و Shadcn UI برای رابط کاربری مدرن و واکنش‌گرا**
- **ساختار ماژولار و قابل توسعه**

---

## 🛠️ ابزارها و تکنولوژی‌ها

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (راه‌اندازی سریع)
- [React Router v6+](https://reactrouter.com/)
- [React Query](https://tanstack.com/query/latest)
- [TailwindCSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- [Zod](https://zod.dev/) (اعتبارسنجی فرم)
- [React Hook Form](https://react-hook-form.com/)
- [Axios](https://axios-http.com/)
- [JWT](https://jwt.io/) (در سمت بک‌اند)
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) (کدنویسی تمیز)

---

## 🔒 احراز هویت و ارتباط با بک‌اند

- **ورود:** ارسال اطلاعات کاربر به `/login/` و دریافت access و refresh token و نقش کاربر
- **Protected Route:** بررسی نقش و توکن برای دسترسی به صفحات
- **رفرش توکن:** در صورت منقضی شدن access token، با refresh token توکن جدید دریافت می‌شود (`/login/refresh/`)
- **خروج:** حذف توکن‌ها و ارسال درخواست به `/logout/`
- **مدیریت کاربران:** فقط مدیر می‌تواند لیست کاربران را ببیند و کاربر حذف کند (`/manager-get-all-users-of-org` و `/manager-manage-account/:id`)

---

## 👤 اطلاعات ورود تستی

برای تست سریع پروژه می‌توانید از اطلاعات زیر استفاده کنید:

### مدیر

- **نام کاربری:** `managerWEH1`
- **رمز عبور:** `HI_test5467`

### کاربر ساده

- **نام کاربری:** `simpleuserWEH1`
- **رمز عبور:** `HI_test5467`

---

## 🧑‍💻 ساختار صفحات

- `/login` : صفحه ورود (با راهنمای ورود)
- `/admin/users` : لیست کاربران (فقط مدیر)
- `/home` : صفحه اصلی (فقط کاربر ساده)
- صفحات محافظت‌شده بر اساس نقش

---

## 🧹 رعایت Clean Code

- استفاده از TypeScript و تایپ‌های دقیق
- جداسازی کامل منطق، سرویس‌ها، هوک‌ها و کامپوننت‌ها
- رعایت اصول Single Responsibility و Separation of Concerns
- استفاده از ESLint و Prettier برای یکدست‌سازی کد

---

## 🚀 راه‌اندازی و اجرای پروژه به صورت لوکال

1. **کلون کردن مخزن:**
   ```bash
   git clone <REPO_URL>
   cd login-and-adminPanel-servises
   ```
2. **نصب وابستگی‌ها:**
   ```bash
   npm install
   ```
3. **تنظیم متغیرهای محیطی:**
   - یک فایل `.env` بسازید و مقدار `VITE_BASE_URL` را برابر آدرس بک‌اند قرار دهید:
     ```env
     VITE_BASE_URL=http://localhost:8000/api
     ```
4. **اجرای پروژه:**
   ```bash
   npm run dev
   ```
5. **دسترسی به پروژه:**
   - مرورگر را باز کنید و به آدرس [http://localhost:5173](http://localhost:5173) بروید.

---

## 📁 ساختار پوشه‌ها (خلاصه)

- `src/components/` : کامپوننت‌های قابل استفاده مجدد
- `src/pages/` : صفحات اصلی
- `src/services/` : ارتباط با API و بک‌اند
- `src/hooks/` : هوک‌های سفارشی
- `src/layouts/` : لایه‌بندی صفحات
- `src/types/` : تایپ‌ها و اینترفیس‌ها
- `src/ui/` : اجزای رابط کاربری

---

## 📝 نکات تکمیلی

- پروژه کاملاً ماژولار و قابل توسعه است.
- رعایت کامل Clean Code و Separation of Concerns.
- آماده برای توسعه بیشتر و اتصال به هر بک‌اند مبتنی بر JWT.

---

توسعه داده شده با ❤️
