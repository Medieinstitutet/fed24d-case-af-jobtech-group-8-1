import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	LayoutColumnsElement,
	LayoutColumnsVariation,
	TypographyHeadingJumboLevel,
	TypographyHeadingJumboVariation,
	TypographyVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiLayoutColumns,
	DigiMediaImage,
	DigiTypography,
	DigiTypographyHeadingJumbo,
} from "@digi/arbetsformedlingen-react";

import hero_img from "../assets/hero_img.svg";
import { useScreenSize } from "../hooks/useScreenSize";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

export const HeroSection = () => {
	const [mobile, setMobile] = useState(false);
	const { isMobile } = useScreenSize();

	useEffect(() => {
		setMobile(isMobile);
	}, [isMobile]);

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
						<DigiTypography
							afVariation={TypographyVariation.LARGE}
							style={
								{
									"--digi--typography--color--text": "#ffffff",
								} as CSSProperties
							}
						>
							<p>
								NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i
								jobbdjungeln. Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta
								annonser för juniora roller, praktikplatser och första-jobb inom olika branscher.
							</p>
						</DigiTypography>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "flex-start",
								margin: "5rem 0",
							}}
						>
							<DigiMediaImage
								afSrc={hero_img}
								afWidth="500"
								afAlt="Illustration av en man som håller en kikare"
							/>
						</div>
					</>
				) : (
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						<DigiTypography
							afVariation={TypographyVariation.LARGE}
							style={
								{
									"--digi--typography--color--text": "#ffffff",
								} as CSSProperties
							}
						>
							<p>
								NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i
								jobbdjungeln. Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta
								annonser för juniora roller, praktikplatser och första-jobb inom olika branscher.
							</p>
						</DigiTypography>
						<div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
							<DigiMediaImage
								afSrc={hero_img}
								afWidth="500"
								afAlt="Illustration av en man som håller en kikare"
							/>
						</div>
					</DigiLayoutColumns>
				)}
			</div>
		</DigiLayoutBlock>
	);
};

