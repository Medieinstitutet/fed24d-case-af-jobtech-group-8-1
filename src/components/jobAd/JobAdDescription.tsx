import { DigiTypography, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";

type JobAdDescriptionProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdDescription = ({ jobAd }: JobAdDescriptionProps) => {
	return (
		<>
			<DigiTypography>
				{jobAd.description?.text_formatted ? (
					<div dangerouslySetInnerHTML={{ __html: jobAd.description.text_formatted }}></div>
				) : (
					<p>Ingen beskrivning tillgänglig</p>
				)}
				<DigiTypographyMeta>
					<p>Publicerad:</p>
					<p slot="secondary">{new Date(jobAd.publication_date).toLocaleDateString("sv-SE")}</p>
				</DigiTypographyMeta>
			</DigiTypography>
		</>
	);
};
