import React from 'react'
import { Inter } from 'next/font/google'
import DevCard from '../components/ProjectCard/DevCard'
import ResearchCard from '../components/ProjectCard/ResearchCard'
import DesignCard from '../components/ProjectCard/DesignCard'


const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function Projects() {
  return (
    <>
        <div>
            <div className='mx-28 px-12 py-7 text-justify'>
                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Projects Web Development</h1>
                <p className='pb-1'>Kumpulan project yang telah saya kerjakan.</p>
                <DevCard/>

                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Research</h1>
                <p className='pb-1'>Penelitian yang pernah saya lakukan tentang website.</p>
                <ResearchCard/>

                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Web Design</h1>
                <p className='pb-1'>Kumpulan desain website yang pernah saya buat.</p>
                <DesignCard/>
            </div>
        </div>
    </>
  )
}
