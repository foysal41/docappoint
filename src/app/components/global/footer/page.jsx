import React from 'react'
import logo from "@/assets/logo.png";
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='w-full mx-auto bg-[#F8F9FD] py-8 px-4'>
        <div className=' container mx-auto flex justify-between items-center gap-4'>
            <div>
                <Image src={logo} alt='logo' height={80} width={150} className='object-cover' ></Image>
                <p className='text-black/30 text-[14px]'> Book Doctor. Get Better. </p>
            </div>

             <div>
                <h2 className='font-bold uppercase  text-[#33B5C5]'>Get In Touch</h2>
                <p className='text-black/30 text-[14px]'> info@foysaljaman.com</p>
                <p className='text-black/30 text-[14px]'> +01701035894</p>
            </div>

              <div>
                <h2 className='font-bold uppercase  text-[#33B5C5]'>Location</h2>
                <p className='text-black/30 text-[14px]'> Rupsha Khulna bangladesh</p>
                <p className='text-black/30 text-[14px]'> Sonadanga, Khulna </p>
            </div>
        </div>
    </div>
  )
}
