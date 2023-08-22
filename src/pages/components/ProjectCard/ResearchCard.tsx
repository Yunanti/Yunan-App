import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiPhp, SiMicrosoftsqlserver, SiBootstrap, SiFigma } from 'react-icons/si'
import { DiNodejs, DiJava } from 'react-icons/di'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function ResearchCard(){
    
    const ResearchList = [
        {
            image : <Image src={require('../../../image/gui multi.png')} alt='image' width={400} className='rounded'/>,
            title : "Web Crawling",
            visit : "https://drive.google.com/file/d/1bNfnpWbDh5TXu97QJ6fokRKmKrlcl0SD/view?usp=sharing",
            subtitle : "Implementasi Single Thread dan Multi Thread pada Web Crawling",
            created : "Dilakukan selama bulan Januari-Juni 2023",
            keterangan :"Sebuah penelitian tentang perbandingan kinerja dari web crawling dengan memanfaatkan 3 search engine yaitu Google Search, Microsoft Bing, dan Yahoo Search. Web crawling sendiri merupakan mesin/perangkat lunak yang secara sistematis menjelajahi World Wide Web dan biasanya dioperasikan oleh mesin pencari untuk tujuan pengindeksan maupun untuk tujuan pengarsipan. Hasil yang diperoleh dari penelitian ini yaitu Multi Thread Web Crawling lebih baik dibandingkan Single Thread Web Crawling.",
            code : "https://drive.google.com/file/d/1a-mOUNNv3a2moLC1VqVyxbrhnxzxF1li/view?usp=sharing",
            skill : <><DiJava/> <SiJavascript/></>,
        },
    ]

    return(
        <>
            {ResearchList.map((item, index) => (
                <div className='w-full p-px m-2 bg-gradient-to-r from-yellow-500/70 via-pink-500/70 to-purple-500/70 rounded' key={index} >
                    <div className='p-1 flex flex-row space-x-5 w-full dark:bg-[#121212] rounded'>
                        {item.image}
                        <div className='pr-3'>
                            <a href={item.visit} target='_blank'>
                                <h2 className={`${inter.className} pt-3 text-3xl font-black dark:text-gray-200 hover:underline`}>{item.title}</h2>
                            </a>
                            <h4 className='dark:text-gray-300 font-bold'>{item.subtitle}</h4>
                            <p className='dark:text-gray-400 text-sm'>{item.created}</p>
                            <p className='dark:text-gray-300'>{item.keterangan}</p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href={item.code} target='_blank' className='font-bold w-3/4 dark:text-gray-300 hover:underline'>{'<'}paper{'>'}</a>
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