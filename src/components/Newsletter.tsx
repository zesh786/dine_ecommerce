import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

function Newsletter() {
    return (
        <section className='relative z-10 flex justify-center items-center mt-32' >
            <div className='absolute z-0 opacity-5 text-7xl md:text-8xl lg:text-9xl font-bold'>
                Newsletter
            </div>
                <div className=' flex flex-col gap-3 items-center justify-center'>
                    <h3 className='text-4xl font-bold'>Subscribe Our Newsletter</h3>
                    <p>Get the latest information and promo offers directly</p>
                    <div className="flex flex-col sm:flex-row gap-2  w-full max-w-sm items-center space-x-2">
                        <Input type="email" placeholder="Email" />
                        <Button type="submit">Get Started</Button>
                    </div>
                </div>
        </section>
    )
}

export default Newsletter