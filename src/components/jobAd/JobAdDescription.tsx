import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { useJobAdContext } from "../../contexts/JobAdContext";

export const JobAdDescription = () => {
	const { jobAd } = useJobAdContext();

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
