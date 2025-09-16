import type { IJobAdDetailed } from "../models/IJobAd";
import type { IJobAdsResponse } from "../models/IJobAdsResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search";
const BASE_URL = "https://jobsearch.api.jobtechdev.se/";

export interface GetJobAdsArgs {
	searchTerm: string;
	page: number;
	municipalityId?: string;
	limit?: number;
}

const LUCENE_SPECIAL = /[+\-!():^[\]{}"~*?:\\/|&]/g;
const SPACE = /\s+/g;

function escapeLucene(s: string) {
	return s.replace(LUCENE_SPECIAL, "\\$&");
}

function buildQuery(userInput: string) {
	const tokens = userInput.trim().split(SPACE).filter(Boolean).map(escapeLucene);
	if (tokens.length === 0) return "-senior";
	const musts = tokens.map((t) => `+(${t} OR ${t}*)`).join(" ");
	return `${musts} -senior`;
}

export const getJobAds = async ({ searchTerm, page, municipalityId, limit = 10 }: GetJobAdsArgs) => {
	const q = buildQuery(searchTerm);

	const params = new URLSearchParams();
	params.set("q", q);
	params.set("offset", String((page - 1) * limit));
	params.set("limit", String(limit));
	if (municipalityId) params.set("municipality", municipalityId);

	const url = `${BASE_URL}?${params.toString()}`;
export const getJobAds = async (searchTerm: string, page: number) => {
	const url = `${BASE_URL}search?q=${searchTerm}%20-senior&offset=${page * 10 - 10}&limit=10`;

	const data = await get<IJobAdsResponse>(url);
	return data;

	return data;
};


export const getJobAdById = async (id: string) => {
	const url = `${BASE_URL}ad/${id}`;
	const data = await get<IJobAdDetailed>(url);
	return data;
};
