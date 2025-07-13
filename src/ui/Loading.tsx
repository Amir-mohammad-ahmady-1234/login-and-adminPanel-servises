import { Loader2 } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-background px-6 text-center">
      <div className="relative">
        <Loader2 className="h-24 w-24 animate-spin text-primary drop-shadow-lg" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-400 via-purple-500 to-pink-600 opacity-30 animate-pulse blur-xl"></div>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-primary drop-shadow-md">
        در حال بارگذاری...
      </h1>

      <p className="max-w-lg text-lg text-muted-foreground">
        لطفا چند لحظه صبر کنید. داده‌ها در حال بارگذاری هستند تا بهترین تجربه
        ممکن را داشته باشید.
      </p>
    </div>
  );
}
