import { Box, Grid, IconButton, Paper, Typography } from "@mui/material";
import MoviesDataGrid from "./MoviesDataGrid";
import Search from "./Search";
import { useColorMode } from "../../providers/ColorModeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Movies = () => {
  const colorMode = useColorMode();

  return (
    <Box sx={{ m: 2 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h3">Movie DB</Typography>
        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggle} color="inherit">
          {colorMode.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
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
    </Box>
  );
};

export default Movies;
