import { useEffect, useMemo, useRef } from "react";
import { DigiFormSelectFilter } from "@digi/arbetsformedlingen-react";
import { FormSelectFilterValidation } from "@digi/arbetsformedlingen";

export type LocationFilterProps = {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ id: string; name: string; count?: number }>;
};

type DigiSelectItem = { label: string; value: string };

type SelectedItem = string | { value?: string; id?: string };
type SelectFilterDetail =
  | { value: string }
  | { id: string }
  | { selected: SelectedItem[] };

function pickSelectedValue(detail: SelectFilterDetail | null | undefined): string | null {
  if (!detail || typeof detail !== "object") return null;
  if ("value" in detail && typeof detail.value === "string") return detail.value;
  if ("id" in detail && typeof detail.id === "string") return detail.id;
  if ("selected" in detail && Array.isArray(detail.selected) && detail.selected.length > 0) {
    const first = detail.selected[0];
    if (typeof first === "string") return first;
    if (first && typeof (first as { value?: string }).value === "string") return (first as { value: string }).value;
    if (first && typeof (first as { id?: string }).id === "string") return (first as { id: string }).id;
  }
  return null;
}

function isCustomEventWithObjectDetail<T>(e: Event): e is CustomEvent<T> {
  return "detail" in e && typeof (e as any).detail === "object" && (e as any).detail !== null;
}

export function LocationFilter({ value, onChange, options }: LocationFilterProps) {
  const ref = useRef<HTMLElement | null>(null);

  const items: DigiSelectItem[] = useMemo(
    () =>
      options.map((o) => ({
        value: o.id,
        label: o.count != null ? `${o.name} (${o.count})` : o.name,
      })),
    [options]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const readValueFromElement = (): string | null => {
      const host: any = el;
      const candidates: unknown[] = [
        host?.value,
        host?.selected,
        host?.selectedItem,
        host?.selectedItems,
        host?.afSelected,
        host?.afSelectedItem,
        host?.afSelectedItems,
      ];

      for (const c of candidates) {
        if (typeof c === "string" && c) return c;
        if (Array.isArray(c) && c.length) {
          const first = c[0] as any;
          if (typeof first === "string") return first;
          if (first && typeof first.value === "string") return first.value;
          if (first && typeof first.id === "string") return first.id;
        }
        if (c && typeof c === "object") {
          const maybe = c as any;
          if (typeof maybe.value === "string") return maybe.value;
          if (typeof maybe.id === "string") return maybe.id;
        }
      }
      return null;
    };

    const handle = (ev: Event) => {
      if (isCustomEventWithObjectDetail<SelectFilterDetail>(ev)) {
        const normalized = pickSelectedValue(ev.detail);
        if (normalized) {
          onChange(normalized);
          return;
        }
      }

      if (ev.type === "click" || ev.type === "change" || ev.type === "input") {
        setTimeout(() => {
          const v = readValueFromElement();
          if (v) {
            onChange(v);
          }
        }, 0);
      }
    };

    const names: string[] = [
      "afOnChangeFilter",
      "af-on-change-filter",
      "afOnSubmit",
      "af-on-submit",
      "afOnChange",
      "af-on-change",
      "change",
      "input",
      "click",
    ];

    names.forEach((n) => {
      el.addEventListener(n, handle as EventListener);
    });

    return () => {
      names.forEach((n) => {
        el.removeEventListener(n, handle as EventListener);
      });
    };
  }, [onChange]);

  const hasNoData = options.length === 0;

  return (
    <DigiFormSelectFilter
      ref={ref as any}
      afFilterButtonTextLabel="Ort"
      afDescription="Välj ort för att filtrera annonser"
      afFilterButtonText={value ? "1 ort vald" : hasNoData ? "Inga kommuner" : "Alla orter"}
      afName="Ort"
      afSubmitButtonText="Filtrera"
      afMultipleItems={false}
      afValidation={FormSelectFilterValidation.NEUTRAL}
      afListItems={items}
    />
  );
}























