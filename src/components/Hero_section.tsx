import React from 'react'
import Link from "next/link";
import Spotlight from "@/components/ui/Spotlight";
import { Button } from "./ui/moving-border";

function Hero_section() {
  return (
    <div className='h-auto md:h-[50rem] w-full relative mx-auto flex items-center justify-center text-center py-8 px-16'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div>
      <h1 className='mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of music</h1>
      <p className='mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto'>Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
      <div className='pt-4'>
        <Link href="/courses">
        <Button borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Courses</Button></Link>
      </div>
        </div>
    </div>
  )
}

export default Hero_section
