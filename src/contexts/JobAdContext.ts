import { createContext, useContext } from "react";
import type { IJobAdDetailed } from "../models/IJobAd";

type JobAdContextType = {
	jobAd: IJobAdDetailed;
};

export const JobAdContext = createContext<JobAdContextType | undefined>(undefined);

export const useJobAdContext = () => {
	const context = useContext(JobAdContext);
	if (!context) {
		throw new Error("useJobAdContext must be used within a JobAdProvider");
	}
	return context;
};
