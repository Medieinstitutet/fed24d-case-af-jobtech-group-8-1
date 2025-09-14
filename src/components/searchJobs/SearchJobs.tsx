import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getJobAds } from "../../services/jobAdsService";
import { getMunicipalitiesForQuery } from "../../services/locationsService";
import type { IJobAdBrief } from "../../models/IJobAd";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { SearchResults } from "./SearchResults";
import { LocationFilter } from "./locationFilter";

export const SearchJobs = () => {
	const [searchInput, setSearchInput] = useState("");
	const [jobAds, setJobAds] = useState<IJobAdBrief[]>([]);
	const [totalPages, setTotalPages] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const [municipalityOptions, setMunicipalityOptions] = useState<Array<{ id: string; name: string; count?: number }>>(
		[],
	);
	const [loadingMunicipalities, setLoadingMunicipalities] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = Number(searchParams.get("page")) || 1;
	const municipalityParam = searchParams.get("municipality") ?? "";

	const [page, setPage] = useState(pageParam);
	const [municipality, setMunicipality] = useState(municipalityParam);

	useEffect(() => setPage(pageParam), [pageParam]);
	useEffect(() => setMunicipality(municipalityParam), [municipalityParam]);

	useEffect(() => {
    const fetchJobAds = async () => {
      const data = await getJobAds({
        searchTerm: searchInput,
        page,
        municipalityId: municipality || undefined,
        limit: 10,
      });
      setJobAds(data.hits);
      const totalVal = Number(data.total?.value ?? 0);
      setTotalPages(Math.max(1, Math.ceil(totalVal / 10)));
      setTotalResults(totalVal);
    };
    fetchJobAds();
  }, [searchInput, page, municipality]);

	useEffect(() => {
		let cancelled = false;
		const run = async () => {
			setLoadingMunicipalities(true);
			try {
				const opts = await getMunicipalitiesForQuery(searchInput);
				if (!cancelled) setMunicipalityOptions(opts);
			} catch (e) {
				if (!cancelled) setMunicipalityOptions([]);
				console.error("Failed to fetch municipality options:", e);
			} finally {
				if (!cancelled) setLoadingMunicipalities(false);
			}
		};
		run();
		return () => {
			cancelled = true;
		};
	}, [searchInput]);

	const handlePageChange = (newPage: number) => {
		setSearchParams({
			page: String(newPage),
			...(municipality ? { municipality } : {}),
		});
	};

	const handleMunicipalityChange = (val: string) => {
		setSearchParams({
			page: "1",
			...(val ? { municipality: val } : {}),
		});
	};

	return (
		<>
			<SearchInput value={searchInput} onChange={setSearchInput} />

			<LocationFilter
				value={municipality}
				onChange={handleMunicipalityChange}
				options={municipalityOptions}
				disabled={loadingMunicipalities}
			/>

			<SearchResults jobs={jobAds} />
			<Pagination totalPages={totalPages} totalResults={totalResults} onPageChange={handlePageChange} />
		</>
	);
};

