import { Box, Grid, Paper, Typography } from "@mui/material";
import MoviesDataGrid from "./MoviesDataGrid";
import Search from "./Search";

const Movies = () => (
  <Box sx={{ m: 2 }}>
    <Typography variant="h3">Movie DB</Typography>
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
  </Box>
);

export default Movies;
