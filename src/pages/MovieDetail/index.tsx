import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import MovieInfoRow from "./MovieInfoRow";
import useMovieDetailQuery from "../../hooks/useMovieDetailQuery";
import MovieRating from "./MovieRating";

const MovieDetail = () => {
  const { id } = useParams();
  const { data, isLoading } = useMovieDetailQuery(id);
  const navigate = useNavigate();

  if (isLoading) return <CircularProgress />;

  return (
    <Box m={2}>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton
            onClick={(_) => {
              navigate(-1);
            }}
          >
            <ArrowBackOutlinedIcon />
          </IconButton>
        </Grid>
        <Grid item md={11}>
          <Typography variant="h3">{data?.Title}</Typography>
        </Grid>
      </Grid>
      <Paper sx={{ p: 2 }}>
        <Grid container spacing={1}>
          {data?.Poster && data.Poster !== "N/A" && (
            <Grid item>
              <img src={data?.Poster} />
            </Grid>
          )}
          <Grid item xs={12} md={9}>
            <Grid item md={11}>
              <MovieInfoRow title="Country" value={data?.Country} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Year" value={data?.Year} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Genre" value={data?.Genre} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Runtime" value={data?.Runtime} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Language" value={data?.Language} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Director" value={data?.Director} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Actors" value={data?.Actors} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Awards" value={data?.Awards} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="BoxOffice" value={data?.BoxOffice} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="DVD" value={data?.DVD} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Metascore" value={data?.Metascore} />
            </Grid>
            <Grid item md={11}>
              <MovieInfoRow title="Rated" value={data?.Rated} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Released" value={data?.Released} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Website" value={data?.Website} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Writer" value={data?.Writer} />
            </Grid>
            <Grid item md={12}>
              <MovieInfoRow title="Votes" value={data?.imdbVotes} />
            </Grid>
          </Grid>

          <Grid item md={12}>
            <MovieRating ratings={data?.Ratings} />
          </Grid>

          {data?.Plot && data.Plot !== "N/A" && (
            <Grid item md={12}>
              <Typography variant="h6">Plot</Typography>
              <Typography>{data?.Plot}</Typography>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Box>
  );
};

export default MovieDetail;
