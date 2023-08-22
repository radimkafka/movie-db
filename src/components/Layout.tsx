import { AppBar, Box, Button, IconButton, Link, Theme, Toolbar, useMediaQuery } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { useColorMode } from "../providers/ColorModeProvider";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import GitHubIcon from "@mui/icons-material/GitHub";

const Layout = () => {
  const colorMode = useColorMode();
  const navigate = useNavigate();
  const xs = useMediaQuery<Theme>((a) => a.breakpoints.only("xs"));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <Button variant="text" color="inherit" onClick={(_) => navigate("/")}>
              Search
            </Button>
          </Box>

          <Box sx={{ flexGrow: 1 }}>
            <Button variant="text" color="inherit" onClick={(_) => navigate("/favorites")}>
              Favorites
            </Button>
          </Box>

          <Box>
            <Link href="https://github.com/radimkafka/movie-db" target="_blank" rel="noreferrer">
              <IconButton sx={{ color: (t) => t.palette.common.white }}>
                <GitHubIcon />
              </IconButton>
            </Link>
          </Box>
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggle} color="inherit">
              {colorMode.mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ m: xs ? 1 : 2 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
