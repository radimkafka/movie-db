const favoriteMoviesStorageKey = "favorite-movies";

export function addToFavoriteMovies(id: string) {
  const favs = getFavourites();
  if (!favs.includes(id)) {
    updateFavoriteMovies([...favs, id]);
  }
}
export function removeFromFavoriteMovies(id: string) {
  const favs = getFavourites();
  if (favs.includes(id)) {
    updateFavoriteMovies(favs.filter((a) => a !== id));
  }
}

export function getFavourites(): string[] {
  const favs = JSON.parse(localStorage.getItem(favoriteMoviesStorageKey) ?? "null");
  if (isValueValid(favs)) return favs;
  return [];
}

export function isFavorite(id?: string) {
  return id ? getFavourites().includes(id) : false;
}

function updateFavoriteMovies(val: string[]) {
  localStorage.setItem(favoriteMoviesStorageKey, JSON.stringify(val));
}

function isValueValid(value: unknown): value is Array<string> {
  return Array.isArray(value) && value.every((a) => typeof a === "string");
}
