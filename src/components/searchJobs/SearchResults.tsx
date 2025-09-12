import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	TypographyVariation,
	TypographyMetaVariation,
	TypographyTimeVariation,
	LayoutColumnsElement,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiLayoutContainer,
	DigiLink,
	DigiTypography,
	DigiTypographyMeta,
	DigiTypographyPreamble,
	DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import type { IJobAdBrief } from "../../models/IJobAd";
import { SaveJob } from "./SaveJob";
import { useEffect, useState } from "react";

type SearchResultsProps = {
	jobs: IJobAdBrief[];
};

const LOCAL_KEY = "savedJobsNextStep";

const getSavedJobs = (): IJobAdBrief[] => {
	return JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
};

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	const [savedJobs, setSavedJobs] = useState<IJobAdBrief[]>(getSavedJobs());

	useEffect(() => {
		const onStorage = () => setSavedJobs(getSavedJobs());
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);

	const handleToggleSave = (job: IJobAdBrief) => {
		let updatedJobs: IJobAdBrief[];
		if (savedJobs.some(j => j.id === job.id)) {
			updatedJobs = savedJobs.filter((j) => j.id !== job.id);
		} else {
			updatedJobs = [...savedJobs, job];
		}

		setSavedJobs(updatedJobs);
		localStorage.setItem(LOCAL_KEY, JSON.stringify(updatedJobs));
	};

	return (
		<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
			<DigiTypography afVariation={TypographyVariation.LARGE}>
				<h2>Sökresultat:</h2>
				{jobs.map((job) => (
					// Om det ska vara genomskinliga kan vi ändra till <DigiLayoutContainer afNoGutter afVerticalPadding key={job.id}> + margins om vi vill
					<DigiLayoutBlock
						afVariation={LayoutBlockVariation.SECONDARY}
						afContainer={LayoutBlockContainer.FLUID}
						afVerticalPadding
						afMarginBottom
						key={job.id}
					>
						<DigiLink afHref="#" hideVisitedColor>
							<h3>{job.headline}</h3>
						</DigiLink>
						<DigiLayoutContainer afNoGutter afMarginBottom>
							<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
								<DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
								<p slot="secondary">{job.workplace_address.municipality}</p>
							</DigiTypographyMeta>
						</DigiLayoutContainer>
						<DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
							<p>
								Publicerad:{" "}
								<DigiTypographyTime
									afVariation={TypographyTimeVariation.PRETTY}
									afDateTime={job.publication_date}
								/>
							</p>
							<div style={{ marginLeft: "auto", justifySelf: "end", textAlign: "right" }}>
								<SaveJob isSaved={savedJobs.some((j) => j.id === job.id)} toggleSaved={() => handleToggleSave(job)} />
							</div>
						</DigiLayoutColumns>
					</DigiLayoutBlock>
				))}
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
