import { LayoutContainerVariation, TypographyVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";

type NoResultsProps = {
	page: string;
	headline: string;
	message: string;
};

export const NoResults = ({ page, headline, message }: NoResultsProps) => {
	return (
		<>
			<DigiLayoutContainer afVariation={LayoutContainerVariation.FLUID} afNoGutter afMarginBottom afMarginTop>
				<DigiTypography afVariation={TypographyVariation.LARGE}>
					<h2>{page}</h2>
                    <h3>{headline}</h3>
					<p>{message}</p>
				</DigiTypography>
			</DigiLayoutContainer>
		</>
	);
};
