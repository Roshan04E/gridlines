import React from "react";

// 1. Define the shape of your props
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  tags?: string[]; // The '?' makes it optional to prevent the 'map' crash
}

export default function ServiceCard({
  icon,
  title,
  desc,
  tags = [], // Defaulting to an empty array is the safest way to handle .map()
}: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/20 hover:shadow-xl">
      {/* Decorative Corner Accent */}
      <div className="absolute left-0 top-0 h-20 w-20 rounded-br-[80px] bg-gradient-to-br from-blue-600/5 to-transparent" />

      {/* Icon Container */}
      <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-blue-500/10 bg-blue-500/5 text-blue-600">
        {icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mb-6 text-sm leading-relaxed text-gray-600">{desc}</p>

      {/* Tag List */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
