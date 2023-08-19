import { Grid, Paper } from "@mui/material";
import MoviesDataGrid from "./MoviesDataGrid";
import Search from "./Search";

const Movies = () => (
  <Paper sx={{ m: 2, p: 2 }}>
    <Grid container>
      <Grid item sx={{ mb: 2 }}>
        <Search />
      </Grid>
      <Grid item xs={12}>
        <MoviesDataGrid />
      </Grid>
    </Grid>
  </Paper>
);

export default Movies;
