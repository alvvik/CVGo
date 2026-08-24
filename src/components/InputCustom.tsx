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
          className="block text-fluid-lead font-medium  mb-1"
        >
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && <div className="absolute left-3 text-primary">{icon}</div>}
        <input
          id={inputId}
          name={name}
          className={`w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${
            icon ? "pl-10" : ""
          }`}
          {...props}
        />
      </div>
    </div>
  );
}
