import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { useTheme } from 'next-themes'
import ThemeSwitcher from '@/pages/ThemeSwitcher'

const inter = Inter({ subsets: ['latin'], weight: 'variable'})
export default function Navbar() {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
        <div className='fixed flex flex-row space-x-5 w-full pl-40 pr-28 dark:bg-gradient-to-b from-black/30 to-black/0'>
            <div className='w-7/12'>
                {currentTheme === 'dark' ? (
                    <Image src={require('../../src/image/logo.png')} alt='logo' width={60}/>
                ) : (
                    <Image src={require('../../src/image/logoLight.png')} alt='logo' width={60}/>
                )}
            </div>
            <div className={`${inter.className} pt-4 pl-14 text-sm text-center space-x-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>
                <Link href="/" className='hover:text-gray-300'>Home</Link>
                <Link href="/project/Project" className='hover:text-gray-300'>Projects</Link>
                <Link href="/aboutme/AboutMe" className='hover:text-gray-300'>About Me</Link>
            </div>
            <ThemeSwitcher/>
        </div>
    </>
  )
}
