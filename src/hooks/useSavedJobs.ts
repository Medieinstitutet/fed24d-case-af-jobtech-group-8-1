import { useEffect, useState } from "react";
import type { IJobAdBrief } from "../models/IJobAd";

const LOCAL_KEY = "savedJobsNextStep";

const getSavedJobs = (): IJobAdBrief[] => {
	return JSON.parse(localStorage.getItem(LOCAL_KEY) || "[]");
};

const saveJobs = (jobs: IJobAdBrief[]) => {
	localStorage.setItem(LOCAL_KEY, JSON.stringify(jobs));
};

export const useSavedJobs = () => {
	const [savedJobs, setSavedJobs] = useState<IJobAdBrief[]>(getSavedJobs());

	useEffect(() => {
		const onStorage = (e: StorageEvent) => {
			if (e.key === LOCAL_KEY) setSavedJobs(getSavedJobs());
		};
		window.addEventListener("storage", onStorage);
		return () => window.removeEventListener("storage", onStorage);
	}, []);

	const isSaved = (id: string) => savedJobs.some((j) => j.id === id);

	const handleToggleSave = (job: IJobAdBrief) => {
        let updatedJobs: IJobAdBrief[];
        if (savedJobs.some(j => j.id === job.id)) {
            updatedJobs = savedJobs.filter((j) => j.id !== job.id);
        } else {
            updatedJobs = [...savedJobs, job]
        }

        setSavedJobs(updatedJobs);
        saveJobs(updatedJobs);
    };

    return { savedJobs, isSaved, handleToggleSave };
};
