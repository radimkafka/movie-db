import axios from "axios";
import { useQuery } from "react-query";
import { GetMoviesResult, Movie } from "../types";

const apiUrl = "http://www.omdbapi.com/?apikey=54f51e3f&";

const useMovieDetailQuery = (movieId?: string) =>
  useQuery(
    ["movie", movieId],
    async (_) => {
      const response = await axios.get<Movie>(`${apiUrl}&i=${movieId}`);
      return response.data;
    },
    { staleTime: 10 * 60 * 1000, enabled: !!movieId }
  );

export default useMovieDetailQuery;
