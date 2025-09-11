import { DigiFormInputSearch } from "@digi/arbetsformedlingen-react";
import { FormInputSearchVariation, FormInputType } from "@digi/arbetsformedlingen";

type SearchInputProps = {
	value: string;
	onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
	return (
		<DigiFormInputSearch
			afLabel="Sök efter jobbtitel eller nyckelord"
			afVariation={FormInputSearchVariation.LARGE}
			afType={FormInputType.SEARCH}
			afButtonText="Sök nu"
			afValue={value}
			onAfOnChange={(e) => onChange(String((e.target as HTMLDigiFormInputElement).value))}
		></DigiFormInputSearch>
	);
};
