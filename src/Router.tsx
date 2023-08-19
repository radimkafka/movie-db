import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import FavoriteMovies from "./pages/FavoriteMovies";
import Layout from "./components/Layout";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Movies /> },
        {
          path: "/favorites",
          element: <FavoriteMovies />,
        },
        {
          path: "/:id",
          element: <MovieDetail />,
        },
      ],
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/movie-db/" }
);
export default Router;
