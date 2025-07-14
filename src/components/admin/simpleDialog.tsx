import { Button } from "@/ui/button";

function SimpleDialog({
  open,
  onClose,
  onConfirm,
  loading,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">حذف کاربر</h2>
        <p className="mb-6">آیا مطمئنید می‌خواهید این کاربر حذف شود؟</p>
        <div className="flex justify-around">
          <Button variant="destructive" onClick={onConfirm} disabled={loading}>
            حذف
          </Button>
          <Button variant="outline" onClick={onClose} disabled={loading}>
            انصراف
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SimpleDialog;
