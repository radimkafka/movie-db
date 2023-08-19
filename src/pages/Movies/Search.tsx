import { debounce, Grid, MenuItem, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import useMoviesSearchParams, {
  MoviesSearchParams,
} from "../../hooks/useMoviesSearchParams";
import { isRecordType } from "../../types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

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
      <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
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
      <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
        <TextField
          disabled={!searchText}
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
      <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            disabled={!searchText}
            sx={{ width: "100%" }}
            label="Year"
            views={["year"]}
            value={searchParams.year ? dayjs().year(searchParams.year) : null}
            onChange={(a) =>
              setSearchParams({ ...searchParams, year: a?.year() })
            }
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default Search;
