import { Box, Grid, Paper, Typography } from "@mui/material";
import MoviesDataGrid from "./MoviesDataGrid";
import Search from "./Search";

const Movies = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Find movie</Typography>
      </Box>
      <Paper sx={{ p: 2 }}>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <Search />
          </Grid>
          <Grid item xs={12}>
            <MoviesDataGrid />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default Movies;
