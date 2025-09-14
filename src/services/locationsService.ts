import { get } from "./serviceBase";
import type { IJobAdsResponse } from "../models/IJobAdsResponse";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

export type MunicipalityOption = {
	id: string;
	name: string;
	count?: number;
};

type JobHitForMuni = {
	workplace_address?: {
		municipality?: string | null;
		municipality_code?: string | number | null;
		municipality_id?: string | number | null;
	};
};

function normalizeCode(v: unknown): string | undefined {
	if (v == null) return undefined;
	if (typeof v === "string") {
		const s = v.trim();
		return s || undefined;
	}
	if (typeof v === "number") return String(v);
	return undefined;
}

export async function getMunicipalitiesForQuery(searchTerm: string): Promise<MunicipalityOption[]> {
	const q = searchTerm?.trim() ? encodeURIComponent(`${searchTerm} AND -senior`) : encodeURIComponent(`-senior`);

	const url = `${BASE_URL}q=${q}&offset=0&limit=100`;

	const data = await get<IJobAdsResponse>(url);
	const hits = (Array.isArray(data?.hits) ? data.hits : []) as JobHitForMuni[];

	const map = new Map<string, { name: string; count: number }>();
	for (const h of hits) {
		const nameRaw = h.workplace_address?.municipality ?? "";
		const name = typeof nameRaw === "string" ? nameRaw.trim() : "";
		const code =
			normalizeCode(h.workplace_address?.municipality_code) ??
			normalizeCode(h.workplace_address?.municipality_id);

		if (!name || !code) continue;

		const prev = map.get(code);
		map.set(code, { name, count: (prev?.count ?? 0) + 1 });
	}

	const options: MunicipalityOption[] = Array.from(map.entries()).map(([id, v]) => ({
		id,
		name: v.name,
		count: v.count,
	}));

	options.sort((a, b) => (b.count ?? 0) - (a.count ?? 0));
	return options;
}

