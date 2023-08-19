import { debounce, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import useMoviesSearchParams, {
  MoviesSearchParams,
} from "../../hooks/useMoviesSearchParams";

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
    <TextField
      label="Movie name"
      variant="outlined"
      value={searchText ?? ""}
      onChange={(a) => {
        setSearchText(a.target.value);
        search({ ...searchParams, name: a.target.value });
      }}
    />
  );
};

export default Search;
