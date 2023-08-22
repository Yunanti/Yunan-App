import React from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiPhp, SiMicrosoftsqlserver, SiBootstrap, SiFigma } from 'react-icons/si'
import { DiNodejs, DiJava } from 'react-icons/di'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function DevCard(){
    
    const DevList = [
        {
            image : <Image src={require('../../../image/myAdmin.jpg')} alt='image' width={400} className='rounded'/>,
            title : "myAdmin",
            visit : "#",
            subtitle : "Final Project of Database System Course",
            created : "Dibuat pada bulan November 2022",
            keterangan :"Sebuah website database karyawan suatu perusahaan. Pada website ini dapat memberikan informasi data karyawan yang bekerja pada perusahaan tersebut serta dapat mengolah data tersebut sehingga dapat memudahkan pengarsipan data karyawan.",
            code : "https://github.com/Yunanti/MyAdmin.git",
            skill : <><SiPhp/> <SiMicrosoftsqlserver/> <SiBootstrap/></>,
        },
        {
            image :  <Image src={require('../../../image/WaterDect.jpg')} alt='image' width={400} className='rounded'/>,
            title : "WaterDect",
            visit : "https://water-dect-ei3cl6xin-yunanti.vercel.app/",
            subtitle : "Capstone Project Generasi GIGIH 2.0",
            created : "Dibuat pada bulan Juni 2022",
            keterangan : "Sebuah website informasi bencana alam kekeringan yang terjadi di Indonesia. Dilengkapi dengan fitur galeri yaitu kumpulan potret kekeringan pada provinsi tertentu sesuai dengan permintaan user untuk melihat daerah mana.",
            code : "https://github.com/Yunanti/WaterDect-App.git",
            skill : <><SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/></>,
        },
        {
            image :  <Image src={require('../../../image/Sapotify.jpg')} alt='image' width={400} className='rounded'/>,
            title : "Sapotify 1.0",
            visit : "https://sapotify-gigih.vercel.app/",
            subtitle : "Project Generasi GIGIH 2.0",
            created : "Dibuat pada bulan April 2022",
            keterangan : "Sebuah website untuk membuat playlist musik dari aplikasi Spotify. Dengan memanfaatkan API Spotify website ini dapat dengan mudah membuat playlist dan lagu apa saja yang dipilih didalam playlist tersebut. Website ini tentunya juga memiliki fitur pencarian lagu sehingga dapat memudahkan user dalam mencari sebuah lagu jika ingin ditambahkan pada playlistnya.",
            code : "https://github.com/Yunanti/sapotify-gigih.git",
            skill : <><SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/></>,
        },
        {
            image :  <Image src={require('../../../image/Giphy.jpg')} alt='image' width={400} className='rounded'/>,
            title : "Giphy 1.0",
            visit : "https://my-gigih.vercel.app/",
            subtitle : "Project Generasi GIGIH 2.0",
            created : "Dibuat pada bulan April 2022",
            keterangan : "Sebuah website pencarian giphy atau gambar bergerak berulang. Website ini dilengkapi dengan trending giphy saat ini agar user mengetahui giphy yang sedang trending saat ini. Disini saya memanfaatkan API dari website Giphy langsung untuk memperoleh data giphy.",
            code : "https://github.com/Yunanti/my-gigih.git",
            skill : <><SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/></>,
        },
    ]

    return(
        <>
            {DevList.map((item, index) => (
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
                                <a href={item.code} target='_blank' className='font-bold w-3/4 dark:text-gray-300 hover:underline'>{'<'}source code{'/>'}</a>
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