import axios from "axios";
import { useQueries } from "react-query";
import { Movie } from "../types";
import { apiUrl } from "../api";
import useFavourites from "./useFavoriteMovies";

const useFavoriteMoviesQuery = () => {
  const { favoriteMovies } = useFavourites();

  return useQueries(
    favoriteMovies.map((a) => ({
      queryKey: ["movie", a],
      queryFn: async () => {
        const response = await axios.get<Movie>(`${apiUrl}&i=${a}`);
        return response.data;
      },
      staleTime: 5 * 60 * 1000,
    }))
  );
};

export default useFavoriteMoviesQuery;
