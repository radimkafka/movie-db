import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/Movies/MovieDetail";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
  {
    path: "/:id",
    element: <MovieDetail />,
  },
]);
export default Router;
