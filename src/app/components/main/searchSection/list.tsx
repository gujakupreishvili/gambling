import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import arrowDownIcon from "../../../../../public/assets/icons/arroDownIcon.svg";
import IconButton from "../../button/iconButton";
import diceIcon from "../../../../../public/assets/icons/diceIcon.svg";
import arrowUpIcon from "../../../../../public/assets/icons/arrowupIcon.svg";

type listProps = {
  icon: StaticImageData;
  text: string;
  paramKey: string;
  items?: Array<{ name: string; icon: StaticImageData }>;
};

export default function List({ icon, text, items = [], paramKey }: listProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const paramValue = params.get(paramKey);
    
    if (paramValue) {
      setSelectedItems(paramValue.split(','));
    }
  }, [searchParams, paramKey]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (selectedItems.length > 0) {
      params.set(paramKey, selectedItems.join(','));
    } else {
      params.delete(paramKey);
    }
    
    const newUrl = `${pathname}?${params.toString()}`;
    window.history.pushState({}, '', newUrl);
  }, [selectedItems, paramKey, pathname, searchParams]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const isAllSelected = selectedItems.length === items.length;

  const toggleItem = (name: string) => {
    if (isAllSelected) {
      setSelectedItems([name]);
    } else {
      setSelectedItems((prev) =>
        prev.includes(name)
          ? prev.filter((item) => item !== name)
          : [...prev, name]
      );
    }
  };

  const toggleAll = () => {
    if (isAllSelected) {
      setSelectedItems([]);
    } else {
      setSelectedItems(items.map((item) => item.name));
    }
  };

  return (
    <div className="flex relative w-full">
      <div
        onClick={toggleDropdown}
        className="flex items-center bg-[#10202D] border border-[#273344] justify-between h-[40px] pl-[15px] pr-[11px] rounded-[5px] cursor-pointer w-full"
      >
        <div className="flex items-center gap-[5px]">
          <Image src={icon} alt="icon" />
          <p className="text-[#C1C9E5] text-[12px] font-poppins font-medium">
            {text}
          </p>
        </div>
        <IconButton icon={isOpen ? arrowUpIcon : arrowDownIcon} alt="arrow" width="24" height="24" />
      </div>
      {isOpen && (
        <div className="absolute top-[37px] z-10 mt-1 w-full bg-[#10202D] border border-[#273344] rounded-[5px] max-h-60 overflow-y-auto">
          <div
            onClick={toggleAll}
            className={`relative flex items-center gap-[5px] h-[40px] pl-[15px] py-[10px] cursor-pointer mt-[4px] hover:bg-[#1a2a36] 
              ${isAllSelected ? "bg-[#223444]" : ""}`}
          >
            {isAllSelected && (
              <span className="absolute left-0 top-0 h-full w-[5px] bg-[#0F70DC] rounded-l-[0px]" />
            )}
            <Image src={diceIcon} alt="diceIcon" />
            <p className="text-[#C1C9E5] text-[12px] font-poppins font-medium">
              All {text}
            </p>
          </div>
          {items.map((item) => {
            const isSelected = selectedItems.includes(item.name);
            const showActive = !isAllSelected && isSelected;

            return (
              <div
                key={item.name}
                onClick={() => toggleItem(item.name)}
                className={`relative flex items-center gap-[5px] h-[40px] pl-[15px] py-[10px] cursor-pointer hover:bg-[#1a2a36]
                  ${showActive ? "bg-[#223444]" : ""}`}
              >
                {showActive && (
                  <span className="absolute left-0 top-0 h-full w-[5px] bg-[#0F70DC] rounded-l-[0px]" />
                )}
                <Image
                  src={item.icon}
                  alt={`${item.name} icon`}
                  width={20}
                  height={20}
                />
                <p className="text-[#C1C9E5] text-[12px] font-poppins font-medium">
                  {item.name}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}