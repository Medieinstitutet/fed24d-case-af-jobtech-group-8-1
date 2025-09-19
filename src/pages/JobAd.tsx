import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobAdById } from "../services/jobAdsService";
import type { IJobAdDetailed } from "../models/IJobAd";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { useScreenSize } from "../hooks/useScreenSize";
import { JobAdMobileView } from "../components/jobAd/JobAdMobileView";
import { JobAdDesktopView } from "../components/jobAd/JobAdDesktopView";

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

	return <>{isMobile ? <JobAdMobileView jobAd={jobAd} /> : <JobAdDesktopView jobAd={jobAd} />}</>;
};
