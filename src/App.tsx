import AppRoutes from './routes/AppRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div>
      <AppRoutes />;
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontFamily: 'IRANYekan, sans-serif',
            fontSize: '14px',
          },
        }}
      />
    </div>
  );
}

export default App;
