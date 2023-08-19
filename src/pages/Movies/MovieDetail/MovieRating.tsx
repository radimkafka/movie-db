import { Box, Rating, Tooltip, Typography } from "@mui/material";
import { MovieRating } from "../../../types";

type Props = { ratings?: MovieRating[] };

const convertRating = (rating: string) => {
  const a = rating.match(/(\d+[.,]\d+)\/10/);
  if (a) {
    console.log(rating, ": ", Number(a[1]));
    return Number(a[1]) / 2;
  }
  const b = rating.match(/(\d+)%/);
  if (b) {
    const value = Number(b[1]) / 10;
    console.log(rating, ": ", Number(value));
    return value / 2;
  }
  const c = rating.match(/(\d+)\/100/);
  if (c) {
    const value = Number(c[1]) / 10;
    console.log(rating, ": ", Number(value));
    return value / 2;
  }
  return 0;
};

const MovieRating = ({ ratings }: Props) => {
  return (
    <>
      {ratings?.map((a) => (
        <Box key={a.Source}>
          <Typography component="legend">{a.Source}</Typography>
          <Tooltip title={a.Value}>
            <Rating
              value={convertRating(a.Value)}
              precision={0.1}
              readOnly
              size="small"
            />
          </Tooltip>
        </Box>
      ))}
    </>
  );
};

export default MovieRating;
