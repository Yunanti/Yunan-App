import Image from 'next/image'
import { Inter } from 'next/font/google'
import Yunacantek from '@/image/Yunacantek'
import { SlSocialLinkedin,SlSocialInstagram } from 'react-icons/Sl'
import { FiGithub } from 'react-icons/Fi'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})

export default function Home() {
  return (
    <>
      <div className='container mx-auto pt-40'>
            <div className='flex flex-row space-x-20 w-full items-center justify-center'>
                <div className='pl-32 space-y-5'>
                    <SlSocialLinkedin className='text-2xl'/>
                    <SlSocialInstagram className='text-2xl'/>
                    <FiGithub className='text-2xl'/>
                </div>
                <div className='w-1/2'>
                    <h1 className={`${inter.className} text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>Yunanti Moga Hasanah</h1>
                    <h2 className={`${inter.className} py-2 font-bold`}>Front-end Developer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nesciunt adipisci et, necessitatibus obcaecati ea perspiciatis, corrupti eligendi repellat ducimus voluptate ex eaque at iusto rerum perferendis? Beatae, quasi tenetur?</p>
                    <button>Hubungi saya</button>
                </div>
                <div>
                    <Yunacantek/>
                </div>
            </div>
        </div>
    </>
  )
}
