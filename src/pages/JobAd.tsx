import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobAdById } from "../services/jobAdsService";
import type { IJobAdDetailed } from "../models/IJobAd";
import { DigiLayoutBlock, DigiLayoutColumns, DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { LayoutBlockContainer, LayoutBlockVariation, LayoutColumnsElement, LayoutColumnsVariation, LayoutContainerMaxWidth, LayoutContainerVariation } from "@digi/arbetsformedlingen";
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
			<DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC} afNoGutter afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400} >
				<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
					<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
						<JobAdDetails jobAd={jobAd} />
						<JobAdDescription jobAd={jobAd} />
					</DigiLayoutBlock>
					<DigiLayoutContainer afVariation={LayoutContainerVariation.STATIC} afNoGutter>
						<JobAdEmployer jobAd={jobAd} />
						<JobAdApply jobAd={jobAd} />
					</DigiLayoutContainer>
				</DigiLayoutColumns>
			</DigiLayoutContainer>
		</DigiTypography>
	);
};
