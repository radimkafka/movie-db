import { Box, Typography } from "@mui/material";

type Props = { title: string; value?: string };
const MovieInfoRow = ({ title, value }: Props) =>
  value && value !== "N/A" ? (
    <Box display="flex">
      <Typography>{title}: </Typography>
      <Typography sx={{ color: (a) => a.palette.primary.main, pl: 1 }}>
        {value}
      </Typography>
    </Box>
  ) : null;
export default MovieInfoRow;
