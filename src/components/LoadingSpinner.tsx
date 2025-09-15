import { LayoutBlockVariation, LoaderSpinnerSize } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiLoaderSpinner, DigiTypography } from "@digi/arbetsformedlingen-react";

export const Loading = () => {
	return (
		<DigiLayoutBlock afVerticalPadding={true} afVariation={LayoutBlockVariation.PRIMARY}>
			<DigiTypography>
				<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={true}>
					<DigiLoaderSpinner afSize={LoaderSpinnerSize.MEDIUM} afText="Laddar"></DigiLoaderSpinner>
				</DigiLayoutBlock>
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
