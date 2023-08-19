import { MovieInfo, TGridColDef } from "../../types";
import { DataGrid } from "@mui/x-data-grid";
import useMoviesSearchParams from "../../hooks/useMoviesSearchParams";
import useMoviesQuery from "../../hooks/useMoviesQuery";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MoviesDataGrid = () => {
  const [searchParams] = useMoviesSearchParams();
  const { data, isLoading } = useMoviesQuery(searchParams);
  const navigate = useNavigate();

  const columns: TGridColDef<MovieInfo, "Detail">[] = [
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
    {
      field: "Detail",
      flex: 1,
      renderCell: (a) => (
        <IconButton
          onClick={(_) => navigate(`/${a.row.imdbID}`)}
          color="inherit"
        >
          <VisibilityOutlinedIcon />
        </IconButton>
      ),
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
