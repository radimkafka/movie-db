import { MovieInfo, TGridColDef } from "../../types";
import { DataGrid } from "@mui/x-data-grid";
import useMoviesSearchParams from "../../hooks/useMoviesSearchParams";
import useMoviesQuery from "../../hooks/useMoviesQuery";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";
import useFavourites from "../../hooks/useFavoriteMovies";

const MoviesDataGrid = () => {
  const [searchParams, setSearchParams] = useMoviesSearchParams();
  const { isFavorite, update } = useFavourites();
  const { data, isFetching } = useMoviesQuery(
    searchParams.name,
    searchParams.year,
    searchParams.type,
    searchParams.page
  );
  const navigate = useNavigate();
  const columns: TGridColDef<MovieInfo, "Favorite" | "Detail">[] = [
    {
      field: "Favorite",
      renderCell: (a) => (
        <FavoriteButton favorite={isFavorite(a.row.imdbID)} size="small" onClick={(_) => update(a.row.imdbID)} />
      ),
      sortable: false,
      renderHeader: (_) => <></>,
      width: 65,
    },
    {
      field: "Title",
      flex: 1,
      sortable: false,
    },
    {
      field: "Year",
      flex: 1,
      sortable: false,
    },
    {
      field: "Type",
      flex: 1,
      sortable: false,
    },
    {
      field: "Detail",
      renderCell: (a) => (
        <IconButton onClick={(_) => navigate(`/${a.row.imdbID}`)} color="inherit">
          <VisibilityOutlinedIcon />
        </IconButton>
      ),
      sortable: false,
      renderHeader: (_) => <></>,
      width: 65,
    },
  ];

  return (
    <DataGrid
      disableColumnFilter
      disableColumnMenu
      disableColumnSelector
      columns={columns}
      autoHeight
      rows={data?.Search ?? []}
      getRowId={(a) => a.imdbID}
      loading={isFetching}
      paginationMode="server"
      pageSizeOptions={[10]}
      rowSelection={false}
      paginationModel={{
        pageSize: 10,
        page: searchParams.page ? searchParams.page - 1 : 0,
      }}
      rowCount={data?.totalResults ? Number(data?.totalResults) : 0}
      onPaginationModelChange={(a) => {
        setSearchParams({ ...searchParams, page: a.page + 1 });
      }}
    />
  );
};

export default MoviesDataGrid;
