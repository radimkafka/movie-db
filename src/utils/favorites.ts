const favoriteMoviesStorageKey = "favorite-movies";

export function addToFavoriteMovies(id: string) {
  const favs = getFavoriteMovies();
  if (!favs.includes(id)) {
    return updateFavoriteMovies([...favs, id]);
  }
  return [];
}
export function removeFromFavoriteMovies(id: string) {
  const favs = getFavoriteMovies();
  if (favs.includes(id)) {
    return updateFavoriteMovies(favs.filter((a) => a !== id));
  }
  return [];
}

export function getFavoriteMovies(): string[] {
  const favs = JSON.parse(localStorage.getItem(favoriteMoviesStorageKey) ?? "null");
  if (isValueValid(favs)) return favs;
  return [];
}

export function isFavorite(id?: string) {
  return id ? getFavoriteMovies().includes(id) : false;
}

function updateFavoriteMovies(val: string[]) {
  localStorage.setItem(favoriteMoviesStorageKey, JSON.stringify(val));
  return val;
}

function isValueValid(value: unknown): value is Array<string> {
  return Array.isArray(value) && value.every((a) => typeof a === "string");
}
