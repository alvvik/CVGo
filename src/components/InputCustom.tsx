import { InputHTMLAttributes, ReactNode } from "react";

interface InputCustomProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export default function InputCustom({
  label,
  icon,
  name,
  id,
  ...props
}: InputCustomProps) {
  const inputId = id || name || "input";

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block text-fluid-small font-semibold uppercase tracking-[0.08em] text-text/75"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute left-3.5 text-primary/80">{icon}</div>
        )}
        <input
          id={inputId}
          name={name}
          className={`w-full rounded-xl border border-primary/15 bg-white/80 px-3.5 py-3 text-text shadow-[0_8px_20px_rgba(24,143,236,0.06)] transition-all duration-200 placeholder:text-text/35 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 ${
            icon ? "pl-11" : ""
          }`}
          {...props}
        />
      </div>
    </div>
  );
}
