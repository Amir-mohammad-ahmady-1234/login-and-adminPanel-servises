import { useState } from 'react';
import { Button } from '@/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/ui/dialog';

const LoginGuideModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <Button
        variant="outline"
        onClick={() => setOpen(true)}
        className="w-full"
      >
        مشاهده راهنمای ورود
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent dir="rtl" className="font-['Vazirmatn',sans-serif]">
          <DialogHeader>
            <DialogTitle className="text-center text-lg font-bold text-gray-800">
              راهنمای ورود
            </DialogTitle>
          </DialogHeader>
          <div className="text-sm text-gray-600 leading-relaxed space-y-4">
            <div>
              <p className="mb-1">
                برای ورود به عنوان{' '}
                <span className="font-semibold text-blue-700">مدیر</span>:
              </p>
              <p>
                <span className="font-semibold">نام کاربری:</span> managerWEH1
              </p>
              <p>
                <span className="font-semibold">رمز عبور:</span> HI_test5467
              </p>
            </div>

            <div>
              <p className="mb-1">
                برای ورود به عنوان{' '}
                <span className="font-semibold text-green-700">کاربر ساده</span>
                :
              </p>
              <p>
                <span className="font-semibold">نام کاربری:</span>{' '}
                simpleuserWEH1
              </p>
              <p>
                <span className="font-semibold">رمز عبور:</span> HI_test5467
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LoginGuideModal;
