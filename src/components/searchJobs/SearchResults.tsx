import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	TypographyVariation,
	TypographyMetaVariation,
	TypographyTimeVariation,
	LayoutColumnsElement,
	LayoutContainerVariation,
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
import { useSavedJobs } from "../../hooks/useSavedJobs";
import { NoResults } from "../NoResults";

type SearchResultsProps = {
	jobs: IJobAdBrief[];
};

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	const { isSaved, handleToggleSave } = useSavedJobs();

	if (jobs.length === 0) {
		return (
			<>
				<NoResults page="Sökresultat:" headline="Tyvärr hittade vi inga annonser för din sökning." message="Var vanlig försök igen med ett annat sök-ord."/>
			</>
		)
	}

	return (
		<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID} afMarginBottom afMarginTop>
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
						<DigiLink afHref={`/jobad/${job.id}`} hideVisitedColor>
							<h3>{job.headline}</h3>
						</DigiLink>
						<DigiLayoutContainer afNoGutter afMarginBottom afVariation={LayoutContainerVariation.FLUID}>
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
								<SaveJob isSaved={isSaved(job.id)} toggleSaved={() => handleToggleSave(job)} />
							</div>
						</DigiLayoutColumns>
					</DigiLayoutBlock>
				))}
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
