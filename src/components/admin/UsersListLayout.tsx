import type { UsersResponse } from "@/types/usersType";
import { Card, CardContent, CardHeader, CardTitle } from "@/ui/card";
import UsersTable from "./UsersTable";
import SimpleDialog from "./simpleDialog";
import LogoutBtn from "@/ui/LogoutBtn";
import PaginationControls from "./PaginationControls";

type UsersListLayoutProps = {
  data: UsersResponse | undefined;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  isDeleting: boolean;
  deleteId: number | null;
  setDeleteId: React.Dispatch<React.SetStateAction<number | null>>;
  onDeleteConfirm: () => void;
  isFetching: boolean;
};

const UsersListLayout = ({
  data,
  page,
  setPage,
  isDeleting,
  deleteId,
  setDeleteId,
  onDeleteConfirm,
  isFetching,
}: UsersListLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-8">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-gray-800">
            لیست کاربران
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-gray-600 mb-4">
            دسترسی به این صفحه فقط برای مدیران مجاز است
          </p>

          <UsersTable
            data={data}
            isPending={isDeleting}
            setDeleteId={setDeleteId}
          />

          <PaginationControls
            page={page}
            setPage={setPage}
            hasNext={!!data?.nextPage}
            isFetching={isFetching}
          />

          <SimpleDialog
            open={deleteId !== null}
            onClose={() => setDeleteId(null)}
            onConfirm={onDeleteConfirm}
            loading={isDeleting}
          />

          <div className="mt-6 flex justify-center">
            <LogoutBtn />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersListLayout;
