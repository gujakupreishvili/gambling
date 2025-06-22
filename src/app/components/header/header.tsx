import React from "react";
import Image from "next/image";
import dolarIcon from "../../../../public/assets/icons/dolarIcon.svg";
import depositIcon from "../../../../public/assets/icons/depositIcon.svg";
import bellIcon from "../../../../public/assets/icons/bellIcon.svg";
import userIcon from "../../../../public/assets/icons/userIcon.svg";
import IconButton from "../button/iconButton";

export default function Header() {
  return (
    <header className="h-[60px] w-full bg-[#152535] flex items-center justify-between px-[3%] lg:px-[17.7%]">
      <div className="bg-[#253241] w-[60px] h-[32px] rounded-[5px]" />
      <div className="flex items-center gap-[20px] max-w-[1980px]">
        <div className="flex w-[145px] h-[40px] lg:w-[219px]">
          <div className="flex items-center bg-[#10202D] pr-[20px] py-[8px] pl-[8px] gap-[10px] rounded-l-[5px] border border-[#192C40] border-r-0">
            <Image src={dolarIcon} alt="dolar icon" />
            <p className="text-white font-poppins text-[12px] lg:text-[14px] font-medium">
              500.00
            </p>
          </div>
          <div className="w-[40px] h-[40px] bg-[#0F70DC] flex items-center justify-center rounded-r-[5px] lg:w-[100px]">
            <Image src={depositIcon} alt="deposit icon" className="lg:hidden" />
            <p className="hidden lg:block px-[21px] py-[12px] text-[14px] text-white font-poppins font-medium">DEPOSIT</p>
          </div>
        </div>
        <div className="flex items-center gap-[5px]">
          <IconButton icon={bellIcon} alt="bell icon" />
          <IconButton icon={userIcon} alt="user icon" />
        </div>
      </div>
    </header>
  );
}
