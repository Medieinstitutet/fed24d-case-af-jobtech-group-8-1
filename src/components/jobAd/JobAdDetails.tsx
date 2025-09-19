import { DigiLayoutContainer, DigiTypographyMeta } from "@digi/arbetsformedlingen-react";
import { TypographyMetaVariation } from "@digi/arbetsformedlingen";
import { useJobAdContext } from "../../contexts/JobAdContext";

export const JobAdDetails = () => {
	const { jobAd } = useJobAdContext();

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
