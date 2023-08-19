import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const useMoviesSearchParams = (): [
  string | undefined,
  (movieName?: string) => void
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => (searchParams.has("name") ? searchParams.get("name")! : undefined),
    [searchParams]
  );
  const setParams = useCallback(
    (movieName?: string) => {
      setSearchParams(movieName ? { name: movieName } : {});
    },
    [setSearchParams]
  );
  return [params, setParams];
};

export default useMoviesSearchParams;
