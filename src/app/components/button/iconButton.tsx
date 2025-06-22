import React from "react";
import Image, { StaticImageData } from "next/image";

type IconButtonProps = {
  icon: StaticImageData;
  alt: string;
  className?: string;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  alt,
  className = "",
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={alt}
      className={`w-[40px] h-[40px] bg-[#1C2E3D] border border-[#273344] rounded-[5px] flex items-center justify-center hover:bg-[#2A3B4D] transition-colors ${className}`}
    >
      <Image src={icon} alt={alt} />
    </button>
  );
}
