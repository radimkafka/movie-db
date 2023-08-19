import { useCallback, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { RecordType, isRecordType } from "../types";

export type MoviesSearchParams = {
  name?: string | undefined;
  page?: number;
  year?: number;
  type?: RecordType;
};

const useMoviesSearchParams = (): [
  MoviesSearchParams,
  (params?: MoviesSearchParams) => void
] => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo<MoviesSearchParams>(
    () => ({
      name: searchParams.has("name") ? searchParams.get("name")! : undefined,
      page: searchParams.has("page")
        ? Number(searchParams.get("page"))
        : undefined,
      year: searchParams.has("year")
        ? Number(searchParams.get("year"))
        : undefined,
      type: isRecordType(searchParams.get("type"))
        ? (searchParams.get("type") as RecordType)
        : undefined,
    }),
    [searchParams]
  );
  const setParams = useCallback(
    (params?: MoviesSearchParams) => {
      const newParams = params
        ? Object.fromEntries(
            Object.entries(params)
              .filter((a) => !!a[1])
              .map((a) => [a[0], a[1].toString()])
          )
        : undefined;
      setSearchParams(newParams);
    },
    [setSearchParams]
  );
  return [params, setParams];
};

export default useMoviesSearchParams;
