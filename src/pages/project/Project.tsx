import React from 'react'
import { Inter } from 'next/font/google'
import { SiReact, SiJavascript, SiTypescript, SiRedux, SiPhp, SiMicrosoftsqlserver, SiBootstrap, SiFigma } from 'react-icons/Si'
import { DiNodejs, DiJava } from 'react-icons/Di'
import Link from 'next/link'
import Image from 'next/image'
// import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function Project() {
  return (
    <>
        {/* <Navbar/> */}
        <div>
            <div className='mx-28 px-12 py-7 text-justify'>
                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Projects Web Development</h1>
                <p className='pb-1'>Kumpulan project yang telah saya kerjakan.</p>
                <div className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-px m-2 rounded'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded'>
                        <Image src={require('../../image/myAdmin.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300`}>myAdmin</h2>
                            <h4 className='font-bold text-gray-400'>Final Project of Database System Course</h4>
                            <p className='text-sm text-gray-500'>Dibuat pada bulan November 2022</p>
                            <p className='text-gray-400'>Sebuah website database karyawan suatu perusahaan. Pada website ini dapat memberikan informasi 
                            data karyawan yang bekerja pada perusahaan tersebut serta dapat mengolah data tersebut sehingga dapat memudahkan
                            pengarsipan data karyawan.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://github.com/Yunanti/MyAdmin.git" target='_blank' className='font-bold text-gray-400 w-3/4'>{'<'}source code{'/>'}</a>
                                <div className='w-1/4 flex flex-row space-x-2 content-end'>
                                    <SiPhp/> <SiMicrosoftsqlserver/> <SiBootstrap/> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-px mx-2 my-4 rounded'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded'>
                        <Image src={require('../../image/WaterDect.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300`}>WaterDect</h2>
                            <h4 className='font-bold text-gray-400'>Capstone Project Generasi GIGIH 2.0</h4>
                            <p className='text-sm text-gray-500'>Dibuat pada bulan Juni 2022</p>
                            <p className='text-gray-400'>Sebuah website informasi bencana alam kekeringan yang terjadi di Indonesia. Dilengkapi dengan fitur galeri yaitu kumpulan potret kekeringan pada provinsi tertentu sesuai dengan permintaan user untuk
                                melihat daerah mana.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://github.com/Yunanti/WaterDect-App.git" target='_blank' className='font-bold text-gray-400 w-3/4'>{'<'}source code{'/>'}</a>
                                <div className='w-1/4 flex flex-row space-x-2 content-end'>
                                    <SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-px mx-2 my-4 rounded group'>
                <a href="https://sapotify-gigih.vercel.app/" target='_blank'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded group-hover:bg-black/80'>
                        <Image src={require('../../image/Sapotify.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300 group-hover:text-gray-100`}>Sapotify 1.0</h2>
                            <h4 className='font-bold text-gray-400 group-hover:text-gray-200'>Project Generasi GIGIH 2.0</h4>
                            <p className='text-sm text-gray-500 group-hover:text-gray-400'>Dibuat pada bulan April 2022</p>
                            <p className='text-gray-400 group-hover:text-gray-200'>
                                Sebuah website untuk membuat playlist musik dari aplikasi Spotify. Dengan memanfaatkan API Spotify website ini dapat dengan
                                mudah membuat playlist dan lagu apa saja yang dipilih didalam playlist tersebut. Website ini tentunya juga memiliki fitur pencarian lagu
                                sehingga dapat memudahkan user dalam mencari sebuah lagu jika ingin ditambahkan pada playlistnya.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://github.com/Yunanti/sapotify-gigih.git" target='_blank' className='font-bold text-gray-400 w-3/4 group-hover:text-gray-200'>{'<'}source code{'/>'}</a>
                                <div className='w-1/4 flex flex-row space-x-2 content-end'>
                                    <SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

                <div className='w-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-px mx-2 my-4 rounded group'>
                <a href="https://my-gigih.vercel.app/" target='_blank'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded group-hover:bg-black/80'>
                        <Image src={require('../../image/Giphy.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300 group-hover:text-gray-100`}>Giphy 1.0</h2>
                            <h4 className='font-bold text-gray-400 group-hover:text-gray-200'>Project Generasi GIGIH 2.0</h4>
                            <p className='text-sm text-gray-500 group-hover:text-gray-400'>Dibuat pada bulan April 2022</p>
                            <p className='text-gray-400 group-hover:text-gray-200'>
                                Sebuah website pencarian giphy atau gambar bergerak berulang. Website ini dilengkapi dengan trending giphy saat ini agar user
                                mengetahui giphy yang sedang trending saat ini. Disini saya memanfaatkan API dari website Giphy langsung untuk
                                memperoleh data giphy.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://github.com/Yunanti/my-gigih.git" target='_blank' className='font-bold text-gray-400 w-3/4 group-hover:text-gray-200'>{'<'}source code{'/>'}</a>
                                <div className='w-1/4 flex flex-row space-x-2 content-end'>
                                    <SiReact/> <SiJavascript/> <SiTypescript/> <SiRedux/> <DiNodejs/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Research</h1>
                <p className='pb-1'>Penelitian yang pernah saya lakukan tentang website.</p>
                <div className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-px mx-2 my-2 rounded group'>
                    <a href="https://drive.google.com/file/d/1bNfnpWbDh5TXu97QJ6fokRKmKrlcl0SD/view?usp=sharing" target='_blank'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded group-hover:bg-black/80'>
                        <Image src={require('../../image/gui multi.png')} alt='image' width={350} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300 group-hover:text-gray-100`}>Web Crawling</h2>
                            <h4 className='font-bold text-gray-400 group-hover:text-gray-200'>Implementasi Single Thread dan Multi Thread pada Web Crawling</h4>
                            <p className='text-sm text-gray-500 group-hover:text-gray-400'>Dilakukan selama bulan Januari-Juni 2023</p>
                            <p className='text-gray-400 group-hover:text-gray-200'>
                                Sebuah penelitian tentang perbandingan kinerja dari web crawling dengan memanfaatkan 3 search engine yaitu 
                                Google Search, Microsoft Bing, dan Yahoo Search. Web crawling sendiri merupakan mesin/perangkat lunak yang secara sistematis
                                menjelajahi World Wide Web dan biasanya dioperasikan oleh mesin pencari untuk tujuan pengindeksan maupun untuk tujuan pengarsipan.
                                Hasil yang diperoleh dari penelitian ini yaitu Multi Thread Web Crawling lebih baik dibandingkan Single Thread Web Crawling.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://drive.google.com/file/d/1a-mOUNNv3a2moLC1VqVyxbrhnxzxF1li/view?usp=sharing" target='_blank' className='font-bold text-gray-400 w-3/4 group-hover:text-gray-200'>{'<'}paper{'>'}</a>
                                <div className='w-1/4 flex flex-row space-x-2 content-end'>
                                    <DiJava/> <SiJavascript/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

                <h1 className={`${inter.className} mt-10 pt-5 pb-2 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Web Design</h1>
                <p className='pb-1'>Kumpulan desain website yang pernah saya buat.</p>
                <div className='w-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 p-px mx-2 my-2 rounded group'>
                    <a href="https://www.figma.com/file/5Dy7wThbsstf8uiY1qkEch/Antrian-BRI?type=design&node-id=0%3A1&mode=design&t=NHmFiZEJsQuKRzsk-1" target='_blank'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded group-hover:bg-black/80'>
                        <Image src={require('../../image/AntrianBRI.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300 group-hover:text-gray-100`}>Antrian Bank BRI</h2>
                            <h4 className='font-bold text-gray-400 group-hover:text-gray-200'>Kerja Praktik</h4>
                            <p className='text-sm text-gray-500 group-hover:text-gray-400'>Dibuat pada bulan Juli 2022</p>
                            <p className='text-gray-400 group-hover:text-gray-200'>
                                Sebuah desain website yang dibuat untuk gagasan atau usulan website antrian bank BRI. Gagasan ini berguna untuk
                                mengurangi antrian pada kantor BRI dan dapat mengurangi waktu tunggu nasabah saat mengantri.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://www.figma.com/file/5Dy7wThbsstf8uiY1qkEch/Antrian-BRI?type=design&node-id=0%3A1&mode=design&t=NHmFiZEJsQuKRzsk-1" target='_blank' className='font-bold text-gray-400 w-3/4 group-hover:text-gray-200'>{'<'}design{'>'}</a>
                                <div className='w-1/4 flex flex-row-reverse space-x-2 content-end'>
                                    <SiFigma/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

                <div className='w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 p-px mx-2 my-4 rounded group'>
                    <a href="https://www.figma.com/file/xmgbXRWIUYuqdZ2DsJhUjF/Omits15?type=design&node-id=180%3A13&mode=design&t=NHmFiZEJsQuKRzsk-1" target='_blank'>
                    <div className='p-1 flex flex-row space-x-5 w-full bg-black rounded group-hover:bg-black/80'>
                        <Image src={require('../../image/Omits.jpg')} alt='image' width={400} className='rounded'/>
                        <div className='pr-3'>
                            <h2 className={`${inter.className} pt-3 text-3xl font-black text-gray-300 group-hover:text-gray-100`}>OMITS 2022</h2>
                            <h4 className='font-bold text-gray-400 group-hover:text-gray-200'>Divisi Web Omits</h4>
                            <p className='text-sm text-gray-500 group-hover:text-gray-400'>Dibuat pada bulan Mei 2022</p>
                            <p className='text-gray-400 group-hover:text-gray-200'>
                                Sebuah desain website yang saya buat untuk website pendaftaran Olimpiade Matematika ITS 2022. Disini saya membuat desain website
                                secara umum konsepannya baik untuk desktop maupun mobile.
                            </p>
                            <div className='pt-2 pb-1 flex flex-row space-x-2'>
                                <a href="https://www.figma.com/file/xmgbXRWIUYuqdZ2DsJhUjF/Omits15?type=design&node-id=180%3A13&mode=design&t=NHmFiZEJsQuKRzsk-1" target='_blank' className='font-bold text-gray-400 w-3/4 group-hover:text-gray-200'>{'<'}design{'>'}</a>
                                <div className='w-1/4 flex flex-row-reverse space-x-2 content-end'>
                                    <SiFigma/>
                                </div>
                            </div>
                        </div>
                    </div>
                    </a>
                </div>

            </div>
        </div>
    </>
  )
}
