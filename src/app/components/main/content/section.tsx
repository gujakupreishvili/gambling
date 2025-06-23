"use client"
import React, { use } from "react";
import type { GameApiResponse } from "@/app/types/data";
import Image, { StaticImageData } from "next/image";

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
  searchQuery = '',
  showAll = false
}: Props) {
  const { data } = use(res);

  const filteredGames = data.filter((game) => {

    const categoryMatch = categories.length === 0 || 
      categories.some(cat => game.categories.includes(cat));
    

    const providerMatch = providers.length === 0 ||
      providers.some(prov => game.provider.toLowerCase().includes(prov.toLowerCase()));
    

    const searchMatch = !searchQuery || 
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
        <p className="text-gray-400 text-sm">No games found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-[10px] mb-[16px] mt-[34px]">
        <Image src={icon} alt="" />
        <p className="text-white text-[12px] font-poppins font-semibold">
          {categoriesName} {showAll && `(${filteredGames.length})`}
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-[10px] lg:gap-[15px]">
        {filteredGames.map((game) => (
          <div 
            key={game.id} 
            className="bg-[#10202D] p-3 rounded-lg border border-[#273344] hover:border-[#0F70DC] transition-colors"
          >
            <img 
              src={game.image} 
              alt={game.name} 
              className="w-full h-auto rounded-lg mb-2 aspect-[3/4] object-cover"
            />
            <h2 className="font-semibold text-sm text-white truncate">{game.name}</h2>
            <p className="text-xs text-gray-400 truncate">{game.provider}</p>
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