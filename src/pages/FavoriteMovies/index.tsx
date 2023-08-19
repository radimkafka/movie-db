import { Box, Typography, Paper } from "@mui/material";
import FavoriteMoviesMoviesDataGrid from "./FavoriteMoviesDataGrid";

const FavoriteMovies = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Favorites</Typography>
      </Box>
      <Paper sx={{ p: 2 }}>
        <FavoriteMoviesMoviesDataGrid />
      </Paper>
    </>
  );
};

export default FavoriteMovies;
