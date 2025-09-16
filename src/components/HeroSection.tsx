import {
	LayoutBlockContainer,
	LayoutBlockVariation,
	ListType,
	TypographyHeadingJumboLevel,
	TypographyHeadingJumboVariation,
} from "@digi/arbetsformedlingen";
import {
	DigiLayoutBlock,
	DigiList,
	DigiTypography,
	DigiTypographyHeadingJumbo,
	DigiTypographyPreamble,
} from "@digi/arbetsformedlingen-react";

export const HeroSection = () => {
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
			<DigiTypography>
                <DigiTypographyPreamble>
                    NextStep är en digital tjänst som hjälper studenter och nyutexaminerade att navigera i jobbdjungeln.
                    Genom att använda Arbetsförmedlingens öppna data samlar NextStep relevanta annonser för juniora roller,
                    praktikplatser och första-jobb inom olika branscher.
                </DigiTypographyPreamble>
				<p>Med NextStep kan du:</p>
				<DigiList afListType={ListType.BULLET}>
					<li>Söka och filtrera jobb efter ort, bransch och anställningsform.</li>
					<li>Spara favoriter och bygga din egen jobb­lista.</li>
					<li>Inspireras av populära sökningar och se trender inom arbetsmarknaden.</li>
				</DigiList>
				<p>
					Målet är att göra det enklare att ta steget från studier till arbetsliv, att hitta ditt första jobb,
					din praktik eller trainee­plats. NextStep är din kompass mot framtiden.
				</p>
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
