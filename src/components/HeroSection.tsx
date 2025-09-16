import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
	TypographyHeadingJumboLevel,
	TypographyHeadingJumboVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiMediaImage,
	DigiTypography,
	DigiTypographyHeadingJumbo,
	DigiTypographyPreamble,
} from "@digi/arbetsformedlingen-react";

import hero_img from "../assets/hero_img.svg";
import { useScreenSize } from "../hooks/useScreensize";
import { useEffect, useState } from "react";
 
export const HeroSection = () => {

	const [mobile, setMobile] = useState(false);
	const { isMobile } = useScreenSize();

	useEffect(() => {
		const changeSize = () => {
			setMobile(isMobile);
		}

		changeSize();
	}, [isMobile]);

	return (
		<DigiLayoutBlock
			afVariation={LayoutBlockVariation.TERTIARY}
			afVerticalPadding
			afContainer={LayoutBlockContainer.FLUID}
		>
			<DigiTypographyHeadingJumbo
				afText="NextStep"
				afLevel={TypographyHeadingJumboLevel.H1}
				afVariation={TypographyHeadingJumboVariation.SECONDARY}
			></DigiTypographyHeadingJumbo>
			<div>
				{mobile && (
					<>
						<DigiTypography>
							<DigiTypographyPreamble>
								NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i jobbdjungeln.
								Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta annonser för juniora roller,
								praktikplatser och första-jobb inom olika branscher.
							</DigiTypographyPreamble>
						</DigiTypography>
						<DigiMediaImage afSrc={hero_img} afHeight="500" afWidth="500" afAlt="Illustration av en man som håller en kikare"/>
					</>
				)}
				{!mobile && (
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						<DigiTypography>
							<DigiTypographyPreamble>
								NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i jobbdjungeln.
								Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta annonser för juniora roller,
								praktikplatser och första-jobb inom olika branscher.
							</DigiTypographyPreamble>
						</DigiTypography>
						<DigiMediaImage afSrc={hero_img} afHeight="500" afWidth="500" afAlt="Illustration av en man som håller en kikare"/>
					</DigiLayoutColumns>
				)}
			</div>
		</DigiLayoutBlock>
	);
};
