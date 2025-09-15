import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { IJobAdBrief } from "../../models/IJobAd";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { SearchResults } from "./SearchResults";
import { LocationFilter } from "./LocationFilter";
import { getJobAds } from "../../services/jobAdsService";
import { getMunicipalitiesForQuery } from "../../services/municipalitiesService";

export const SearchJobs = () => {
  const [searchInput, setSearchInput] = useState("");
  const [jobAds, setJobAds] = useState<IJobAdBrief[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const [municipalityOptions, setMunicipalityOptions] = useState<Array<{ id: string; name: string }>>([]);
  const [loadingMunicipalities, setLoadingMunicipalities] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const pageParam = Number(searchParams.get("page")) || 1;
  const municipalityIdParam = searchParams.get("municipality") ?? "";

  const [page, setPage] = useState(pageParam);
  const [municipalityId, setMunicipalityId] = useState(municipalityIdParam);

  useEffect(() => setPage(pageParam), [pageParam]);
  useEffect(() => setMunicipalityId(municipalityIdParam), [municipalityIdParam]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoadingMunicipalities(true);
      try {
        const opts = await getMunicipalitiesForQuery(searchInput);
        if (!cancelled) {
          setMunicipalityOptions(opts.map(o => ({ id: o.id, name: o.name })));
        }
      } catch (e) {
        if (!cancelled) setMunicipalityOptions([]);
        console.error("Failed to fetch municipality options:", e);
      } finally {
        if (!cancelled) setLoadingMunicipalities(false);
      }
    })();
    return () => { cancelled = true; };
  }, [searchInput]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const data = await getJobAds({
          searchTerm: searchInput,
          page,
          municipalityId: municipalityId || undefined,
          limit: 10,
        });
        if (cancelled) return;
        setJobAds(Array.isArray(data?.hits) ? data.hits : []);
        const totalVal = Number(data?.total?.value ?? 0);
        setTotalPages(Math.max(1, Math.ceil(totalVal / 10)));
        setTotalResults(totalVal);
      } catch (err) {
        if (!cancelled) {
          setJobAds([]);
          setTotalPages(1);
          setTotalResults(0);
        }
        console.error("Failed to fetch job ads:", err);
      }
    })();
    return () => { cancelled = true; };
  }, [searchInput, page, municipalityId]);

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: String(newPage), ...(municipalityId ? { municipality: municipalityId } : {}) });
  };

  const handleMunicipalityChange = (val: string) => {
    setSearchParams({ page: "1", ...(val ? { municipality: val } : {}) });
  };

  return (
    <>
      <SearchInput value={searchInput} onChange={setSearchInput} />

      <LocationFilter
        value={municipalityId}
        onChange={handleMunicipalityChange}
        options={municipalityOptions}
        disabled={loadingMunicipalities}
      />

      <SearchResults jobs={jobAds} />
      <Pagination totalPages={totalPages} totalResults={totalResults} onPageChange={handlePageChange} />
    </>
  );
};




