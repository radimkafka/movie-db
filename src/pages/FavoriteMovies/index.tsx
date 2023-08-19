import { Box, Typography, Paper } from "@mui/material";
import FavoriteMoviesMoviesDataGrid from "./FavoriteMoviesMoviesDataGrid";

const FavoriteMovies = () => {
  return (
    <Box sx={{ m: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Fav</Typography>
      </Box>
      <Paper sx={{ p: 2 }}>
        <FavoriteMoviesMoviesDataGrid />
      </Paper>
    </Box>
  );
};

export default FavoriteMovies;
