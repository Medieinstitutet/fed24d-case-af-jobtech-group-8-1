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
import { useScreenSize } from "../hooks/useScreenSize";
import { JobAdDate } from "../components/jobAd/JobAdDate";

export const JobAd = () => {
	const { id } = useParams<{ id: string }>();
	const [jobAd, setJobAd] = useState<IJobAdDetailed>();
	const { isMobile } = useScreenSize();

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
			{isMobile ? (
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.ONE}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails jobAd={jobAd} />
							<JobAdDescription jobAd={jobAd} />
							<JobAdEmployer jobAd={jobAd} />
							<JobAdApply jobAd={jobAd} />
							<JobAdDate jobAd={jobAd} />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			) : (
				<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afVerticalPadding={true}>
					<DigiLayoutColumns afElement={LayoutColumnsElement.DIV} afVariation={LayoutColumnsVariation.TWO}>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.TERTIARY} afVerticalPadding={true}>
							<JobAdDetails jobAd={jobAd} />
							<JobAdDescription jobAd={jobAd} />
							<JobAdDate jobAd={jobAd} />
						</DigiLayoutBlock>
						<DigiLayoutBlock afVariation={LayoutBlockVariation.SECONDARY} afVerticalPadding={false}>
							<JobAdEmployer jobAd={jobAd} />
							<JobAdApply jobAd={jobAd} />
						</DigiLayoutBlock>
					</DigiLayoutColumns>
				</DigiLayoutBlock>
			)}
		</DigiTypography>
	);
};
