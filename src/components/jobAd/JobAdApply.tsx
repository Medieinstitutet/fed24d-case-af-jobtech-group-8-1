import {
	InfoCardHeadingLevel,
	InfoCardType,
	InfoCardVariation,
	InfoCardBorderPosition,
	LayoutContainerVariation,
} from "@digi/arbetsformedlingen";
import { DigiTypography, DigiInfoCard, DigiLayoutContainer, DigiLinkExternal } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";

type JobAdApplyProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdApply = ({ jobAd }: JobAdApplyProps) => {
	return (
		<>
			<DigiTypography>
				<DigiInfoCard
					afHeading="Gör en ansökan"
					afHeadingLevel={InfoCardHeadingLevel.H2}
					afType={InfoCardType.RELATED}
					afVariation={InfoCardVariation.SECONDARY}
					afBorderPosition={InfoCardBorderPosition.LEFT}
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
						<span>
							Ange referens <strong>{jobAd.application_details?.reference}</strong> i ansökan
						</span>
						<p>Ansök senast: {new Date(jobAd.application_deadline).toLocaleString("sv-SE")}</p>
					</DigiLayoutContainer>
				</DigiInfoCard>
			</DigiTypography>
		</>
	);
};
