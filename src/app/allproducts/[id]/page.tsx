'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { productsData } from '@/utils/productsdata'
import { Button } from '@/components/ui/button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';


const getProductData = (id: number) => {
    const res = productsData[id - 1];
    return res;
};

function Alldynamic({ params }: any) {
    const product = getProductData(params.id);
    const [count, setCount] = useState(1);
    const [price, setPrice] = useState<number>(product.price);
    function plusCart() {
        if (count < 5) {
            setCount(count + 1);
            setPrice(product.price * (count + 1));
        }
    }
    function minusCart() {
        if (count > 1) {
            setCount(count - 1);
            setPrice(product.price * (count - 1));
        }
    }
    
    return (
        <section className='bg-[rgb(252,252,252)]'>
            <div className='grid lg:grid-cols-[auto,auto] gap-5 md:gap-10 pt-10'>
                <div className='grid grid-cols-[5rem,1fr] sm:grid-cols-[10rem,1fr] gap-5'>
                    <Image
                        src={product.image}
                        alt='product image'
                        width={110}
                        height={110}
                    />
                    <Image
                        src={product.image}
                        alt='product image'
                        width={520}
                        height={520}
                    />
                </div>
                <div className='flex flex-col gap-6 pt-16 w-full'>
                    <div>
                        <h1 className='text-2xl'>{product.name}</h1>
                        <h3 className='text-xl font-bold text-[rgb(176,176,176)]'>{product.category}</h3>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h3 className='font-bold'>SELECT SIZE</h3>
                        <div className='flex'>
                            <Button className='rounded-full bg-transparent text-black hover:bg-gray-300 font-bold'>XS</Button>
                            <Button className='rounded-full bg-transparent text-black hover:bg-gray-300 font-bold'>S</Button>
                            <Button className='rounded-full bg-transparent text-black hover:bg-gray-300 font-bold'>M</Button>
                            <Button className='rounded-full bg-transparent text-black hover:bg-gray-300 font-bold'>L</Button>
                            <Button className='rounded-full bg-transparent text-black hover:bg-gray-300 font-bold'>XL</Button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center'>
                        <p className='font-bold'>Quantity:</p>
                        <Button onClick={minusCart} className='rounded-full bg-gray-200 text-black hover:bg-gray-300'><Minus /></Button>
                        <p> {count} </p>
                        <Button onClick={plusCart} className='rounded-full bg-gray-200 text-black hover:bg-gray-300'><Plus /></Button>
                    </div>
                    <div className='flex gap-8 items-center'>
                        <Button>
                            <ShoppingCart />
                            <p className='pl-3 text-lg'>Add to Cart</p>
                        </Button>
                        <p className='text-3xl font-bold'>${price}</p>
                    </div>
                </div>
            </div>
            <div className='mt-20 lg:mt-28'>
                <div className='relative z-10 flex items-center mb-10'>
                    <h1 className='absolute z-0 text-5xl sm:text-9xl font-bold opacity-5'>
                        Overview
                    </h1>
                    <h1 className='text-2xl font-bold my-10'>Product Information</h1>
                </div>

                <div>
                    <hr />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-[20rem,1fr] mt-10'>

                    <h3 className='font-bold text-xl text-[rgb(102,102,102)]'>Product Details</h3>
                    <p className='text-justify mt-5 sm:mt-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-[20rem,1fr] mt-10'>
                    <h3 className='font-bold text-xl text-[rgb(102,102,102)]'>Product Care</h3>
                    <ul className='list-disc ml-5 mt-5 sm:mt-0'>
                        <li>Hand wash using cold water.</li>
                        <li>Do not use bleach.</li>
                        <li>Hang it to dry.</li>
                        <li>Iron on low temperature.</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Alldynamic