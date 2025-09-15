import { MUNICIPALITIES } from "../data/municipalities";

export type MunicipalityOption = { id: string; name: string };

let cachedAll: MunicipalityOption[] | null = null;

export async function getAllMunicipalities(): Promise<MunicipalityOption[]> {
	if (cachedAll) return cachedAll;
	cachedAll = MUNICIPALITIES.map((m) => ({ id: m.id, name: m.name })).sort((a, b) =>
		a.name.localeCompare(b.name, "sv"),
	);
	return cachedAll;
}

