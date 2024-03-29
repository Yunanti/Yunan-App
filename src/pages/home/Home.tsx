import { Inter } from 'next/font/google'
import Yunacantek from '@/image/Yunacantek'
import { SlSocialLinkedin,SlSocialInstagram } from 'react-icons/sl'
import { FiGithub } from 'react-icons/fi'


const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <>
      <div className='container mx-auto pt-16 md:pt-36 pb-36'>
            <div className='flex md:flex-row flex-col-reverse md:space-x-20 w-full items-center justify-center'>
                <div className='pl-32 md:space-y-5 hidden md:block'>
                    <a href="https://www.linkedin.com/in/yunantimh/" className='text-2xl'><SlSocialLinkedin/></a>
                    <a href="https://www.instagram.com/yunantimh_/" className='text-2xl'><SlSocialInstagram className='mt-7'/></a>
                    <a href="https://github.com/Yunanti" className='text-2xl'><FiGithub className='mt-7'/></a>
                </div>
                <div className='mx-10 md:mx-0 lg:w-1/2'>
                    <h1 className={`${inter.className} text-[21px] md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Yunanti Moga Hasanah, S.Mat.</h1>
                    <h2 className={`${inter.className} py-2 font-bold dark:text-gray-300`}>Front-end Developer</h2>
                    <p className='dark:text-gray-400 text-justify'>Seorang fresh graduate dari jurusan matematika ITS yang memiliki minat besar pada ilmu komputer, khususnya di bidang pengembangan web. Berhasil lulus mata kuliah ilmu komputer dasar dengan nilai rata-rata 3,6. Selama berkuliah aktif dalam perlombaan, organisasi, dan pengabdian masyarakat. Serta memiliki keterampilan komunikasi dan jaringan yang baik dalam organisasi formal maupun informal.</p>
                    <div>
                      <h3 className='dark:text-gray-300 font-medium my-2'>Skill pemrograman yang dikuasai: </h3>
                      <div className='flex flex-row space-x-20 md:space-x-4 md:block'>
                      <ul className='md:flex md:flex-row md:space-x-20 list-outside list-disc ml-4 dark:text-gray-400'>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>React JS</li>
                        <li>Next JS</li>
                        <li>Typescript</li>
                      </ul>
                      <ul className='md:flex md:flex-row md:space-x-20 list-outside list-disc ml-4 dark:text-gray-400'>
                        <li>PHP</li>
                        <li>SQL Server</li>
                        <li>Node JS</li>
                        <li>Git</li>
                        <li>Matlab</li>
                      </ul>
                      </div>
                    </div>
                    <button 
                      className='rounded-full px-8 pb-2 pt-1 mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500' 
                      onClick={() => (window.location.href = 'mailto:yunantimh@gmail.com')}
                    >
                      Hubungi saya
                    </button>
                </div>
                <div>
                    <Yunacantek/>
                </div>
            </div>
        </div>
    </>
  )
}
