// import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import hero1 from "/public/hero1.webp"
import featured1 from "/public/featured1.webp"
import featured2 from "/public/featured2.webp"
import featured3 from "/public/featured3.webp"
import featured4 from "/public/featured4.webp"
import Link from 'next/link'

function Hero() {
  return (
    <section className='flex flex-col lg:flex-row justify-content align-items'>
      <div className='lg:flex-1 '>
        <Badge variant="secondary" className='text-base px-5 py-2 mt-20 bg-blue-100 text-blue-700 hover:bg-blue-100 hover:text-blue-700'>Sale 70%</Badge>
        <h1 className="font-bold scroll-m-20 text-6xl my-10 tracking-wide lg:text-6xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="w-full md:w-3/4 lg:w-80 font-normal text-gray-500 leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
        </p>
        <Link href={"/allproducts"}>
          <Button variant="outline" className='text-base flex justify-center items-center gap-3 py-5 lg:py-2 my-7 w-4/5 md:w-2/4 lg:w-44 h-30 text-wrap bg-[rgb(33,33,33)] text-white hover:bg-[rgb(33,33,33)] hover:text-white'>
            <ShoppingCart size={22} />
            Start Shopping
          </Button>
        </Link>
        <div className='grid grid-cols-2 sm:grid-cols-4 gap-6'>
          <Image src={featured1} alt='BAZAAR' />
          <Image src={featured2} alt='BUSTLE' />
          <Image src={featured3} alt='VERSACE' />
          <Image src={featured4} alt='InStyle' />
        </div>
      </div>
      {/* <div className='flex flex-1 justify-center items-center'>
            <div className='flex items-center justify-center w-[600px] h-[600px] rounded-full bg-[rgb(254,236,227)]'>
                <Image className='absolute pt-5' src={hero1} width={650} height={650} alt='header image' />
            </div>
        </div> */}

      <div className='hidden lg:flex lg: flex-1 lg:justify-center lg:items-center'>
        <div className=' w-[600px] h-[600px] mt-10 rounded-full bg-[rgb(254,236,227)]'>
        </div>
        <Image className='absolute pt-5' src={hero1} width={650} height={650} alt='header image' />
      </div>
    </section>
  )
}

export default Hero