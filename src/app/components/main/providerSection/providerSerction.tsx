import React from 'react'
import providerIcon from "../../../../../public/assets/icons/providerIcon.svg"
import Image from 'next/image'
import IconButton from '../../button/iconButton'
import arrowLeftIcon from "../../../../../public/assets/icons/arrowLeftIcon.svg"
import arrowRigthIcon from "../../../../../public/assets/icons/arrowRigthIcon.svg"

export default function ProviderSerction() {
  return (
    <div className='flex flex-col my-[15px] gap-[10px]'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-[5px]'>
        <Image  src={providerIcon} alt='providerIcon'/>
        <p className='text-white text-[12px] font-poppins font-semibold'>Game Providers</p>
        </div>
        <div className='flex items-center gap-[5px]'>
        <IconButton icon={arrowLeftIcon} alt='arrow left' width='28' height='28' />
        <IconButton icon={arrowRigthIcon} alt='arrow left' width='28' height='28' bgColor='#142130'/>
        </div>
      </div>

      <div className='w-[115px] h-[50px] bg-amber-700'></div>
    </div>
  )
}
