import {
	InfoCardHeadingLevel,
	InfoCardType,
	InfoCardVariation,
	InfoCardBorderPosition,
} from "@digi/arbetsformedlingen";
import {
	DigiTypography,
	DigiInfoCard,
	DigiLayoutContainer,
	DigiMediaImage,
	DigiLinkExternal,
} from "@digi/arbetsformedlingen-react";
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
					<DigiLayoutContainer afVerticalPadding={true}>
						{jobAd.logo_url && (
							<DigiMediaImage
								afUnlazy
								afWidth="100"
								afSrc={jobAd.logo_url}
								afAlt={`Logotyp för ${jobAd.employer.name}`}
							/>
						)}
						<h3>{jobAd.employer.name}</h3>
						<p>{jobAd.employer.workplace}</p>
						<p>Ort: {jobAd.workplace_address.municipality}</p>
						<p>{jobAd.employer.email}</p>

						{jobAd.employer.url && (
							<DigiLinkExternal afHref={jobAd.employer.url} afTarget="_blank">
								Besök företaget hemsida
							</DigiLinkExternal>
						)}
					</DigiLayoutContainer>
					<DigiLayoutContainer afVerticalPadding={true}>
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
						<div>
							<p>Ansök senast: {new Date(jobAd.application_deadline).toLocaleString("sv-SE")}</p>
						</div>
					</DigiLayoutContainer>
				</DigiInfoCard>
			</DigiTypography>
		</>
	);
};
