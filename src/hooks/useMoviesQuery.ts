import axios from "axios";
import { useQuery } from "react-query";
import { GetMoviesResult, RecordType } from "../types";
import { apiUrl } from "../api";

const useMoviesQuery = (searchText?: string, year?: number, type?: RecordType, page?: number) =>
  useQuery(
    ["movies", searchText, , year, type, page],
    async (_) => {
      let url = apiUrl;
      if (searchText) {
        url += `&s=${searchText}`;
      }
      if (year) {
        url += `&y=${year}`;
      }
      if (page) {
        url += `&page=${page ?? 0}`;
      }
      if (type) {
        url += `&type=${type}`;
      }
      const response = await axios.get<GetMoviesResult>(url);
      return response.data;
    },
    { staleTime: 5 * 60 * 1000, keepPreviousData: true, enabled: !!searchText }
  );

export default useMoviesQuery;
