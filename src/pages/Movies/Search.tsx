import { debounce, Grid, MenuItem, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import useMoviesSearchParams, {
  MoviesSearchParams,
} from "../../hooks/useMoviesSearchParams";
import { isRecordType } from "../../types";

const Search = () => {
  const [searchParams, setSearchParams] = useMoviesSearchParams();
  const [searchText, setSearchText] = useState(searchParams.name);

  const search = useCallback(
    debounce((params?: MoviesSearchParams) => {
      setSearchParams(params);
    }, 500),
    [setSearchParams]
  );
  return (
    <Grid container spacing={2}>
      <Grid item lg={3}>
        <TextField
          label="Movie name"
          variant="outlined"
          fullWidth
          value={searchText ?? ""}
          onChange={(a) => {
            setSearchText(a.target.value);
            search({ ...searchParams, name: a.target.value });
          }}
        />
      </Grid>
      <Grid item lg={3}>
        <TextField
          label="Type"
          select
          variant="outlined"
          fullWidth
          value={searchParams.type ?? ""}
          onChange={(a) => {
            if (isRecordType(a.target.value) || a.target.value === undefined)
              setSearchParams({ ...searchParams, type: a.target.value });
          }}
        >
          <MenuItem value={undefined}>type</MenuItem>
          <MenuItem value={"movie"}>movie</MenuItem>
          <MenuItem value={"series"}>series</MenuItem>
          <MenuItem value={"episode"}>episode</MenuItem>
          <MenuItem value={"game"}>game</MenuItem>
        </TextField>
      </Grid>
    </Grid>
  );
};

export default Search;
