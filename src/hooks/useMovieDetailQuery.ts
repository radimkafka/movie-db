import axios from "axios";
import { useQuery } from "react-query";
import { Movie } from "../types";
import { apiUrl } from "../api";

const useMovieDetailQuery = (movieId?: string) =>
  useQuery(
    ["movie", movieId],
    async (_) => {
      const response = await axios.get<Movie>(
        `${apiUrl}&i=${movieId}&plot=full`
      );
      return response.data;
    },
    { staleTime: 10 * 60 * 1000, enabled: !!movieId }
  );

export default useMovieDetailQuery;
