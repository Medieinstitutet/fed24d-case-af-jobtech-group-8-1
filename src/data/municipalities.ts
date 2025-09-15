export const MUNICIPALITIES = [
	{ id: "0114", name: "Upplands Väsby" },
	{ id: "0115", name: "Vallentuna" },
	{ id: "0180", name: "Stockholm" },
	{ id: "0127", name: "Tyresö" },
	{ id: "0480", name: "Göteborg" },
	{ id: "1280", name: "Malmö" },
] as const;
export type Municipality = (typeof MUNICIPALITIES)[number];

