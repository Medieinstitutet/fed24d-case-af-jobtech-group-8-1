import { LayoutBlockContainer, LayoutBlockVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography } from "@digi/arbetsformedlingen-react";

type NoResultsProps = {
	page: string;
	headline: string;
	message: string;
};

export const NoResults = ({ page, headline, message }: NoResultsProps) => {
	return (
		<>
			<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID} afMarginBottom afMarginTop>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2>{page}</h2>
                    <h3>{headline}</h3>
					<p>{message}</p>
				</DigiTypography>
			</DigiLayoutBlock>
		</>
	);
};
