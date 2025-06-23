import React from "react";

export default function FooterIconsRow() {
  return (
    <div className="icons-div flex items-center justify-center gap-3 flex-wrap">
      <div className="first-five-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[45px] h-[45px] bg-amber-500"></div>
        ))}
      </div>
      <div className="second-five-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-[45px] h-[45px] bg-amber-500"></div>
        ))}
        {[...Array(2)].map((_, i) => (
          <div key={i + 3} className="w-[67px] h-[67px] bg-amber-500"></div>
        ))}
      </div>
      <div className="third-three-icon flex items-center justify-center gap-3 max-sm:flex-wrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="w-[67px] h-[67px] bg-amber-500"></div>
        ))}
      </div>
    </div>
  );
}
