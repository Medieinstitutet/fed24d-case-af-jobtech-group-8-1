import { LayoutBlockVariation, LayoutBlockContainer, TypographyVariation, LayoutContainerVariation, LayoutContainerMaxWidth } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import type { IJobAdBrief } from "../../models/IJobAd";
import { useSavedJobs } from "../../hooks/useSavedJobs";
import { ResultPresentation } from "./ResultPresentation";
import { NoResults } from "../NoResults";

type SearchResultsProps = { jobs: IJobAdBrief[] };

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	const { isSaved, handleToggleSave } = useSavedJobs();

	if (jobs.length === 0) {
		return (
			<DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC} afNoGutter afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}>
				<NoResults
					page="Sökresultat:"
					headline="Tyvärr hittade vi inga annonser för din sökning."
					message="Var vanlig försök igen med ett annat sök-ord."
				/>
			</DigiLayoutContainer>
		);
	}

	return (
		<>
			<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
				<DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC} afNoGutter afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}>
					<DigiTypography afVariation={TypographyVariation.LARGE}>
						<h2 style={{ marginTop: 0 }}>Sökresultat:</h2>
						<div data-react-owned style={{ display: "grid", gap: "1rem" }}>
							{jobs.map((job) => (
								<ResultPresentation
									key={job.id}
									job={job}
									getIsSaved={isSaved}
									handleSaveBtn={handleToggleSave}
								/>
							))}
						</div>
					</DigiTypography>	
				</DigiLayoutContainer>
			</DigiLayoutBlock>
		</>
	);
};
