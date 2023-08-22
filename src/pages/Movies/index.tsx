import { Box, Grid, Paper, Theme, Typography, useMediaQuery } from "@mui/material";
import MoviesDataGrid from "./MoviesDataGrid";
import Search from "./Search";

const Movies = () => {
  const xs = useMediaQuery<Theme>((a) => a.breakpoints.down("sm"));
  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Search a movie</Typography>
      </Box>
      <Paper sx={{ p: xs ? 1 : 2 }}>
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
