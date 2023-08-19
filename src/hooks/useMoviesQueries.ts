import axios from "axios";
import { useQueries } from "react-query";
import { Movie } from "../types";
import { apiUrl } from "../api";

const useMoviesQueries = (movies: string[]) => {
  return useQueries(
    movies.map((a) => ({
      queryKey: ["movie", a],
      queryFn: async () => {
        const response = await axios.get<Movie>(`${apiUrl}&i=${a}`);
        return response.data;
      },
      staleTime: 5 * 60 * 1000,
    }))
  );
};

export default useMoviesQueries;
