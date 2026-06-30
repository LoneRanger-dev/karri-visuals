"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, forwardRef } from "react";

interface NeoInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

interface NeoTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const inputBase =
  "w-full bg-navy text-cream placeholder-cream/40 rounded-xl px-4 py-3.5 text-sm " +
  "border border-transparent neo-inset " +
  "focus:outline-none focus:border-gold/50 focus:bg-navy/80 " +
  "transition-all duration-200";

export const NeoInput = forwardRef<HTMLInputElement, NeoInputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-cream/70 text-sm font-medium pl-1"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={`${inputBase} ${error ? "border-red-500/70" : ""} ${className}`}
          {...props}
        />
        {error && (
          <p role="alert" className="text-red-400 text-xs pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
NeoInput.displayName = "NeoInput";

export const NeoTextarea = forwardRef<HTMLTextAreaElement, NeoTextareaProps>(
  ({ label, error, className = "", id, rows = 5, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="flex flex-col gap-2">
        <label
          htmlFor={inputId}
          className="text-cream/70 text-sm font-medium pl-1"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={inputId}
          rows={rows}
          className={`${inputBase} resize-none ${error ? "border-red-500/70" : ""} ${className}`}
          {...props}
        />
        {error && (
          <p role="alert" className="text-red-400 text-xs pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);
NeoTextarea.displayName = "NeoTextarea";

export default NeoInput;
