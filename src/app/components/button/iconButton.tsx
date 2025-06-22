import React from "react";
import Image, { StaticImageData } from "next/image";

type IconButtonProps = {
  icon: StaticImageData;
  alt: string;
  width : string,
  height: string;  
  className?: string;
  onClick?: () => void;
};

export default function IconButton({
  icon,
  alt,
  height,
  width,
  className = "",
  onClick,
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={alt}
      style={{ width: `${width}px`, height: `${height}px` }}
      className={` bg-[#1C2E3D] border border-[#273344] rounded-[5px] flex items-center justify-center hover:bg-[#2A3B4D] transition-colors ${className}`}
    >
      <Image src={icon} alt={alt} />
    </button>
  );
}
