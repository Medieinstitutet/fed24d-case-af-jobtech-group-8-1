import { DigiInfoCard, DigiLayoutContainer, DigiLinkExternal, DigiMediaImage } from "@digi/arbetsformedlingen-react";
import {
	InfoCardBorderPosition,
	InfoCardHeadingLevel,
	InfoCardType,
	InfoCardVariation,
	LayoutContainerVariation,
} from "@digi/arbetsformedlingen";
import { useScreenSize } from "../../hooks/useScreenSize";
import { useJobAdContext } from "../../contexts/JobAdContext";

export const JobAdEmployer = () => {
	const { jobAd } = useJobAdContext();
	const { isMobile } = useScreenSize();

	return (
		<>
			<DigiLayoutContainer afNoGutter afVariation={LayoutContainerVariation.NONE} afVerticalPadding={true}>
				<DigiInfoCard
					afHeading="Om företaget"
					afHeadingLevel={InfoCardHeadingLevel.H2}
					afType={InfoCardType.RELATED}
					afVariation={InfoCardVariation.SECONDARY}
					hideVisitedColor={true}
					afBorderPosition={isMobile ? InfoCardBorderPosition.TOP : InfoCardBorderPosition.LEFT}
				>
					{jobAd.logo_url && (
						<DigiMediaImage
							afUnlazy
							afWidth="100"
							afSrc={jobAd.logo_url}
							afAlt={`Logotyp för ${jobAd.employer.name}`}
						/>
					)}
					<DigiLayoutContainer afVariation={LayoutContainerVariation.NONE} afMarginTop={false}>
						<h3>{jobAd.employer.name}</h3>
						<p>{jobAd.employer.workplace}</p>

						<DigiLayoutContainer
							afVariation={LayoutContainerVariation.NONE}
							afMarginTop={true}
							afMarginBottom={true}
						>
							<h4>{jobAd.workplace_address.street_address?.trim() ? "Adress" : "Plats"}</h4>

							{jobAd.workplace_address.street_address?.trim() ? (
								<>
									<span>{jobAd.workplace_address.street_address}</span>
									<br />
									<span>
										{jobAd.workplace_address.postcode} {jobAd.workplace_address.city}
									</span>
								</>
							) : (
								<span>
									{jobAd.workplace_address.city?.trim() && jobAd.workplace_address.region?.trim()
										? `${jobAd.workplace_address.city.trim()}, ${jobAd.workplace_address.region.trim()}`
										: jobAd.workplace_address.city?.trim() ||
											jobAd.workplace_address.region?.trim() ||
											"Plats saknas"}
								</span>
							)}
						</DigiLayoutContainer>

						<DigiLayoutContainer afVariation={LayoutContainerVariation.NONE} afMarginTop={true}>
							{jobAd.employer.url && (
								<DigiLinkExternal afHref={jobAd.employer.url} afTarget="_blank">
									Besök företages webbplats
								</DigiLinkExternal>
							)}
						</DigiLayoutContainer>
					</DigiLayoutContainer>
				</DigiInfoCard>
			</DigiLayoutContainer>
		</>
	);
};
