import React from "react";
import dailyRewards from "../../../../../public/assets/img/daily rewards.svg";
import freeSpin from "../../../../../public/assets/img/free spin.svg";
import cashBack from "../../../../../public/assets/img/cash back.svg";
import bigTime from "../../../../../public/assets/img/bigTime.svg";
import aviator from "../../../../../public/assets/img/aviator.svg";
import sport from "../../../../../public/assets/img/sport.svg";
import octoplay from "../../../../../public/assets/img/octoplay.svg";
import bonus from "../../../../../public/assets/img/bonus.svg"
import dailytRewardsDesktop from "../../../../../public/assets/img/daily rewards desktop.svg"
import bigTimeDesktop from "../../../../../public/assets/img/bigtimedesktop.svg"
import drobwin from "../../../../../public/assets/img/drobwin.svg"
import wager from "../../../../../public/assets/img/wager.svg"
import octoplayDesktop from "../../../../../public/assets/img/octoplaydesktop.svg"
import Image from "next/image";

export default function Imgsection() {
  return (
    <div className="flex flex-col mt-[10px]">
      <div className="lg:flex items-center gap-[10px]">
        <Image
          src={dailyRewards}
          alt="daily rewards"
          className="rounded-[3px] w-full lg:hidden"
        />
        <Image  src={dailytRewardsDesktop} alt=" daily rewards " className="hidden lg:block w-[50%]"/>
        <Image  src={bonus} alt="bonus" className="hidden lg:block w-[50%]"/>
      </div>

      <div className="flex flex-col lg:flex-row lg:mt-[25px] lg:gap-[10px] ">
        <div className="flex gap-[5px] w-full mt-[20px] lg:w-[73%] lg:mt-[0px] ">
          <div className="flex-1">
            <Image
              src={freeSpin}
              alt="free spin"
              className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-cover rounded-[3px] lg:h-[210px]"
            />
          </div>
          <div className="flex-1">
            <Image
              src={cashBack}
              alt="cash back"
              className="w-full h-auto max-h-[200px] sm:max-h-[250px] md:max-h-[300px] object-cover rounded-[3px] lg:h-[210px]"
            />
          </div>
        </div>

        <div className="flex  mt-[5px] gap-[5px] items-center lg:w-[27%] lg:hidden">
          <Image src={bigTime} alt="bigTime" className="w-[25%] rounedd-[3px] lg:h-[120px]" />
          <Image src={aviator} alt="aviator" className="w-[25%] rounedd-[3px]" />
          <Image src={sport} alt="sport" className="w-[25%] rounedd-[3px]" />
          <Image src={octoplay} alt="octoplay" className="w-[25%] rounded-[3px]" />
        </div>
        <div className="hidden lg:flex flex-col gap-3 h-[200px]">
          <div className="flex gap-3 flex-1 h-1/2">
            <Image  src={drobwin} alt="dropwin" className="w-[50%]"/>
            <Image  src={wager} alt="wager" className="w-[50%]"/>
          </div>
          <div className="flex gap-3 flex-1 h-1/2">
            <Image src={octoplayDesktop} alt="octoplay" className="w-[50%]" />
            <Image  src={bigTimeDesktop} alt="bigTimedesktop" className="w-[50%]"/>
          </div>
        </div>
      </div>
    </div>
  );
}
