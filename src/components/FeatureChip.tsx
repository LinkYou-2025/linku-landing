import type { ReactNode } from "react";

type FeatureChipProps = {
  icon: ReactNode;
  label: string;
  className?: string;
};

export default function FeatureChip({
  icon,
  label,
  className = "",
}: FeatureChipProps) {
  return (
    <div
      className={`
        inline-flex
        items-center
        gap-[10px]
        h-[50px]
        px-[18px]
        rounded-full
        bg-white
        border border-[#E6EBFF]
        shadow-[0_4px_10px_rgba(79,123,255,0.08)]
        ${className}
      `}
    >
      <div className="w-6 h-6 flex items-center justify-center">
        {icon}
      </div>

      <span className="text-[17px] font-semibold text-[#111827] whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}