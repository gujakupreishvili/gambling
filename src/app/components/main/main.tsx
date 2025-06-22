import React from 'react'
import Imgsection from './ImgSection/imgsection'
import SearchSection from './searchSection/searchSection'

export default function Main() {
  return (
    <>
    <main className='flex flex-col justify-center max-w-[1980px] mx-[3%] lg:mx-[17.7%]'>
    <Imgsection />
    <SearchSection />
    </main>
    </>

  )
}
