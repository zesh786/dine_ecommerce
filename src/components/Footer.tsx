import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.webp'
import { Button } from './ui/button';
import { Twitter, Facebook, Linkedin } from 'lucide-react';


function Footer() {
    return (
        <footer className='mt-24'>
            <div className='grid lg:grid-cols-4 gap-16 py-16 px-8 sm:p-16'>
                <div className='flex flex-col gap-8'>
                    <Image
                        src={logo}
                        alt='logo image'
                        height={180}
                        width={180}
                    />
                    <p className='flex-shrink'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className='flex gap-5'>
                        <Button variant={'secondary'} className='bg-[rgb(241,241,241)]'>
                            <Twitter />
                        </Button>
                        <Button variant={'secondary'} className='bg-[rgb(241,241,241)]'>
                            <Facebook />
                        </Button>
                        <Button variant={'secondary'} className='bg-[rgb(241,241,241)]'>
                            <Linkedin />
                        </Button>
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold'>Comapny</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer'>About</li>
                        <li className='cursor-pointer'>Terms of Use</li>
                        <li className='cursor-pointer'>Privacy Policy</li>
                        <li className='cursor-pointer'>How it Works</li>
                        <li className='cursor-pointer'>Contact Us</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold'>Support</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer'>Support Career</li>
                        <li className='cursor-pointer'>24h Service</li>
                        <li className='cursor-pointer'>Quick Chat</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-5'>
                    <h3 className='text-2xl font-bold'>Contact</h3>
                    <ul className='flex flex-col gap-3'>
                        <li className='cursor-pointer'>Whatsapp</li>
                        <li className='cursor-pointer'>Support 24h</li>
                    </ul>
                </div>
            </div>
            <hr />
            <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mr-6 mb-6 ml-8 mt-5 lg:mr-20 lg-mr-20'>
                <span>Copyright © 2022 Dine Market</span>
                <div className='lg:pl-20'>
                    <p>Designed by.</p>
                    <p className='font-bold'> Weird Design Studio</p>
                </div>
                <div className='lg:pl-20'>
                    <p>Code by.</p>
                    <p className='font-bold'> zesh786 on github</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer