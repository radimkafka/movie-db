import { MovieInfo, TGridColDef } from "../../types";
import { DataGrid } from "@mui/x-data-grid";
import useMoviesSearchParams from "../../hooks/useMoviesSearchParams";
import useMoviesQuery from "../../hooks/useMoviesQuery";

const MoviesDataGrid = () => {
  const [searchParams] = useMoviesSearchParams();

  const { data, isLoading } = useMoviesQuery(searchParams);

  const columns: TGridColDef<MovieInfo>[] = [
    {
      field: "Title",
      flex: 1,
    },
    {
      field: "Year",
      flex: 1,
    },
    {
      field: "Type",
      flex: 1,
    },
  ];

  return (
    <DataGrid
      columns={columns}
      rows={data ?? []}
      getRowId={(a) => a.imdbID}
      loading={isLoading}
    />
  );
};

export default MoviesDataGrid;
