import React from "react";
import hamburgerIcon from "../../../../public/assets/sideBarIcon/hamburger.svg";
import giftIcon from "../../../../public/assets/sideBarIcon/gift.svg";
import crownIcon from "../../../../public/assets/sideBarIcon/crown.svg";
import tournamentIcon from "../../../../public/assets/sideBarIcon/tournaments_image.svg";
import globalIcon from "../../../../public/assets/sideBarIcon/globalIcon.svg";
import messageIcon from "../../../../public/assets/sideBarIcon/messageIcon.svg";
import providerIcon from "../../../../public/assets/sideBarIcon/providerIcon.svg";
import scheduleIcon from "../../../../public/assets/sideBarIcon/scedule.svg";
import timeIcon from "../../../../public/assets/sideBarIcon/time.svg";
import starIcon from "../../../../public/assets/sideBarIcon/star.svg";
import Image from "next/image";
import { categories } from "@/app/data/categories";

export default function Sidebar() {
  return (
    <div className="fixed left-0 top-0 w-[60px] bg-[#273344] z-50 hidden lg:flex flex-col gap-[18px] h-screen overflow-y-auto py-[19px] px-[19px]">
      <Image src={hamburgerIcon} alt="hamburger" className="mb-[20px]" />
      <Image src={giftIcon} alt="giftIcon" />
      <Image src={crownIcon} alt="crownIcon" />
      <Image src={tournamentIcon} alt="tournamentIcon" />
      {categories.slice(0, -3).map((category) => (
        <Image
          key={category.name}
          src={category.icon}
          alt={category.name}
          width={24}
          height={24}
        />
      ))}
      <Image src={starIcon} alt="starIcon" />
      <Image src={timeIcon} alt="timeIcon" />
      <Image src={scheduleIcon} alt="scheduleIcon" />
      <Image src={providerIcon} alt="providerIcon" />
      <Image src={messageIcon} alt="messageIcon" />
      <Image src={globalIcon} alt="globalIcon" />
    </div>
  );
}
