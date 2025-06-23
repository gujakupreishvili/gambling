import React from 'react'
import chatIcon from "../../../../public/assets/footerIcon/chat_icon.svg"
import depositIcon from "../../../../public/assets/footerIcon/deposit_icon_inactive.svg"
import homeIcon from "../../../../public/assets/footerIcon/home_icon.svg"
import menuIcon from "../../../../public/assets/footerIcon/menu_icon.svg"
import searchIcon from "../../../../public/assets/footerIcon/search_icon.svg"
import Image from 'next/image'

export default function FooterMobile() {
  return (
    <div className='bg-[#10212E] flex items-center lg:hidden justify-between px-[40px] py-[11px] rounded-tl-[5px] rounded-tr-[5px] border-[1px] border-[#273344]'>
      <div className='flex flex-col gap-[6px] items-center'>
        <Image src={homeIcon} alt='' />
        <p className='text-white text-[10px] font-poppins font-normal'>home</p>
      </div>

      <div className='flex flex-col gap-[6px] items-center'>
        <Image src={searchIcon} alt='' />
        <p className='text-white text-[10px] font-poppins font-normal'>Search</p>
      </div>
      
      <div className='w-[50px] h-[50px] rounded-[25px] bg-[#0F70DC] flex items-center justify-center'>
        <Image  src={depositIcon} alt=';'/>
      </div>

      <div className='flex flex-col gap-[6px] items-center'>
        <Image src={chatIcon} alt='' />
        <p className='text-white text-[10px] font-poppins font-normal'>chat</p>
      </div>

      <div className='flex flex-col gap-[6px] items-center'>
        <Image src={menuIcon} alt='' />
        <p className='text-white text-[10px] font-poppins font-normal'>menu</p>
      </div>

      
    </div>
  )
}
