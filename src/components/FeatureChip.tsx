import type { ReactNode } from "react";

interface FeatureChipProps {
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function FeatureChip({
  icon,
  label,
  className = "",
}: FeatureChipProps) {
  return (
    <div
      className={`
        flex items-center gap-3
        rounded-full
        bg-white
        px-5 py-3
        shadow-[0_4px_16px_rgba(0,0,0,0.12)]
        border border-[#E9ECFF]
        ${className}
      `}
    >
      {icon}
      <span className="text-[15px] font-semibold text-[#111827]">
        {label}
      </span>
    </div>
  );
}