import React from "react";

interface FooterSectionProps {
  title: string;
  items: string[];
}

export default function FooterSection({ title, items }: FooterSectionProps) {
  return (
    <section className="flex-shrink-0 min-w-[140px] lg:flex-1">
      <h4 className="text-[#FFFFFF] text-[16px] font-semibold mb-4">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className="text-[#8898B0] text-[14px] hover:text-white cursor-pointer transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
