import { TablePagination } from "@mui/material";

type PaginationPropsType = {
  page: number;
  handleChangePage: (event: unknown, newPage: number) => void;
  count: number;
};

export default function Pagination({
  page,
  handleChangePage,
  count,
}: PaginationPropsType) {
  return (
    <>
      <TablePagination
        page={page}
        onPageChange={handleChangePage}
        count={count}
        rowsPerPage={10}
        labelRowsPerPage={false}
        rowsPerPageOptions={[]}
      />
    </>
  );
}
