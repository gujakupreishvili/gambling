"use client";
import React, { use } from "react";
import type { GameApiResponse } from "@/app/types/data";
import Image, { StaticImageData } from "next/image";
import IconButton from "../../button/iconButton";
import arrowLeftIcon from "../../../../../public/assets/icons/arrowLeftIcon.svg";
import arrowRigthIcon from "../../../../../public/assets/icons/arrowRigthIcon.svg";

interface Props {
  res: Promise<GameApiResponse>;
  categories: string[];
  categoriesName: string;
  icon: StaticImageData;
  providers?: string[];
  searchQuery?: string;
  showAll?: boolean;
}

export default function Section({
  res,
  categories,
  categoriesName,
  icon,
  providers = [],
  searchQuery = "",
  showAll = false,
}: Props) {
  const { data } = use(res);

  const filteredGames = data.filter((game) => {
    const categoryMatch =
      categories.length === 0 ||
      categories.some((cat) => game.categories.includes(cat));

    const providerMatch =
      providers.length === 0 ||
      providers.some((prov) =>
        game.provider.toLowerCase().includes(prov.toLowerCase())
      );

    const searchMatch =
      !searchQuery ||
      game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      game.provider.toLowerCase().includes(searchQuery.toLowerCase());

    return categoryMatch && providerMatch && searchMatch;
  });

  if (filteredGames.length === 0) {
    return (
      <div className="flex flex-col">
        <div className="flex items-center gap-[10px] mb-[16px] mt-[34px]">
          <Image src={icon} alt="" />
          <p className="text-white text-[12px] font-poppins font-semibold">
            {categoriesName}
          </p>
        </div>
        <p className="text-gray-400 text-sm">
          No games found matching your criteria
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[10px] mb-[16px] mt-[34px] justify-between">
        <div className="flex items-center gap-[5px]">
          <Image src={icon} alt="" />
          <p className="text-white text-[12px] font-poppins font-semibold">
            {categoriesName} {showAll && `(${filteredGames.length})`}
          </p>
        </div>
        <div className="flex items-center gap-[5px]">
          <IconButton
            icon={arrowLeftIcon}
            alt="arrow left"
            width="28"
            height="28"
          />
          <IconButton
            icon={arrowRigthIcon}
            alt="arrow left"
            width="28"
            height="28"
            bgColor="#142130"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px] lg:gap-[15px]">
        {filteredGames.map((game) => (
          <div key={game.id} className= "rounded-lg  relative group ">
            <img
              key={game.id}
              src={game.image}
              alt={game.name}
              className="w-full h-auto rounded-[5px] mb-2 aspect-[3/4] object-cover hover:cursor-pointer"
            />
            <h2 className="font-semibold text-sm text-white truncate absolute hidden group-hover:block transition">
              {game.name}
            </h2>
            <p className="text-xs text-gray-400 truncate absolute hidden group-hover:block bottom-[-13%] transition">
              {game.provider}
            </p>
            {showAll && (
              <p className="text-xs text-yellow-400 mt-1 truncate">
                {game.categories.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
