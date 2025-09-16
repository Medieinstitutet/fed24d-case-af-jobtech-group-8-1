import type { IJobAdDetailed } from "../models/IJobAd";
import type { IJobAdsResponse } from "../models/IJobAdsResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/";

export const getJobAds = async (searchTerm: string, page: number) => {
	const url = `${BASE_URL}search?q=${searchTerm}%20-senior&offset=${page * 10 - 10}&limit=10`;

	const data = await get<IJobAdsResponse>(url);

	return data;
};

export const getJobAdById = async (id: string) => {
	const url = `${BASE_URL}ad/${id}`;
	const data = await get<IJobAdDetailed>(url);
	return data;
};
