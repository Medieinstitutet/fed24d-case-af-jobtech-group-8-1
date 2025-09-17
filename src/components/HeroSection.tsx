import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
	LayoutContainerMaxWidth,
	LayoutContainerVariation,
	TypographyHeadingJumboLevel,
	TypographyHeadingJumboVariation,
	TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiLayoutContainer,
	DigiMediaImage,
	DigiTypography,
	DigiTypographyHeadingJumbo,
} from "@digi/arbetsformedlingen-react";

import hero_img from "../assets/hero_img_light.svg";
import { useScreenSize } from "../hooks/useScreenSize";
import type { CSSProperties } from "react";

export const HeroSection = () => {
	const { isMobile } = useScreenSize();

	const infoText = (
		<DigiTypography
		  afVariation={TypographyVariation.LARGE}
			  style={
				  {
					    "--digi--typography--color--text": "#ffffff",
				    } as CSSProperties
				  }
				>
			<p>
				NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i jobbdjungeln.
				Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta annonser för juniora roller,
				praktikplatser och första-jobb inom olika branscher.
			</p>
		</DigiTypography>
	);

	const illustration = (
		<>
			<DigiMediaImage afSrc={hero_img} afWidth="400" afAlt="Illustration av en man som håller en kikare" />
		</>
	);


	return (
		<DigiLayoutBlock
			className="ns-hero"
			afVariation={LayoutBlockVariation.TERTIARY}
			afVerticalPadding
			afContainer={LayoutBlockContainer.FLUID}
			style={
				{
					"--digi--layout-block--background--tertiary": "#267e5b",
				} as CSSProperties
			}
		>
			<DigiLayoutContainer
				afVariation={LayoutContainerVariation.STATIC}
				afNoGutter
				afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
			>
				<DigiTypographyHeadingJumbo
				afText="NextStep"
				afLevel={TypographyHeadingJumboLevel.H1}
				afVariation={TypographyHeadingJumboVariation.SECONDARY}
				style={
					  {
						  "--digi--grayscale-0": "#ffffff",
					  } as CSSProperties
				  }
			  />
        <div>
				{mobile ? (
					<>
							{infoText}
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-start",
									margin: "5rem 0",
								}}
							>
								{illustration}
							</div>
						</>
				) : (
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						{infoText}
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "flex-start",
									marginBottom: "5rem",
								}}
							>
								{illustration}
							</div>
					</DigiLayoutColumns>
				)}
			</div>
			</DigiLayoutContainer>
		</DigiLayoutBlock>
	);
};

