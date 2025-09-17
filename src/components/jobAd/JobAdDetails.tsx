import { DigiLayoutContainer, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import type { IJobAdDetailed } from "../../models/IJobAd";
import { TypographyMetaVariation } from "@digi/arbetsformedlingen";

type JobAdDetailsProps = {
	jobAd: IJobAdDetailed;
};

export const JobAdDetails = ({ jobAd }: JobAdDetailsProps) => {
	return (
		<>
			<h2>{jobAd.headline}</h2>
			<h3>{jobAd.employer.name}</h3>
			<p>Ort: {jobAd.workplace_address.municipality}</p>
			<DigiLayoutContainer afVerticalPadding={true} afNoGutter>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Tjänst: </p>
					<p slot="secondary">{jobAd.occupation.label} </p>
				</DigiTypographyMeta>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Antal tjänster: </p>
					<p slot="secondary">{jobAd.number_of_vacancies} </p>
				</DigiTypographyMeta>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Omfattning: </p>
					<p slot="secondary"> {jobAd.working_hours_type.label}</p>
				</DigiTypographyMeta>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Varaktighet: </p>
					<p slot="secondary">{jobAd.duration.label} </p>
				</DigiTypographyMeta>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Lön: </p>
					<p slot="secondary">{jobAd.salary_type?.label || "Lön ej angiven"} </p>
				</DigiTypographyMeta>
				<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
					<p>Anställning: </p>
					<p slot="secondary">{jobAd.employment_type.label} </p>
				</DigiTypographyMeta>
			</DigiLayoutContainer>
		</>
	);
};
