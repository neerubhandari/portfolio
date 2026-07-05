import React from "react";

const Card = ({ icon: Icon, title, subtitle, year, desc, isLast }) => {
  return (
    <div className="relative flex gap-5 pb-10 last:pb-0 group">
      {/* Connector line */}
      {!isLast && (
        <span className="absolute left-[19px] top-10 h-[calc(100%-2rem)] w-px bg-[#6C63FF]/20" />
      )}

      {/* Icon marker */}
      <div
        className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white shadow-sm transition group-hover:scale-110 group-hover:shadow-md"
        style={{
          borderColor: "#6C63FF",
          color: "#6C63FF",
        }}
      >
        {Icon ? <Icon size={18} strokeWidth={1.8} /> : null}
      </div>

      {/* Content */}
      <div className="flex-1 pt-1 transition group-hover:translate-x-1">
        <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold leading-snug text-gray-800">
            {title}
          </h3>

          <span className="whitespace-nowrap font-mono text-xs tracking-wide text-[#6C63FF]">
            {year}
          </span>
        </div>

        {subtitle && (
          <p className="mb-1.5 text-sm font-medium text-gray-600">{subtitle}</p>
        )}

        <p className="text-sm leading-relaxed text-gray-500">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
