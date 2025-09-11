import type { IJobAdsResponse } from "../models/IJobAdsResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

export const getJobAds = async (searchTerm: string, page: number) => {
	const url = `${BASE_URL}q=${searchTerm}%20-senior&offset=${page * 10 - 10}&limit=10&sort=pubdate-desc`;

	const data = await get<IJobAdsResponse>(url);

    return data;
};
