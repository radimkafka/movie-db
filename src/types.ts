import { GridColDef, GridValidRowModel } from "@mui/x-data-grid";

export type GetMoviesResult = {
  totalResults: string;
  Search: MovieInfo[];
};

export type MovieInfo = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

export type Movie = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

export type Rating = {
  Source: string;
  Value: string;
};

export type TGridColDef<T extends GridValidRowModel = any> = Omit<
  GridColDef<T>,
  "field"
> & {
  field: keyof T;
};
