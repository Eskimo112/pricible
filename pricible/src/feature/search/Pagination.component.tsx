import { Pagination, useTheme } from "@mui/material";
import { useFilterStore } from "../../stores/filter";

export default function SearchPagination({
  totalPage = 1,
}: {
  totalPage?: number;
}) {
  //   const theme = useTheme();
  const { setFilter, pageIndex } = useFilterStore();
  const handleChange = (page: number) => {
    setFilter({ pageIndex: page });
  };
  return (
    <Pagination
      count={totalPage}
      color="primary"
      page={pageIndex}
      onChange={(_, value) => handleChange(value)}
    />
  );
}
