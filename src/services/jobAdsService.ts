import type { IJobAdsResponse } from "../models/IJobAdsResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

export interface GetJobAdsArgs {
	searchTerm: string;
	page: number;
	municipalityId?: string;
	limit?: number;
}

export const getJobAds = async ({ searchTerm, page, municipalityId, limit = 10 }: GetJobAdsArgs) => {
	const q = searchTerm?.trim() ? encodeURIComponent(`${searchTerm} AND -senior`) : encodeURIComponent(`-senior`);

	const offset = (page - 1) * limit;

	const url =
		`${BASE_URL}q=${q}` +
		`&offset=${offset}` +
		`&limit=${limit}` +
		(municipalityId ? `&municipality=${encodeURIComponent(municipalityId)}` : "");

	const data = await get<IJobAdsResponse>(url);
	return data;
};

