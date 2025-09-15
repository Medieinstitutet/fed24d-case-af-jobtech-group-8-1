import { get } from "./serviceBase";
import type { IJobAdsResponse } from "../models/IJobAdsResponse";

const BASE_URL = "https://jobsearch.api.jobtechdev.se/search?";

export type MunicipalityOption = { id: string; name: string; count?: number };

const FALLBACK_MUNICIPALITIES: MunicipalityOption[] = [
	{ id: "0180", name: "Stockholm" },
	{ id: "1480", name: "Göteborg" },
	{ id: "1280", name: "Malmö" },
	{ id: "1290", name: "Lund" },
	{ id: "1260", name: "Helsingborg" },
];

type JobHit = {
	workplace_address?: {
		municipality?: string | null;
		municipality_code?: string | number | null;
		municipality_id?: string | number | null;
	};
};

function norm(v: unknown): string | undefined {
	if (v == null) return undefined;
	if (typeof v === "number") return String(v);
	if (typeof v === "string") {
		const s = v.trim();
		return s || undefined;
	}
	return undefined;
}

export async function getMunicipalitiesForQuery(searchTerm: string): Promise<MunicipalityOption[]> {
	const q = searchTerm?.trim() ? encodeURIComponent(`${searchTerm} AND -senior`) : encodeURIComponent(`-senior`);
	const url = `${BASE_URL}q=${q}&offset=0&limit=100`;

	try {
		const data = await get<IJobAdsResponse>(url);
		const hits = Array.isArray(data?.hits) ? (data.hits as JobHit[]) : [];

		const map = new Map<string, { name: string; count: number }>();
		for (const h of hits) {
			const name = (h.workplace_address?.municipality ?? "").toString().trim();
			const code = norm(h.workplace_address?.municipality_code) ?? norm(h.workplace_address?.municipality_id);
			if (!name || !code) continue;
			const prev = map.get(code);
			map.set(code, { name, count: (prev?.count ?? 0) + 1 });
		}

		let options: MunicipalityOption[] = Array.from(map, ([id, v]) => ({ id, name: v.name, count: v.count }));

		if (options.length === 0) {
			options = FALLBACK_MUNICIPALITIES.slice();
		}

		options.sort((a, b) => a.name.localeCompare(b.name, "sv"));
		return options;
	} catch (e) {
		console.warn("Kommunhämtning misslyckades, visar fallback:", e);
		return FALLBACK_MUNICIPALITIES.slice().sort((a, b) => a.name.localeCompare(b.name, "sv"));
	}
}

