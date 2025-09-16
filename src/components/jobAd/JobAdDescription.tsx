import { DigiLayoutContainer, DigiTypography, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";
import { LayoutContainerVariation } from "@digi/arbetsformedlingen";

type JobAdDescriptionProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdDescription = ({ jobAd }: JobAdDescriptionProps) => {
	return (
		<>
			<DigiTypography>
				<DigiLayoutContainer
					afVerticalPadding={false}
					afVariation={LayoutContainerVariation.NONE}
					afMarginBottom={true}
				>
					<h2>Om tjänsten</h2>
					{jobAd.description?.text_formatted ? (
						<div dangerouslySetInnerHTML={{ __html: jobAd.description.text_formatted }}></div>
					) : (
						<p>Ingen beskrivning tillgänglig</p>
					)}
				</DigiLayoutContainer>
				<DigiLayoutContainer
					afVerticalPadding={true}
					afVariation={LayoutContainerVariation.NONE}
					afMarginTop={true}
				>
					<DigiTypographyMeta afVariation="primary">
						<p>Publicerad:</p>
						<p slot="secondary">{new Date(jobAd.publication_date).toLocaleDateString("sv-SE")}</p>
					</DigiTypographyMeta>
				</DigiLayoutContainer>
			</DigiTypography>
		</>
	);
};
