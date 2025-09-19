import { DigiLayoutContainer, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { useJobAdContext } from "../../contexts/JobAdContext";

export const JobAdDate = () => {
	const { jobAd } = useJobAdContext();

	return (
		<DigiLayoutContainer afNoGutter afVerticalPadding={true}>
			<DigiTypographyMeta afVariation="primary">
				<p>Publicerad:</p>
				<p slot="secondary">{new Date(jobAd.publication_date).toLocaleDateString("sv-SE")}</p>
			</DigiTypographyMeta>
		</DigiLayoutContainer>
	);
};
