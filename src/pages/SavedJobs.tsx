import { TypographyVariation, LayoutContainerMaxWidth, LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutContainer, DigiTypography } from "@digi/arbetsformedlingen-react";
import { useSavedJobs } from "../hooks/useSavedJobs";
import type { IJobAdBrief } from "../models/IJobAd";
import { useEffect, useState } from "react";
import { NoResults } from "../components/NoResults";
import { ResultPresentation } from "../components/searchJobs/ResultPresentation";

export const SavedJobs = () => {
	const { savedJobs, isSaved, handleToggleSave } = useSavedJobs();
	const [jobs, setJobs] = useState<IJobAdBrief[]>([]);
	const [hasFetched, setHasFetched] = useState(false);

	// Denna är här för att motverka remove childError när någon vill ta bort en sparad annons
	// Och ger användaren en chans att ångra sig om den råkade ta bort en sparad annons.
	useEffect(() => {
		const setSavedJobs = () => {
			setJobs(savedJobs);
			setHasFetched(true);
		};

		if (hasFetched) return;

		setSavedJobs();
	}, [hasFetched, savedJobs]);

	const handleRemoveJob = (job: IJobAdBrief) => {
		handleToggleSave(job);
	};

	if (savedJobs.length === 0) {
		return (
			<DigiLayoutContainer
				afVariation={LayoutContainerVariation.STATIC}
				afNoGutter
				afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
			>
				<NoResults
					page="Dina sparade jobb"
					headline="Du har inga sparade annonser!"
					message="Om du trycker på spara-knappen på en annons kommer den att visas här."
				/>
			</DigiLayoutContainer>
		);
	}

	return (
		<DigiLayoutContainer
			afVariation={LayoutContainerVariation.STATIC}
			afNoGutter
			afMaxWidth={LayoutContainerMaxWidth.WIDTH_1400}
		>
			<DigiTypography afVariation={TypographyVariation.LARGE}>
				<h2 style={{ margin: "2rem 0" }}>Dina sparade jobb</h2>
				<div>
					{jobs.map((job) => (
						<ResultPresentation
							key={job.id}
							job={job}
							getIsSaved={isSaved}
							handleSaveBtn={handleRemoveJob}
						/>
					))}
				</div>
			</DigiTypography>
		</DigiLayoutContainer>
	);
};
