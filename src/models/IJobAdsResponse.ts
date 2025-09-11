import type { IJobAdBrief } from "./IJobAd";

export interface IJobAdsResponse {
	total: { value: number };
    positions: number;
    hits: IJobAdBrief[];
}
