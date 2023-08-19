import { useLocation, useNavigate, useParams } from "react-router-dom";
import { CircularProgress, Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MovieInfoRow from "./MovieInfoRow";
import useMovieDetailQuery from "../../hooks/useMovieDetailQuery";
import MovieRating from "./MovieRating";
import { addToFavoriteMovies, isFavorite, removeFromFavoriteMovies } from "../../utils/favorites";
import { useState } from "react";
import FavoriteButton from "../../components/FavoriteButton";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieDetailQuery(id);
  const navigate = useNavigate();
  const location = useLocation();
  const [favorite, setFavorite] = useState(isFavorite(id));

  if (isLoading) return <CircularProgress />;

  const handleFavouriteClick = () => {
    if (!id) return;

    if (favorite) {
      removeFromFavoriteMovies(id);
    } else {
      addToFavoriteMovies(id);
    }
    setFavorite((a) => !a);
  };

  return (
    <>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton
            onClick={(_) => {
              if (location.key !== "default") {
                navigate(-1);
              } else {
                navigate({ pathname: "/" });
              }
            }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography variant="h3">{data?.Title}</Typography>
        </Grid>
        <Grid item>
          <FavoriteButton onClick={handleFavouriteClick} size="large" favorite={favorite} />
        </Grid>
      </Grid>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={1}>
          {data?.Poster && data.Poster !== "N/A" && (
            <Grid item>
              <img src={data?.Poster} />
            </Grid>
          )}
          <Grid item>
            <Grid item xs={12}>
              <MovieInfoRow title="Country" value={data?.Country} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Year" value={data?.Year} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Genre" value={data?.Genre} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Runtime" value={data?.Runtime} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Language" value={data?.Language} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Director" value={data?.Director} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Actors" value={data?.Actors} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Awards" value={data?.Awards} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="BoxOffice" value={data?.BoxOffice} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="DVD" value={data?.DVD} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Metascore" value={data?.Metascore} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Rated" value={data?.Rated} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Released" value={data?.Released} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Website" value={data?.Website} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Writer" value={data?.Writer} />
            </Grid>
            <Grid item xs={12}>
              <MovieInfoRow title="Votes" value={data?.imdbVotes} />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <MovieRating ratings={data?.Ratings} />
          </Grid>
          {data?.Plot && data.Plot !== "N/A" && (
            <Grid item xs={12}>
              <Typography variant="h6">Plot</Typography>
              <Typography>{data?.Plot}</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </>
  );
};

export default MovieDetail;
