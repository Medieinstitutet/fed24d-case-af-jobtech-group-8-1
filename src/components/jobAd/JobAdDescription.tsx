import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
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
					afVariation={LayoutContainerVariation.FLUID}
					afMarginTop={true}
					afMarginBottom={true}
					afNoGutter
				>
					<h2>Om tjänsten</h2>
					{jobAd.description?.text_formatted ? (
						<div dangerouslySetInnerHTML={{ __html: jobAd.description.text_formatted }}></div>
					) : (
						<p>Ingen beskrivning tillgänglig</p>
					)}
				</DigiLayoutContainer>
			</DigiTypography>
		</>
	);
};
