import React from 'react'
import Image from 'next/image'
import promo1 from '/public/promotions1.webp'
import promo2 from '/public/promotions2.webp'
import promo3 from '/public/promotions3.webp'
import { Button } from './ui/button'

function PromotionsBanner() {
  return (
    <section className='mt-20'>
      {/* promotions headings */}
      <div className='flex flex-col gap-5 items-center justify-center'>
        <span className='text-blue-700 text-sm text-center font-bold'>PROMOTIONS</span>
        <p className='font-bold text-center text-4xl'>Our Promotions Events</p>
      </div>



      {/* 4 boxes section */}
      <div className='flex flex-col lg:flex-row gap-7 my-10'>
        {/* left 2 boxes */}
        <div className='flex flex-col gap-4 justify-center items-center'>
          <div className='bg-stone-300 flex flex-col sm:flex-row h-full w-full'>
            {/* price div */}
            <div className='text-center py-8 px-8 sm:flex sm:flex-col sm:items-center justify-center'>
              <h3 className='text-3xl font-bold text-center mx-3'>GET UP TO
                <span className='text-4xl'> 60% OFF</span>
              </h3>
              <p className='text-base'>For the summer season</p>
            </div>
            <Image
              src={promo1}
              alt='Promotiosn1 Image'
              className='h-auto w-auto'
            />
          </div>

          <div className='bg-black text-white w-full h-full pt-5 pb-5 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold'>GET 30% Off</h1>
            <p className='text-sm mt-4'>USE PROMO CODE</p>
            <Button className='bg-slate-600'>DINEWEEKENDSALE</Button>

          </div>
        </div>
        {/* right 2 boxes */}
        <div className='flex flex-col sm:flex-row gap-4'>
          {/* box1 */}
          <div className='bg-[rgb(239,225,199)] flex flex-col h-full w-full'>

            <div className='py-8 px-8'>
              <p className='text-base'>Flex Swaetshirt</p>
              <span className='line-through pr-2'>$100.00</span>
              <span className='font-bold'>$75.00</span>
            </div>
            <Image
              src={promo2}
              alt='Promotiosn2 Image'
              className='h-auto w-auto align-text-bottom'
            />
          </div>
          {/* box2 */}
          <div className='bg-[rgb(215,215,217)] flex flex-col h-full w-full'>

            <div className='py-8 px-8'>
              <p className='text-base'>Flex Push Button Bomber</p>
              <span className='line-through pr-2'>$225.00</span>
              <span className='font-bold'>$190.00</span>
            </div>
            <Image
              src={promo3}
              alt='Promotion2 Image'
              className='h-auto w-auto'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromotionsBanner