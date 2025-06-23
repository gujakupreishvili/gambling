import React from 'react'
import Image from 'next/image'
import visa from "../../../../../public/assets/paymentImg/visa.svg"
import mastercard from "../../../../../public/assets/paymentImg/masterCard.svg"
import applePay from "../../../../../public/assets/paymentImg/applePay.svg"
import googlePay from "../../../../../public/assets/paymentImg/googlePay.svg"
import netuer from "../../../../../public/assets/paymentImg/netuer.svg"
import skrill from "../../../../../public/assets/paymentImg/skrill.svg"
import revolute from "../../../../../public/assets/paymentImg/revolute.svg"

export default function PaymentSection() {
  return (
    <div className='flex flex-col bg-[#10202D] border-[1px] border-[#273344] rounded-[10px]  items-center py-[15px] lg:flex-row  lg:px-[25px]'>
      <h2 className='text-[20px] font-poppins font-bold text-white mb-[15px] text-center lg:text-start lg:w-[405px]'>
        You don t have Crypto? No problem
      </h2>

      <div className='flex flex-wrap gap-[15px] items-center mb-[15px]  justify-center w-full '>
        <Image src={visa} alt="Visa" />
        <Image src={mastercard} alt="MasterCard" />
        <Image src={applePay} alt="Apple Pay" />
        <Image src={googlePay} alt="Google Pay" />
        <Image src={netuer} alt="Neteller" />
        <Image src={skrill} alt="Skrill" />
        <Image src={revolute} alt="Revolut" />
      </div>

      <button className='bg-[#0F70DC] text-white h-[40px] rounded-[2px] font-poppins font-semibold hover:bg-[#0d5db6] transition w-[90%] lg:w-[175px]'>
        BUY NOW
      </button>
    </div>
  )
}
