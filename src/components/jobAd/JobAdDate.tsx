import { DigiLayoutContainer, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";

type JobAdDateProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdDate = ({ jobAd }: JobAdDateProps) => {
	return (
		<DigiLayoutContainer afNoGutter afVerticalPadding={true}>
			<DigiTypographyMeta afVariation="primary">
				<p>Publicerad:</p>
				<p slot="secondary">{new Date(jobAd.publication_date).toLocaleDateString("sv-SE")}</p>
			</DigiTypographyMeta>
		</DigiLayoutContainer>
	);
};
