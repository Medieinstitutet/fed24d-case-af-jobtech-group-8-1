import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	TypographyVariation,
	TypographyTimeVariation,
	LayoutContainerVariation,
	TypographyMetaVariation,
	LayoutColumnsElement,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutContainer,
	DigiLink,
	DigiTypography,
	DigiTypographyMeta,
	DigiTypographyPreamble,
	DigiTypographyTime,
	DigiLayoutColumns,
} from "@digi/arbetsformedlingen-react";
import type { IJobAdBrief } from "../../models/IJobAd";
import { useSavedJobs } from "../../hooks/useSavedJobs";
import { SaveJob } from "./SaveJob";
import { ResultPresentation } from "./ResultPresentation";

type SearchResultsProps = { jobs: IJobAdBrief[] };

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	const { isSaved, handleToggleSave } = useSavedJobs();

	return (
		<>
			<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2 style={{ marginTop: 0 }}>Sökresultat:</h2>
				</DigiTypography>
			</DigiLayoutBlock>

			<div data-react-owned style={{ display: "grid", gap: "1rem" }}>
				{jobs.map((job) => (
					<div key={job.id}>
						<DigiLayoutBlock
							afVariation={LayoutBlockVariation.SECONDARY}
							afContainer={LayoutBlockContainer.FLUID}
							afVerticalPadding
							afMarginBottom
						>
							<DigiTypography /* afVariation={TypographyVariation.PRIMARY} valfritt */>
								<DigiLink afHref="#" hideVisitedColor>
									<h3 style={{ marginTop: 0 }}>{job.headline}</h3>
								</DigiLink>

								<DigiLayoutContainer
									afNoGutter
									afMarginBottom
									afVariation={LayoutContainerVariation.FLUID}
								>
									<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
										<DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
										<p slot="secondary">{job.workplace_address?.municipality ?? "—"}</p>
									</DigiTypographyMeta>
								</DigiLayoutContainer>

								<DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
									<p style={{ margin: 0 }}>
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
							</DigiTypography>
						</DigiLayoutBlock>
						<ResultPresentation key={job.id} job={job} getIsSaved={isSaved} handleSaveBtn={handleToggleSave} />
					</div>
				))}
			</div>
		</>
	);
};

