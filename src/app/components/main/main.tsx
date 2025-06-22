import React from 'react'
import Imgsection from './ImgSection/imgsection'
import SearchSection from './searchSection/searchSection'
import Content from './content/content'
import ProviderSerction from './providerSection/providerSerction'
import PaymentSection from './paymentSection/paymentSection'
import CasinoInfo from './casinoInfo/casinoInfo'

export default function Main() {
  return (
    <>
    <main className='flex flex-col justify-center max-w-[1980px] mx-[3%] lg:mx-[17.7%]'>
    <Imgsection />
    <SearchSection />
    <Content />
    <ProviderSerction />
    <PaymentSection />
    <CasinoInfo />
    </main>
    </>

  )
}
