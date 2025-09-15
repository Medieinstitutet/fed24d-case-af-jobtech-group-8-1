import { LayoutBlockVariation, LayoutBlockContainer, TypographyVariation, TypographyMetaVariation, LayoutColumnsElement, TypographyTimeVariation, LayoutContainerVariation } from "@digi/arbetsformedlingen";
import { DigiLayoutBlock, DigiTypography, DigiLink, DigiLayoutContainer, DigiTypographyMeta, DigiTypographyPreamble, DigiLayoutColumns, DigiTypographyTime } from "@digi/arbetsformedlingen-react";
import { SaveJob } from "../components/searchJobs/SaveJob";
import { useSavedJobs } from "../hooks/useSavedJobs";
import type { IJobAdBrief } from "../models/IJobAd";
import { useEffect, useState } from "react";

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
        }

        if (hasFetched) return;

        setSavedJobs();
    }, [hasFetched, savedJobs]);

    const handleRemoveJob = (job: IJobAdBrief) => {
        handleToggleSave(job);
    }

    if (savedJobs.length === 0) {
        return (
            <>
                <p>Lägg in en komponent här som säger att det inte finns några sparade jobb</p>
            </>
        )
    }

	return (
		<DigiLayoutBlock afVariation={LayoutBlockVariation.PRIMARY} afContainer={LayoutBlockContainer.FLUID}>
			<DigiTypography afVariation={TypographyVariation.LARGE}>
				<h2>Dina sparade jobb</h2>
				{jobs.map((job) => (
					// Om det ska vara genomskinliga kan vi ändra till <DigiLayoutContainer afNoGutter afVerticalPadding key={job.id}> + margins om vi vill
					<DigiLayoutBlock
						afVariation={LayoutBlockVariation.SECONDARY}
						afContainer={LayoutBlockContainer.FLUID}
						afVerticalPadding
						afMarginBottom
						key={job.id}
					>
						<DigiLink afHref="#" hideVisitedColor>
							<h3>{job.headline}</h3>
						</DigiLink>
						<DigiLayoutContainer afNoGutter afMarginBottom afVariation={LayoutContainerVariation.FLUID}>
							<DigiTypographyMeta afVariation={TypographyMetaVariation.PRIMARY}>
								<DigiTypographyPreamble>{job.employer.name}</DigiTypographyPreamble>
								<p slot="secondary">{job.workplace_address.municipality}</p>
							</DigiTypographyMeta>
						</DigiLayoutContainer>
						<DigiLayoutColumns afElement={LayoutColumnsElement.DIV}>
							<p>
								Publicerad:{" "}
								<DigiTypographyTime
									afVariation={TypographyTimeVariation.PRETTY}
									afDateTime={job.publication_date}
								/>
							</p>
							<div style={{ marginLeft: "auto", justifySelf: "end", textAlign: "right" }}>
								<SaveJob isSaved={isSaved(job.id)} toggleSaved={() => handleRemoveJob(job)} />
							</div>
						</DigiLayoutColumns>
					</DigiLayoutBlock>
				))}
			</DigiTypography>
		</DigiLayoutBlock>
	);
};
