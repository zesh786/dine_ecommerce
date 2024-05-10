import React from 'react';
import Image from 'next/image';
import { productsData } from '@/utils/productsdata';
import Link from 'next/link';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



const Products = () => {

  return (
    <section className='mt-20'>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <span className='text-blue-700 text-sm font-bold'>PRODUCTS</span>
        <p className='font-bold text-4xl'>Check What We Have</p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent className='flex justify-stretch items-center mt-16'>
          {productsData.map((product: any) => (
            
            <CarouselItem key={product.id} className="flex justify-center items-center basis:auto md:basis-1/2 lg:basis-1/3">
              <Link href={`allproducts/${product.id}`} key={product.id}>
              <div className="w-auto h-auto overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
                <Image 
                src={product.image} 
                alt="Your Image" 
                height={384} 
                width={384} 
                className="w-96 h-full object-cover" />
                <p className='text-lg font-bold'>{product.name}</p>
                <p className='text-lg font-bold'>{product.price}</p>
              </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>





      {/* products headings */}

      {/* 3 animated products */}
      {/* <div className="flex justify-stretch items-center mt-16">
        <div className="w-auto h-auto bg-gray-300 overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          <Image src={product1} alt="Your Image" className="w-96 h-full object-cover" />
          <p></p>
        </div>
        <div className="w-auto h-auto bg-gray-300 overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          <Image src={product2} alt="Your Image" className="w-96 h-full object-cover" />
        </div>
        <div className="w-auto h-auto bg-gray-300 overflow-hidden transition-transform duration-300 transform hover:scale-110 cursor-pointer">
          <Image src={product3} alt="Your Image" className="w-96 h-full object-cover" />
        </div>
      </div> */}





    </section>
  );
};

export default Products;