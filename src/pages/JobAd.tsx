import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobAdById } from "../services/jobAdsService";
import type { IJobAdDetailed } from "../models/IJobAd";
import { DigiLayoutBlock, DigiLayoutColumns, DigiLayoutContainer } from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { JobAdDescription } from "../components/jobAd/JobAdDescription";
import { JobAdApply } from "../components/jobAd/JobAdApply";
import { JobAdDetails } from "../components/jobAd/JobAdDetails";

export const JobAd = () => {
	const { id } = useParams<{ id: string }>();
	const [jobAd, setJobAd] = useState<IJobAdDetailed>();

	useEffect(() => {
		if (id) {
			getJobAdById(id).then(setJobAd);
		}
	}, [id]);

	if (!jobAd) {
		return <div>Laddar...</div>;
	}

	return (
		<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
			<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
				<div>
					<DigiLayoutContainer afVerticalPadding={true}>
						<JobAdDetails jobAd={jobAd} />
					</DigiLayoutContainer>
					<DigiLayoutContainer afVerticalPadding={true}>
						<JobAdDescription jobAd={jobAd} />
					</DigiLayoutContainer>
				</div>
				<JobAdApply jobAd={jobAd} />
			</DigiLayoutColumns>
		</DigiLayoutBlock>
	);
};
