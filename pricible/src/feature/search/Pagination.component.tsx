import { Pagination, useTheme } from "@mui/material";
import { useFilter } from "../../stores/filter";

export default function SearchPagination() {
  //   const theme = useTheme();
  const { setFilter, pageIndex } = useFilter();
  const handleChange = (page: number) => {
    setFilter({ pageIndex: page });
  };
  return (
    <Pagination
      count={10}
      color="primary"
      page={pageIndex}
      onChange={(_, value) => handleChange(value)}
    />
  );
}
