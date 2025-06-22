"use client"
import React, { useState } from "react";
import Image from "next/image";
import searchIcon from "../../../../../public/assets/icons/searchIcon.svg";
import lobyIcon from "../../../../../public/assets/categoriesIcon/lobyIcon.svg";
import { categories } from "../../../data/categories";
import collectionsIcon from "../../../../../public/assets/icons/CollectionsIcon.svg"
import providerIcon from "../../../../../public/assets/icons/providersIcon.svg"
import {Collections} from "../../../data/collections"
import { Providers } from "../../../data/providers";

import List from "./list";

export default function SearchSection() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(["loby"]);

  const toggleCategory = (name: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(name)) {
        return prev.filter((cat) => cat !== name);
      }

      if (prev.includes("loby") && name !== "loby") {
        return [name];
      }
  
      return [...prev, name];
    });
  }

  return (
    <div className="flex flex-col mt-[10px]">
      <div className="flex w-full">
      <div className="bg-[#10202D] w-full border border-[#273344] rounded-[5px] flex items-center h-[40px] pl-[9px] lg:w-[60%]">
        <Image src={searchIcon} alt="search icon" className="mr-[10px]" />
        <input
          type="text"
          placeholder="Search your game"
          className="h-[40px] w-full outline-none text-[#C1C9E5] placeholder:text-[#C1C9E5] font-poppins font-medium bg-transparent"
        />
      </div>
      <div className="lg:flex items-start gap-[5px] hidden w-[40%]">
      <List icon={collectionsIcon} text="Collections" items={Collections} />
      <List icon={providerIcon} text="Provider" items={Providers} />
      </div>
      </div>
      <div className="mt-[15px] mb-[10px] w-full overflow-x-auto">
        <div className="flex gap-[10px] whitespace-nowrap">
          <button
            onClick={() => toggleCategory("loby")}
            className={`flex items-center gap-[6px] p-[10px] rounded-[5px] min-w-fit
              ${selectedCategories.includes("loby") ? "bg-[#10202D]" : "bg-[#223444] border border-[#273847]"}`}
          >
            <Image src={lobyIcon} alt="loby" width={24} height={24} />
            <p className="text-white text-[14px] font-poppins font-medium">
              Loby
            </p>
          </button>
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => toggleCategory(category.name)}
              className={`flex items-center gap-[5px] p-[10px] rounded-[5px] min-w-fit
                ${selectedCategories.includes(category.name)
                  ? "bg-[#10202D]"
                  : "bg-[#223444] border border-[#273847]"}`}
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={24}
                height={24}
              />
              <span className="capitalize text-[#C1C9E5] font-poppins font-medium">
                {category.name}
              </span>
            </button>
          ))}
        </div>

      </div>
      <div className="flex items-start gap-[5px] lg:hidden">
      <List icon={collectionsIcon} text="Collections" items={Collections} />
      <List icon={providerIcon} text="Provider" items={Providers} />
      </div>
    </div>
  );
}
