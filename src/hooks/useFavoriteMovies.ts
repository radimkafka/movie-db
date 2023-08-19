import { useEffect, useState } from "react";
import { addToFavoriteMovies, getFavoriteMovies, removeFromFavoriteMovies } from "../utils/favorites";

const useFavourites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(getFavoriteMovies());

  useEffect(() => {
    const fn = (e: StorageEvent) => {
      if (e.storageArea === localStorage) {
        setFavoriteMovies(getFavoriteMovies);
      }
    };

    window.addEventListener("storage", fn, false);
    return () => {
      window.removeEventListener("storage", fn);
    };
  }, [setFavoriteMovies]);

  const isFavorite = (id: string) => favoriteMovies.includes(id);

  const update = (id: string) => {
    const updated = isFavorite(id) ? removeFromFavoriteMovies(id) : addToFavoriteMovies(id);
    setFavoriteMovies(updated);
  };

  return { favoriteMovies, isFavorite, update };
};

export default useFavourites;
