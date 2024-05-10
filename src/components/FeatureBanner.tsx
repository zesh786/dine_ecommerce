import React from 'react'
import product7 from '/public/product7.png'
import Image from 'next/image'
import Link from 'next/link'

function FeatureBanner() {
    return (
        <section className='my-20'>
            <div className='text-5xl font-bold p-0 m-0 lg:mx-10 xl:pl-96 xl:ml-48 pb-10 lg:pb-2'>
                Unique and Authentic Vintage Designer Jewellery
            </div>
            <div className='grid xl:grid-cols-2'>
                <div className='grid grid-cols-2 gap-8 items-center relative z-10'>
                    <div className='absolute z-0 opacity-10 text-7xl sm:text-8xl'>
                        Different from others
                    </div>
                    <div className='xl:w-8/12'>
                        <h3 className='font-bold'>Using Good Quality Materials</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='xl:w-8/12'>
                        <h3 className='font-bold'>100% Handmade Products</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='xl:w-8/12'>
                        <h3 className='font-bold'>Modern Fashion Design</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                    <div className='xl:w-8/12'>
                        <h3 className='font-bold'>Discount for Bulk Orders</h3>
                        <p className='mt-2'>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
                    </div>
                </div>
                <div className='grid sm:grid-cols-[15rem,1fr] py-10 items-center'>
                    <div className='flex justify-center items-center'>
                        <Image
                            src={product7}
                            alt='Product7 Image'
                            className='h-80 '
                            unoptimized
                        />
                    </div>
                    <div className='ml-12 my-5 text-justify'>
                        <p>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                        <Link href={'/allproducts'}>
                            <button className='w-1/2 bg-slate-700 p-3 text-white rounded-md mt-3'>See All Products</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureBanner