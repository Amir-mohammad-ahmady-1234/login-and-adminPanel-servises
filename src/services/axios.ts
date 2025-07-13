import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL || 'https://ultimatefitness.liara.run',
  headers: {
    'Content-Type': 'application/json',
    // اگه توکن نیاز داری:
    // Authorization: `Bearer ${token}`,
  },
  // مثلا اگه تایم‌اوت می‌خوای:
  timeout: 10000,
});

// 🔑 اگر نیاز داشتی می‌تونی اینجا Interceptor اضافه کنی:
axiosInstance.interceptors.request.use(
  (config) => {
    // مثلا توکن رو از localStorage برداره:
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
