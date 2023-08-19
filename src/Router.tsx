import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";

const Router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Movies />,
    },
    {
      path: "/:id",
      element: <MovieDetail />,
    },
  ],
  { basename: import.meta.env.DEV ? "/" : "/movie-db/" }
);
export default Router;
