import PaginationButton from "@/ui/PaginationButton";

type PaginationControlsProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  hasNext: boolean;
  isFetching: boolean;
};

const PaginationControls = ({
  page,
  setPage,
  hasNext,
  isFetching,
}: PaginationControlsProps) => {
  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (hasNext) setPage(page + 1);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <PaginationButton
        onClick={handlePrevPage}
        disabled={page === 1 || isFetching}
      >
        صفحه قبل
      </PaginationButton>
      <span>صفحه {page}</span>
      <PaginationButton
        onClick={handleNextPage}
        disabled={!hasNext || isFetching}
      >
        صفحه بعد
      </PaginationButton>
    </div>
  );
};

export default PaginationControls;
