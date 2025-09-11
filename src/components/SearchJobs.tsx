import {
	FormInputSearchVariation,
	FormInputType,
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutContainerVariation,
	TypographyMetaVariation,
	TypographyTimeVariation,
	TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiFormInputSearch,
	DigiLayoutBlock,
	DigiLayoutContainer,
	DigiNavigationPagination,
	DigiTypography,
	DigiTypographyMeta,
	DigiTypographyPreamble,
	DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import { useState, useEffect } from "react";
import type { IJobAdBrief } from "../models/IJobAd";
import { getJobAds } from "../services/jobAdsService";
import { useSearchParams } from "react-router";

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
				console.log(data);
				setJobAds(data.hits);
				setTotalPages(Math.ceil(Number(data.total.value) / 10));
				setTotalResults(data.total.value);
			} catch (err) {
				console.error("Something went wrong: ", err);
			}
		};

		fetchJobAds();
	}, [page, searchInput]);

	const handlePageChange = (e: CustomEvent<number>) => {
		const newPage = e.detail;
		setSearchParams({ page: String(newPage) });
	};

	return (
		<>
			<DigiFormInputSearch
				afLabel="Sök efter jobbtitel eller nyckelord"
				afVariation={FormInputSearchVariation.LARGE}
				afType={FormInputType.SEARCH}
				afButtonText="Sök nu"
				afValue={searchInput}
				onAfOnChange={(e) => setSearchInput(String((e.target as HTMLDigiFormInputElement).value))}
			></DigiFormInputSearch>

			<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2>Sökresultat:</h2>
					{jobAds.map((job) => (
						<DigiLayoutBlock
							afVariation={LayoutBlockVariation.PRIMARY}
							afContainer={LayoutBlockContainer.FLUID}
							afVerticalPadding
							key={job.id}
						>
							<h3>{job.headline}</h3>
							<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
								<DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
								<p slot="secondary">
									Publicerad:{" "}
									<DigiTypographyTime
										afVariation={TypographyTimeVariation.PRETTY}
										afDateTime={job.publication_date}
									></DigiTypographyTime>
								</p>
							</DigiTypographyMeta>
						</DigiLayoutBlock>
					))}
				</DigiTypography>
			</DigiLayoutBlock>
			<DigiNavigationPagination
				afTotalPages={totalPages}
				afInitActivePage={1}
				afResultName="jobbannonser"
				afCurrentResultStart={1}
				afCurrentResultEnd={10}
				afTotalResults={totalResults}
				onAfOnPageChange={handlePageChange}
			></DigiNavigationPagination>
		</>
	);
};
