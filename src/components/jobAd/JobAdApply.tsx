import {
	InfoCardHeadingLevel,
	InfoCardType,
	InfoCardVariation,
	InfoCardBorderPosition,
	LayoutContainerVariation,
} from "@digi/arbetsformedlingen";
import { DigiInfoCard, DigiLayoutContainer, DigiLinkExternal } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";
import { useScreenSize } from "../../hooks/useScreenSize";

type JobAdApplyProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdApply = ({ jobAd }: JobAdApplyProps) => {
	const { isMobile } = useScreenSize();

	return (
		<>
			<DigiLayoutContainer afNoGutter afVariation={LayoutContainerVariation.NONE} afVerticalPadding={true}>
				<DigiInfoCard
					afHeading="Gör en ansökan"
					afHeadingLevel={InfoCardHeadingLevel.H2}
					afType={isMobile ? InfoCardType.TIP : InfoCardType.RELATED}
					afVariation={InfoCardVariation.SECONDARY}
					hideVisitedColor={true}
					afBorderPosition={isMobile ? InfoCardBorderPosition.TOP : InfoCardBorderPosition.LEFT}
				>
					<DigiLayoutContainer afVariation={LayoutContainerVariation.NONE} afMarginTop={false}>
						{jobAd.application_details?.url && (
							<DigiLinkExternal afHref={jobAd.application_details.url} afTarget="_blank">
								Ansök via företagets webbplats
							</DigiLinkExternal>
						)}

						{!jobAd.application_details?.url && jobAd.application_details?.email && (
							<div>
								<h4>Ansök via e-post:</h4>
								<p>
									<a href={`mailto:${jobAd.application_details.email}`}>
										{jobAd.application_details.email}
									</a>
								</p>
							</div>
						)}
						<p>
							Ange referens <strong>{jobAd.application_details?.reference}</strong> i ansökan
						</p>
						<p>Ansök senast: {new Date(jobAd.application_deadline).toLocaleString("sv-SE")}</p>
					</DigiLayoutContainer>
				</DigiInfoCard>
			</DigiLayoutContainer>
		</>
	);
};
