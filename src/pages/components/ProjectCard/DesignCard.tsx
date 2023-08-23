import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiPhp, SiMicrosoftsqlserver, SiBootstrap, SiFigma } from 'react-icons/si'
import { DiNodejs, DiJava } from 'react-icons/di'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function DesignCard(){
    
    const DesignList = [
        {
            image : <Image src={require('../../../image/AntrianBRI.jpg')} alt='image' width={400} className='rounded'/>,
            title : "Antrian Bank BRI",
            visit : "https://www.figma.com/file/5Dy7wThbsstf8uiY1qkEch/Antrian-BRI?type=design&node-id=0%3A1&mode=design&t=NHmFiZEJsQuKRzsk-1",
            subtitle : "Kerja Praktik",
            created : "Dibuat pada bulan Juli 2022",
            keterangan :"Sebuah desain website yang dibuat untuk gagasan atau usulan website antrian bank BRI. Gagasan ini berguna untuk mengurangi antrian pada kantor BRI dan dapat mengurangi waktu tunggu nasabah saat mengantri.",
            code : "https://www.figma.com/file/5Dy7wThbsstf8uiY1qkEch/Antrian-BRI?type=design&node-id=0%3A1&mode=design&t=NHmFiZEJsQuKRzsk-1",
            skill : <><SiFigma/></>,
        },
        {
            image : <Image src={require('../../../image/Omits.jpg')} alt='image' width={400} className='rounded'/>,
            title : "OMITS 2022",
            visit : "https://www.figma.com/file/xmgbXRWIUYuqdZ2DsJhUjF/Omits15?type=design&node-id=180%3A13&mode=design&t=NHmFiZEJsQuKRzsk-1",
            subtitle : "Devisi Web - Frontend",
            created : "Dibuat pada bulan Mei 2022",
            keterangan :"Sebuah desain website yang saya buat untuk website pendaftaran Olimpiade Matematika ITS 2022. Disini saya membuat desain website secara umum konsepannya baik untuk desktop maupun mobile.",
            code : "https://www.figma.com/file/xmgbXRWIUYuqdZ2DsJhUjF/Omits15?type=design&node-id=180%3A13&mode=design&t=NHmFiZEJsQuKRzsk-1",
            skill : <><SiFigma/></>,
        },
    ]

    return(
        <>
            {DesignList.map((item, index) => (
                <div className='w-full p-px mt-2 mb-4 md:m-2 bg-gradient-to-r from-yellow-500/70 via-pink-500/70 to-purple-500/70 rounded' key={index} >
                    <div className='p-1 flex flex-col md:flex-row md:space-x-5 w-full dark:bg-[#121212] rounded'>
                        {item.image}
                        <div className='md:pr-3'>
                            <a href={item.visit} target='_blank'>
                                <h2 className={`${inter.className} pt-2 md:pt-3 text-[23px] md:text-3xl font-black dark:text-gray-200 hover:underline`}>{item.title}</h2>
                            </a>
                            <h4 className='dark:text-gray-300 font-bold'>{item.subtitle}</h4>
                            <p className='dark:text-gray-400 text-sm'>{item.created}</p>
                            <p className='dark:text-gray-300'>{item.keterangan}</p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href={item.code} target='_blank' className='font-bold w-3/4 dark:text-gray-300 hover:underline'>{'<'}design{'>'}</a>
                                <div className='w-1/4 flex flex-row-reverse space-x-2 content-end'>
                                    {item.skill} 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}


            
        </>
    )
}