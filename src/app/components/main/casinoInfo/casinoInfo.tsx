import React from "react";

export default function CasinoInfo() {
  return (
    <div
      className="relative flex flex-col p-4 mt-[16px]  rounded-[4px]"
      style={{
        background:
          "linear-gradient(180deg, #0b1a23 0%, rgba(60, 75, 90, 0.6) 100%)",
      }}
    >
      <h1 className="text-[18px] font-poppins font-normal text-white mb-4">
        CASINO{" "}
        <span className="text-[18px] font-poppins font-semibold text-white">
          Casino
        </span>
      </h1>
      <div>
        <p className="text-white text-sm font-poppins leading-6">
          CASINO is your premier online casino platform, offering a world-class
          gaming experience with hundreds of top-tier casino games, exclusive
          bonuses, and lightning-fast payouts. Whether you're a fan of classic
          slots, live dealer games, table games, or jackpot progressives, CASINO
          delivers everything you need for high-stakes excitement and non-stop
          fun — all from the comfort of your home or mobile device. Join
          thousands of players worldwide who trust CASINO for its secure, fair,
          and licensed gameplay. We partner with the industry's most reputable
          software
        </p>
      </div>
      <button
        className="absolute w-[94%] bg-[#0F70DC] rounded-[2px] hover:bg-[#0d5db6] transition h-[40px] 
             text-white font-poppins text-[12px] font-semibold bottom-[14px]

             lg:w-[250px] lg:left-1/2 lg:bottom-[10%] lg:-translate-x-1/2"
      >
        READ MORE
      </button>
    </div>
  );
}
