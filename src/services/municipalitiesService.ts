import { MUNICIPALITIES } from "../data/municipalities";
import { get } from "./serviceBase";
import type { IJobAdsResponse } from "../models/IJobAdsResponse";

export type MunicipalityOption = { id: string; name: string; count?: number };

let cachedAll: MunicipalityOption[] | null = null;

export async function getAllMunicipalities(): Promise<MunicipalityOption[]> {
	if (!cachedAll) {
		cachedAll = [...MUNICIPALITIES]
			.map((m) => ({ id: m.id, name: m.name }))
			.sort((a, b) => a.name.localeCompare(b.name, "sv"));
	}
	return cachedAll;
}

export async function getMunicipalitiesForQuery(searchTerm: string): Promise<MunicipalityOption[]> {
	const base = await getAllMunicipalities();

	const q = searchTerm?.trim() ? encodeURIComponent(`${searchTerm} AND -senior`) : encodeURIComponent(`-senior`);
	const url = `https://jobsearch.api.jobtechdev.se/search?q=${q}&offset=0&limit=100`;

	try {
		const data = await get<IJobAdsResponse>(url);
		const hits = Array.isArray(data?.hits) ? data.hits : [];

		const counts = new Map<string, number>();
		for (const h of hits as any[]) {
			const code = String(
				h?.workplace_address?.municipality_code ?? h?.workplace_address?.municipality_id ?? "",
			).trim();
			if (!code) continue;
			counts.set(code, (counts.get(code) ?? 0) + 1);
		}

		const merged = base.map((m) => ({ ...m, count: counts.get(m.id) }));

		merged.sort((a, b) => {
			const ac = a.count ?? 0;
			const bc = b.count ?? 0;
			if (bc !== ac) return bc - ac;
			return a.name.localeCompare(b.name, "sv");
		});

		return merged;
	} catch {
		return base;
	}
}

