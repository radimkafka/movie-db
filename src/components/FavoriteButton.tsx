import { IconButton } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

type Props = {
  favorite: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: "small" | "medium" | "large";
};

const FavoriteButton = ({ favorite, onClick, size }: Props) => (
  <IconButton onClick={onClick} size={size}>
    {favorite ? <StarOutlinedIcon sx={{ color: (a) => a.palette.warning.main }} /> : <StarBorderOutlinedIcon />}
  </IconButton>
);
export default FavoriteButton;
