import { Grid, TextField, debounce } from "@mui/material";
import { useCallback, useState } from "react";
import MoviesDataGrid from "./MoviesDataGrid";
import useMoviesSearchParams from "../../hooks/useMoviesSearchParams";

const Movies = () => {
  const [searchParams, setSearchParams] = useMoviesSearchParams();
  const [searchText, setSearchText] = useState(searchParams);

  const search = useCallback(
    debounce((text?: string) => {
      setSearchParams(text);
    }, 500),
    [setSearchParams]
  );

  return (
    <>
      <Grid container>
        <Grid item>
          <TextField
            title="Name"
            value={searchText ?? ""}
            onChange={(a) => {
              setSearchText(a.target.value);
              search(a.target.value);
            }}
          />
        </Grid>
      </Grid>
      <Grid item>
        <MoviesDataGrid />
      </Grid>
    </>
  );
};

export default Movies;
