import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationData {
  page: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

interface PublicExercisePaginationProps {
  page: number;
  setPage: (page: number) => void;
  pagination: PaginationData;
  visiblePages: number[];
}

const PublicExercisePagination = ({
  page,
  setPage,
  pagination,
  visiblePages,
}: PublicExercisePaginationProps) => {
  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => pagination.hasPrevPage && setPage(page - 1)}
            className={
              pagination.hasPrevPage
                ? "cursor-pointer"
                : "pointer-events-none opacity-50"
            }
          />
        </PaginationItem>

        {visiblePages[0] > 1 && (
          <>
            <PaginationItem>
              <PaginationLink
                onClick={() => setPage(1)}
                className="cursor-pointer"
              >
                1
              </PaginationLink>
            </PaginationItem>

            {visiblePages[0] > 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
          </>
        )}

        {visiblePages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              isActive={p === page}
              onClick={() => setPage(p)}
              className="cursor-pointer"
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {visiblePages[visiblePages.length - 1] < pagination.totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] <
              pagination.totalPages - 1 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationLink
                onClick={() => setPage(pagination.totalPages)}
                className="cursor-pointer"
              >
                {pagination.totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            onClick={() => pagination.hasNextPage && setPage(page + 1)}
            className={
              pagination.hasNextPage
                ? "cursor-pointer"
                : "pointer-events-none opacity-50"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PublicExercisePagination;
