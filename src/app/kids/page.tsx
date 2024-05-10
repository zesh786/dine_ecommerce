
import React from 'react'
import { productsData } from '@/utils/productsdata'
import Link from 'next/link'
import Image from 'next/image'


function Kids() {
  return (
    <main className=''>
      {productsData.length > 0 ? (
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center gap-5 mt-16'>
          {productsData.map((product: any) => (

            product.type == 'kids' && (

              <Link href={`allproducts/${product.id}`} key={product.id} className='my-5 flex flex-col gap-2'>
                <Image
                  src={product.image}
                  alt={`${product.name} image`}
                  width={100}
                  height={100}
                  className='w-[280px] h-[298px] sm:w-[250px] sm:h-[266px]'
                  unoptimized
                />
                <p className='text-lg font-bold'>{product.name}</p>
                <p className='text-base text-[rgb(136,136,136)]'>{product.category}</p>
                <p className='text-lg font-bold'>{product.price}</p>
              </Link>
            )

          ))}
        </div>
      ) : (
        <div></div>
      )
      }
    </main>
  )
}

export default Kids