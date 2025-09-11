import { useState, useEffect } from "react";
import { useSearchParams } from "react-router";
import { getJobAds } from "../../services/jobAdsService";
import type { IJobAdBrief } from "../../models/IJobAd";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { SearchResults } from "./SearchResults";

export const SearchJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [jobAds, setJobAds] = useState<IJobAdBrief[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(pageParam);

  useEffect(() => {
    setPage(pageParam);
  }, [pageParam]);

  useEffect(() => {
    const fetchJobAds = async () => {
      try {
        const data = await getJobAds(searchInput, page);
        setJobAds(data.hits);
        setTotalPages(Math.ceil(Number(data.total.value) / 10));
        setTotalResults(data.total.value);
      } catch (err) {
        console.error("Something went wrong: ", err);
      }
    };

    fetchJobAds();
  }, [page, searchInput]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage) });
  };

  return (
    <>
      <SearchInput value={searchInput} onChange={setSearchInput} />
      <SearchResults jobs={jobAds} />
      <Pagination totalPages={totalPages} totalResults={totalResults} onPageChange={handlePageChange} />
    </>
  );
};
