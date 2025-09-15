import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobAdById } from "../services/jobAdsService";
import type { IJobAdDetailed } from "../models/IJobAd";
import { DigiLayoutBlock, DigiLayoutColumns, DigiTypography } from "@digi/arbetsformedlingen-react";
import { LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation } from "@digi/arbetsformedlingen";
import { JobAdDescription } from "../components/jobAd/JobAdDescription";
import { JobAdApply } from "../components/jobAd/JobAdApply";
import { JobAdDetails } from "../components/jobAd/JobAdDetails";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { JobAdEmployer } from "../components/jobAd/JobAdEmployer";

export const JobAd = () => {
	const { id } = useParams<{ id: string }>();
	const [jobAd, setJobAd] = useState<IJobAdDetailed>();

	// Fetch job ad by ID from params
	useEffect(() => {
		const fetchJobAd = async () => {
			if (id) {
				try {
					// await new Promise((resolve) => setTimeout(resolve, 3000)); // Simulate loading delay
					const data = await getJobAdById(id);
					setJobAd(data);
				} catch (err) {
					console.error("Something went wrong: ", err);
				}
			}
		};
		fetchJobAd();
	}, [id]);

	// Show loader while fetching data
	if (!jobAd) {
		return <LoadingSpinner />;
	}

	return (
		<DigiTypography>
			<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
				<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
					<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={true}>
						<JobAdDetails jobAd={jobAd} />
						<JobAdDescription jobAd={jobAd} />
					</DigiLayoutBlock>
					<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={true}>
						<JobAdEmployer jobAd={jobAd} />
						<JobAdApply jobAd={jobAd} />
					</DigiLayoutBlock>
				</DigiLayoutColumns>
			</DigiLayoutBlock>
		</DigiTypography>
	);
};
