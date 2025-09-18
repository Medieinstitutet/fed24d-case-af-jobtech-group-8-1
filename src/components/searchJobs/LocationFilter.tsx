import { useMemo, useRef } from "react";
import { DigiFormSelectFilter, DigiButton } from "@digi/arbetsformedlingen-react";
import { FormSelectFilterValidation, ButtonSize, ButtonVariation } from "@digi/arbetsformedlingen";

export type LocationFilterProps = {
	value: string;
	onChange: (value: string) => void;
	options: Array<{ id: string; name: string; count?: number }>;
};

type DigiSelectItem = { label: string; value: string };

type SelectedItem = string | { value?: string; id?: string; label?: string };

export function LocationFilter({ value, onChange, options }: LocationFilterProps) {
	const ref = useRef<HTMLElement | null>(null);

	const items: DigiSelectItem[] = useMemo(
		() =>
			options.map((o) => ({
				value: o.id,
				label: o.count != null ? `${o.name} (${o.count})` : o.name,
			})),
		[options],
	);

	const hasNoData = options.length === 0;

	const handleSelect = (ev: CustomEvent<SelectedItem[]>) => {
		const sel = ev?.detail;
		if (!Array.isArray(sel) || sel.length === 0) return;
		const first = sel[0] as any;
		const next = (typeof first === "string" ? first : undefined) ?? first?.value ?? first?.id ?? "";
		if (next) onChange(next);
	};

	const handleReset = () => {
		onChange("");
	};

	const handleClearClick = () => {
		if (hasNoData && !value) return;
		const host = ref.current as any;
		try {
			host?.afMReset?.();
			host?.afMCloseDropdown?.();
			host?.requestUpdate?.();
		} catch {
			/* ignore */
		}
		onChange("");
	};

	return (
		<div className="ns-location-filter" style={{ display: "grid", gap: "0.5rem" }}>
			<DigiFormSelectFilter
				ref={ref as any}
				afFilterButtonTextLabel="Ort"
				afDescription="Välj ort för att filtrera annonser"
				afFilterButtonText="Alla orter"
				afName="Ort"
				afSubmitButtonText="Filtrera"
				afMultipleItems={false}
				afValidation={FormSelectFilterValidation.NEUTRAL}
				afListItems={items}
				onAfOnSelect={handleSelect as any}
				onAfOnResetFilters={handleReset as any}
			/>

			<div>
				<DigiButton
					afSize={ButtonSize.SMALL}
					afVariation={ButtonVariation.PRIMARY}
					afFullWidth={false}
					onClick={handleClearClick}
					aria-label="Rensa vald ort"
					aria-disabled={hasNoData && !value ? "true" : undefined}
				>
					Rensa
				</DigiButton>
			</div>
		</div>
	);
}

