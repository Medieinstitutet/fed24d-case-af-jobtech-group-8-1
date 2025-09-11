import { DigiNavigationPagination } from "@digi/arbetsformedlingen-react";

type PaginationProps = {
	totalPages: number;
	totalResults: number;
	onPageChange: (page: number) => void;
};

export const Pagination = ({ totalPages, totalResults, onPageChange }: PaginationProps) => {
	const handlePageChange = (e: CustomEvent<number>) => {
		onPageChange(e.detail);
	};

	return (
		<DigiNavigationPagination
			afTotalPages={totalPages}
			afInitActivePage={1}
			afResultName="jobbannonser"
			afCurrentResultStart={1}
			afCurrentResultEnd={10}
			afTotalResults={totalResults}
			onAfOnPageChange={handlePageChange}
		/>
	);
};
