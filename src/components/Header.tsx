'use client'
import React, { useState } from 'react'
import logo from "/public/logo.webp"
import Image from 'next/image';
import Link from 'next/link';
import { arimo400 } from '@/app/fonts';
import { APP_LINKS } from '@/utils/constants';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet"

function Header() {
    return (
        <nav className=''>
            <div className='hidden lg:flex lg:justify-between lg:items-center lg:px-16 lg:m-8'>
                {/* Logo div */}
                <Link href={"/"}>
                    <div>
                        <Image
                            src={logo}
                            alt='logo_image'
                        />
                    </div>
                </Link>
                {/* Links div */}
                <div className='flex gap-x-12 font-normal leading-normal'>
                    {APP_LINKS.map((link) => (
                        <Link href={link.href} key={link.key}>{link.name}</Link>
                    ))}
                </div>
                {/* search div */}
                <div className='flex justify-center items-center border rounded-md'>
                    <Search size={20} className='mx-2' />
                    <input type="text" placeholder='What you looking for?' className={`${arimo400.className} pr-4 lg:pr-24 text-sm`} />
                </div>
                {/* cart div */}
                <div className='w-10 h-10 rounded-full bg-[rgb(241,241,241)] flex justify-center items-center relative'>
                    <div className='w-4 h-4 rounded-full bg-red-500 absolute top-0 right-1 flex justify-center items-center'>
                        <p className='text-white text-xs '>o</p>
                    </div>
                    <ShoppingCart />
                </div>
            </div>

            {/* Navbar small screen */}

            <div className='flex justify-between items-center mt-6 mx-6 w-auto h-100vh lg:hidden'>
                <Link href='/'>
                    <Image className='' src={logo} alt='logo' />
                </Link>

                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>
                    <SheetContent className='flex flex-col items-center gap-5'>
                        <SheetClose>
                            <div className='w-10 h-10 rounded-full bg-[rgb(241,241,241)] flex justify-center items-center relative'>
                                <div className='w-4 h-4 rounded-full bg-red-500 absolute top-0 right-1 flex justify-center items-center'>
                                    <p className='text-white text-xs '>o</p>
                                </div>
                                <ShoppingCart />
                            </div>
                        </SheetClose>
                        <Link href={'/female'}>
                            <SheetClose>
                                Female
                            </SheetClose>
                        </Link>
                        <Link href={'/male'}>
                            <SheetClose>
                                Male
                            </SheetClose>
                        </Link>
                        <Link href={'/kids'}>
                            <SheetClose>
                                Kids
                            </SheetClose>
                        </Link>
                        <Link href={'/allproducts'}>
                            <SheetClose>
                                All Products
                            </SheetClose>
                        </Link>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
export default Header;