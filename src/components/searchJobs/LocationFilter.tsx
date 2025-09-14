import { useId } from "react";

export type LocationFilterProps = {
  value: string; 
  onChange: (value: string) => void;
  options: Array<{ id: string; name: string; count?: number }>;
  disabled?: boolean;
};

export function LocationFilter({ value, onChange, options, disabled }: LocationFilterProps) {
  const id = useId();
  return (
    <div style={{ maxWidth: 420, margin: "0.5rem 0 1rem" }}>
      <label htmlFor={id} style={{ fontWeight: 600, display: "block", marginBottom: 6 }}>
        Ort
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        style={{ width: "100%", padding: "0.5rem", borderRadius: 6 }}
      >
        <option value="">Alla orter</option>
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}
          </option>
        ))}
      </select>
    </div>
  );
}











