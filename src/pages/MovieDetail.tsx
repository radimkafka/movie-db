import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { id } = useParams();

  return <div>MovieDetail:{id}</div>;
};

export default MovieDetail;
