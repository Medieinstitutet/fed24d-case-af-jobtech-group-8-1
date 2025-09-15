import {
	LayoutBlockVariation,
	LayoutBlockContainer,
	TypographyVariation,
	TypographyMetaVariation,
	TypographyTimeVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLink,
	DigiTypography,
	DigiTypographyMeta,
	DigiTypographyPreamble,
	DigiTypographyTime,
} from "@digi/arbetsformedlingen-react";
import type { IJobAdBrief } from "../../models/IJobAd";

type SearchResultsProps = {
	jobs: IJobAdBrief[];
};

export const SearchResults = ({ jobs }: SearchResultsProps) => {
	return (
		<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
			<DigiTypography afVariation={TypographyVariation.LARGE}>
				<h2>Sökresultat:</h2>
				{jobs.map((job) => (
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
						<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
							<DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
							<p slot="secondary">
								Publicerad:{" "}
								<DigiTypographyTime
									afVariation={TypographyTimeVariation.PRETTY}
									afDateTime={job.publication_date}
								/>
							</p>
						</DigiTypographyMeta>
					</DigiLayoutBlock>
				))}
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
