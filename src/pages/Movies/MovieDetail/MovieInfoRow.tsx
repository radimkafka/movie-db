import { Box, Typography } from "@mui/material";

type Props = { title: string; value?: string };
const MovieInfoRow = ({ title, value }: Props) => (
  <Box display="flex" pl={1}>
    <Typography>{title}: </Typography>
    <Typography sx={{ color: (a) => a.palette.primary.main, pl: 1 }}>
      {value}
    </Typography>
  </Box>
);
export default MovieInfoRow;
