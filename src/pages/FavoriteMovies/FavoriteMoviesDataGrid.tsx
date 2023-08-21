import { Movie, TGridColDef } from "../../types";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import FavoriteButton from "../../components/FavoriteButton";
import useMoviesQueries from "../../hooks/useMoviesQueries";
import useFavourites from "../../hooks/useFavoriteMovies";

const FavoriteMoviesMoviesDataGrid = () => {
  const { favoriteMovies, update, isFavorite } = useFavourites();
  const queries = useMoviesQueries(favoriteMovies);

  const navigate = useNavigate();
  const columns: TGridColDef<Movie, "Favorite" | "Detail">[] = [
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
      rows={queries.map((a) => a.data).filter((a): a is Movie => !!a) ?? []}
      getRowId={(a) => a.imdbID}
      loading={queries.some((a) => a.isFetching)}
      rowSelection={false}
      pageSizeOptions={[10]}
      initialState={{ pagination: { paginationModel: { page: 0, pageSize: 10 } } }}
      rowCount={queries.length}
      // paginationModel={{
      //   pageSize: 10,
      //   page: searchParams.page ? searchParams.page - 1 : 0,
      // }}
      // onPaginationModelChange={(a) => {
      //   setSearchParams({ ...searchParams, page: a.page + 1 });
      // }}
    />
  );
};

export default FavoriteMoviesMoviesDataGrid;
