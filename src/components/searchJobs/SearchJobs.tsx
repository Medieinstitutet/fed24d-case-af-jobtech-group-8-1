import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import type { IJobAdBrief } from "../../models/IJobAd";
import { SearchInput } from "./SearchInput";
import { Pagination } from "./Pagination";
import { SearchResults } from "./SearchResults";
import { LocationFilter } from "./LocationFilter";
import { getJobAds } from "../../services/jobAdsService";
import { getAllMunicipalities, type MunicipalityOption } from "../../services/municipalitiesService";
import { DigiLayoutBlock, DigiLayoutColumns, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
	LayoutContainerMaxWidth,
	LayoutContainerVariation,
} from "@digi/arbetsformedlingen";

export const SearchJobs = () => {
	const [searchInput, setSearchInput] = useState("");
	const [jobAds, setJobAds] = useState<IJobAdBrief[]>([]);
	const [totalPages, setTotalPages] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const [municipalityOptions, setMunicipalityOptions] = useState<MunicipalityOption[]>([]);
	const [loadingMunicipalities, setLoadingMunicipalities] = useState(false);

	const [searchParams, setSearchParams] = useSearchParams();
	const pageParam = Number(searchParams.get("page")) || 1;
	const municipalityIdParam = searchParams.get("municipality") ?? "";

	const [page, setPage] = useState(pageParam);
	const [municipalityId, setMunicipalityId] = useState(municipalityIdParam);

	useEffect(() => setPage(pageParam), [pageParam]);
	useEffect(() => setMunicipalityId(municipalityIdParam), [municipalityIdParam]);

	const debouncedQuery = useDebouncedValue(searchInput, 300);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			setLoadingMunicipalities(true);
			try {
				const list = await getAllMunicipalities();
				if (!cancelled) setMunicipalityOptions(list);
			} catch {
				if (!cancelled) setMunicipalityOptions([]);
			} finally {
				if (!cancelled) setLoadingMunicipalities(false);
			}
		})();
		return () => {
			cancelled = true;
		};
	}, []);

	useEffect(() => {
		const current = Number(searchParams.get("page") || 1);
		if (current !== 1) {
			setSearchParams(
				{ page: "1", ...(municipalityId ? { municipality: municipalityId } : {}) },
				{ replace: true },
			);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [debouncedQuery]);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			const data = await getJobAds({
				searchTerm: debouncedQuery,
				page,
				municipalityId: municipalityId || undefined,
				limit: 10,
			});
			if (cancelled) return;

			setJobAds(Array.isArray(data?.hits) ? data.hits : []);
			const totalVal = Number(data?.total?.value ?? 0);
			setTotalPages(Math.max(1, Math.ceil(totalVal / 10)));
			setTotalResults(totalVal);
		})().catch(() => {
			if (!cancelled) {
				setJobAds([]);
				setTotalPages(1);
				setTotalResults(0);
			}
		});
		return () => {
			cancelled = true;
		};
	}, [debouncedQuery, page, municipalityId]);

	const handlePageChange = (newPage: number) => {
		setSearchParams({ page: String(newPage), ...(municipalityId ? { municipality: municipalityId } : {}) });
	};

	const handleMunicipalityChange = (val: string) => {
		setSearchParams({ page: "1", ...(val ? { municipality: val } : {}) });
	};

	return (
		<>
			<DigiLayoutBlock
				afVariation={LayoutBlockVariation.TRANSPARENT}
				afContainer={LayoutBlockContainer.FLUID}
				afVerticalPadding
				afMarginTop
			>
				<DigiLayoutContainer
					afVariation={LayoutContainerVariation.STATIC}
					afNoGutter
					afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
				>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO} className="search-columns">
						<LocationFilter
							value={municipalityId}
							onChange={handleMunicipalityChange}
							options={municipalityOptions}
						/>
					  <SearchInput value={searchInput} onChange={setSearchInput} />
					</DigiLayoutColumns>
				</DigiLayoutContainer>
			</DigiLayoutBlock>
			{loadingMunicipalities && <p style={{ marginTop: 8 }}>Laddar kommuner …</p>}

			<SearchResults jobs={jobAds} />

			{jobAds.length > 0 && (
				<Pagination totalPages={totalPages} totalResults={totalResults} onPageChange={handlePageChange} />
			)}
		</>
	);
};

function useDebouncedValue<T>(value: T, delayMs: number) {
	const [debounced, setDebounced] = useState(value);
	useEffect(() => {
		const t = setTimeout(() => setDebounced(value), delayMs);
		return () => clearTimeout(t);
	}, [value, delayMs]);
	return debounced;
}
