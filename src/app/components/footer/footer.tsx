import React from "react";
import FooterUpper from "./footerUpper";
import FooterLower from "./footerLower";
import FooterMobile from "./footerMobile";


export default function Footer() {
  return (
    <footer className="w-full bg-[#0E1320] border-[#282F48] max-w-[1980px]">
      <div className="max-w-[1980px] px-[3%] lg:px-[17.7%] mx-auto w-full flex flex-col">
        <FooterUpper />
        <FooterLower />
      </div>
        <FooterMobile />
    </footer>
  );
}
