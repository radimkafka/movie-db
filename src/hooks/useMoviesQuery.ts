import axios from "axios";
import { useQuery } from "react-query";
import { GetMoviesResult } from "../types";

const apiUrl = "http://www.omdbapi.com/?apikey=54f51e3f";

const useMoviesQuery = (searchText?: string, page?: number) =>
  useQuery(
    ["movies", searchText, page],
    async (_) => {
      const response = await axios.get<GetMoviesResult>(
        `${apiUrl}&page=${page ?? 0}&s=${searchText}`
      );
      return response.data;
    },
    { staleTime: 10 * 60 * 1000 }
  );

export default useMoviesQuery;
