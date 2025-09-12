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

const getSavedJobIds = (): string[] => {
	return JSON.parse(localStorage.getItem("savedJobsNextStep") || "[]");
};

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	const [savedJobIds, setSavedJobIds] = useState<string[]>(getSavedJobIds());

	useEffect(() => {
		const onStorage = () => setSavedJobIds(getSavedJobIds());
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);

	const handleToggleSave = (job: IJobAdBrief) => {
		let updatedIds: string[];
		if (savedJobIds.includes(job.id)) {
			updatedIds = savedJobIds.filter((id) => id !== job.id);
		} else {
			updatedIds = [...savedJobIds, job.id];
		}

		setSavedJobIds(updatedIds);
		localStorage.setItem("savedJobsNextStep", JSON.stringify(updatedIds));
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
								<SaveJob isSaved={savedJobIds.includes(job.id)} toggleSaved={() => handleToggleSave(job)} />
							</div>
						</DigiLayoutColumns>
					</DigiLayoutBlock>
				))}
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
