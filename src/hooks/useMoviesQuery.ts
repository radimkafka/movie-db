import axios from "axios";
import { useQuery } from "react-query";
import { GetMoviesResult } from "../types";

const apiUrl = "http://www.omdbapi.com/?apikey=54f51e3f&";

const useMoviesQuery = (searchText?: string) =>
  useQuery(
    ["movies", searchText],
    async (_) => {
      const response = await axios.get<GetMoviesResult>(
        `${apiUrl}&page&10&s=${searchText}`
      );
      return response.data.Search;
    },
    { staleTime: 10 * 60 * 1000 }
  );

export default useMoviesQuery;
