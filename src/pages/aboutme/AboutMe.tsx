import Yunacantek from '@/image/Yunacantek'
import React from 'react'
import { Inter } from 'next/font/google'
// import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function AboutMe() {
  return (
    <>
        {/* <Navbar/> */}
        <div className='container mx-auto pt-20 pb-10'>
            <div className='grid place-content-center'>
                <Yunacantek/>
            </div>
            <div className='mx-10 md:mx-44 py-0 md:py-5 text-justify'>
                <h1 className={`${inter.className} text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Tentang saya</h1>
                <div className='pt-1 pb-5 md:py-5'>
                <p>Saya Yunanti Moga Hasanah, lahir di Kabupaten Jember pada tanggal 29 Maret 2001. Saya tumbuh di kota kecil yang berada di Jawa Timur yaitu Kota Probolinggo hingga lulus SMA. Setelah lulus, saya 
                    berkuliah di salah satu kampus ternama di Kota Surabaya. Saat ini saya seorang fresh graduate dari jurusan Matematika Institut Teknologi Sepuluh Nopember (ITS). Saya memiliki minat tinggi pada bidang ilmu komputer khususnya Web Developer. 
                    Selama berkuliah di ITS, saya aktif dalam bidang akademik maupun non-akademik. Pada bidang akademik, saya telah mengerjakan beberapa project untuk memenuhi tugas maupun untuk menambah pengalaman, mengikuti studi independen Kampus Merdeka di 
                    Generasi GIGIH 2.0 by YABB-GoTo bidang Front-End Developer, dan menjadi asisten laboratorium untuk mata kuliah Object Oriented Programming. Selanjutnya dalam bidang non-akademik, saya aktif berorganisasi, serta mengikuti beberapa perlombaan 
                    olahraga baik tingkat universitas maupun nasional.
                </p><br></br>
                <p>Semakin besarnya keinginan saya untuk membangun pengalaman pada Front-End Developer yaitu setelah mengikuti Generasi GIGIH 2.0 tersebut. 
                    Setelah program tersebut saya memutuskan untuk mengambil topik skripsi tentang website agar pengetahuan saya semakin bertambah. Judul skripsi 
                    saya yaitu Implementasi Single Thread dan Multi Thread pada Web Crawling. Dimana skripsi tersebut membahas tentang perbandingan kinerja dari hasil pencarian data 
                    pada tiga search engine yaitu Google Search, Yahoo Search, dan Microsoft Bing jika digunakan secara bersamaan. Hasil yang saya peroleh yaitu
                    kinerja Web Crawling lebih baik digunakan secara Multi Thread dibandingkan dengan Single Thread. Dari skripsi yang saya kerjakan tersebut, saya berhasil memperoleh nilai
                    A dan mempublikasikannya pada jurnal internal ITS.
                </p> <br></br>
                <p>Ketika bosan saya sering menggambar yang beberapa hasilnya tersimpan pada instagram @ynnhnh.art. Kesenangan saya terhadap desain juga menjadi salah 
                    satu alasan saya memilih Front-End Developer ini. Dengan menjadi Front-End Developer, saya dapat mengoding sesuai dengan desain yang ada atau 
                    yang saya buat sendiri. Itu merupakan hal yang menarik bagi saya.
                </p>
                </div>
            </div>

            <div className='mx-10 md:mx-44 py-0 md:py-5 text-justify'>
                <h1 className={`${inter.className} text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500`}>Pengalaman</h1>
                <div className='pt-1 pb-5 md:py-5'>
                    <div className='flex flex-col md:flex-row md:space-x-20 w-full'>
                        <div className='md:w-5/6'>
                            <h2 className={`${inter.className} text-xl font-black`}>Object-Oriented Programming Laboratory Assistant</h2>
                            <h4 className='font-bold'>Matematika ITS</h4>
                        </div>
                        <div className='md:text-right md:w-1/6'>
                            <h4>Surabaya, Jawa Timur</h4>
                            <h4>Oktober-Desember 2022</h4>
                        </div>
                    </div>
                    <div>
                        <ul className='list-outside list-disc ml-6'>
                            <li>Menjelaskan kembali materi yang telah diperoleh di kelas.</li>
                            <li>Menyiapkan materi untuk latihan praktek langsung di laboratorium.</li>
                            <li>Memberikan pengalaman kepada siswa untuk mempraktekkan langsung materi yang telah diperoleh.</li>
                            <li>Mengawasi mahasiswa dalam melaksanakan praktek pemrograman.</li>
                            <li>Menyiapkan materi untuk bahan tugas yang akan diberikan pada mahasiswa.</li>
                            <li>Mengevaluasi tugas/proyek mahasiswa yang telah dikerjakan selama praktik.</li>
                            <li>Berkoordinasi dengan asisten lain agar praktikum berjalan dengan lancar.</li>
                        </ul>
                    </div>

                    <div className='pb-1 md:pb-5 flex flex-col md:flex-row md:space-x-20 w-full mt-5'>
                        <div className='md:w-5/6'>
                            <h2 className={`${inter.className} text-xl font-black`}>Funding Officer - Intership</h2>
                            <h4 className='font-bold'>PT Bank Rakyat Indonesia</h4>
                        </div>
                        <div className='md:text-right md:w-1/6'>
                            <h4>Jember, Jawa Timur</h4>
                            <h4>Juli-Agustus 2022</h4>
                        </div>
                    </div>
                    <div>
                        <ul className='list-outside list-disc ml-6'>
                            <li>Memberikan gagasan atau usulan website antrian pada BRI cabang Jember.</li>
                            <li>Membuat desain website antrian yang telah saya usulkan.</li>
                            <li>Melakukan booster pada mesin EDC BRI baik di lapangan langsung maupun di kantor BRI.</li>
                            <li>Melakukan rekap pendataan nasabah baru serta melakukan pencetakan kartu ATM baru.</li>
                            <li>Memblokir kartu ATM yang tertelan atau yang telah tidak digunakan oleh nasabah.</li>
                        </ul>
                    </div>

                    <div className='pb-1 md:pb-5 flex flex-col md:flex-row md:space-x-20 w-full mt-5'>
                        <div className='md:w-5/6'>
                            <h2 className={`${inter.className} text-left text-xl font-black`}>Front-End Developer - Apprenticeship</h2>
                            <h4 className='font-bold'>Generasi GIGIH 2.0 by YABB & GoTo</h4>
                        </div>
                        <div className='md:text-right md:w-1/6'>
                            <h4>Surabaya, Jawa Timur</h4>
                            <h4>Februari-Juli 2022</h4>
                        </div>
                    </div>
                    <div>
                        <ul className='list-outside list-disc ml-6'>
                            <li>Mempelajari materi tentang dasar-dasar HTML, CSS, Git, Javascript pada website Prograte hingga memperoleh sertifikatnya.</li>
                            <li>Mempelajari materi React JS lebih dalam pada Technical Meeting Class. Materi tersebut mulai dari Instalation, HTTP calls & Promise, Git & Create React App, State & Event Handling, Hooks, Redux, Redux Router, Eslint, Typescript, Testing, hingga Build & Deploy.</li>
                            <li>Mengerjakan tugas pada setiap sub materi yang diberikan tiap hari, baik tugas individu maupun secara berkelompok.</li>
                            <li>Tugas yang diberikan dari awal sampai akhir berkelanjutan sehingga diperoleh hasil project saya yaitu Sapotify dan tugas kelompok menghasilkan project yang bernama giphy</li>
                            <li>Menjadi Team Leader pada Capstone Project Front-End Track</li>
                            <li>Mengkoordinir anggota dalam mengerjakan project. Project yang dihasilkan ini bernama WaterDect yang memiliki kegunaan untuk informasi bencana alam di Indonesia.</li>
                            <li>Mempelajari dan mempraktekkan materi tentang English for Software Engineer with Cakap.</li>
                            <li>Mempelajari dan mempraktekkan materi tentang Career Readiness dan Soft Skill bersama mentor dari Gojek dan Tokopedia.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='mx-10 md:mx-44 py-0 md:pt-4 md:pb-5 text-justify'>
                <h1 className={`${inter.className} pb:1 md:pb-4 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500`}>Hubungi saya</h1>
                <p>Saya selalu bersemangat untuk terhubung dengan semua orang, jadi jangan ragu untuk menghubungi saya dengan mengikuti media sosial saya di bawah ini:</p>
                <div className='flex flex-row space-x-10 md:space-x-20 w-full'>
                    <ul className='list-outside list-disc ml-6'>
                        <li>Email </li>
                        <li>Linkedin </li>
                        <li>Github </li>
                        <li>Instagram</li>
                    </ul>
                    <ul className='list-outside'>
                        <li>yunantimh@gmail.com</li>
                        <li><a href="https://www.linkedin.com/in/yunantimh/">linkedin.com/in/yunantimh/</a></li>
                        <li><a href="https://github.com/Yunanti">github.com/Yunanti</a></li>
                        <li>yunantimh_</li>
                    </ul>
                </div>
                <p>Anda dapat membaca resume saya di sini dan terima kasih telah mengunjungi profil saya.</p>
            </div>
        </div>
    </>
  )
}
