import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useTheme } from 'next-themes';
import ThemeSwitcher from '@/pages/ThemeSwitcher';
import { SlMenu } from 'react-icons/sl';
import { IoMdClose } from 'react-icons/io';

const inter = Inter({ subsets: ['latin'], weight: 'variable' });
export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [click, setClick] = useState('false');
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // const Menu = (e : any) => {
  //     e.value === 'false'
  // };

  const handleMenu = (e : any) => {
    let list = document.querySelector('ul') as HTMLUListElement | null
    let mylist = document.querySelector('.myList')
    let layar = document.querySelector('.layarNavbar')
    e.preventDefault();
    if (click === 'true') {
      setClick('false');
      list?.classList.remove('flex');
      list?.classList.add('hidden');
      mylist?.classList.remove('inline');
      mylist?.classList.add('hidden')
      layar?.classList.remove('h-full');
    } else {
      setClick('true');
      list?.classList.remove('hidden');
      list?.classList.add('flex');
      mylist?.classList.remove('hidden');
      mylist?.classList.add('inline')
      layar?.classList.add('h-full');
    }
  };

  return (
    <>
      {/* <div className='fixed flex flex-row space-x-5 w-full pl-40 pr-28 backdrop-blur-sm bg-white/30 dark:bg-[#121212]/30'>
            <div className='w-7/12'>
                {currentTheme === 'dark' ? (
                    <Image src={require('../../src/image/logo.png')} alt='logo' width={60}/>
                ) : (
                    <Image src={require('../../src/image/logoLight.png')} alt='logo' width={60}/>
                )}
            </div>
            <div className={`${inter.className} pt-4 pl-14 text-sm text-center space-x-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}>
                <Link href="/" className='hover:text-gray-600 dark:hover:text-gray-300'>Home</Link>
                <Link href="/project/Projects" className='hover:text-gray-600 dark:hover:text-gray-300'>Projects</Link>
                <Link href="/aboutme/AboutMe" className='hover:text-gray-600 dark:hover:text-gray-300'>About Me</Link>
            </div>
            <ThemeSwitcher/>
        </div> */}
      <div className="layarNavbar fixed md:h-auto md:flex md:flex-row md:space-x-5 w-full md:pl-40 md:pr-28 ml-6 backdrop-blur-md md:backdrop-blur-sm bg-white/30 dark:bg-[#121212]/30">
        <div className="flex flex-row md:w-7/12">
          {currentTheme === 'dark' ? (
            <div className="w-3/4 md:w-full mt-2">
              <Image
                src={require('../../src/image/logo.png')}
                alt="logo"
                width={60}
              />
            </div>
          ) : (
            <div className="w-3/4 md:w-full mt-2">
              <Image
                src={require('../../src/image/logoLight.png')}
                alt="logo"
                width={60}
              />
            </div>
          )}
          <button onClick={handleMenu} className="inline m-6 md:hidden">
            {click === 'false' ? <SlMenu /> : <IoMdClose />}
          </button>
        </div>
        <ul
          className={`${inter.className} flex-col hidden md:flex  md:flex-row md:pt-6 md:pl-14 md:space-x-5 text-sm text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500`}
        >
          <li className="my-3 md:my-0">
            <Link
              href="/"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Home
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              href="/project/Projects"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              Projects
            </Link>
          </li>
          <li className="my-3 md:my-0">
            <Link
              href="/aboutme/AboutMe"
              className="hover:text-gray-600 dark:hover:text-gray-300"
            >
              About Me
            </Link>
          </li>
          {/* <div className="my-6 md:my-0">
            <ThemeSwitcher />
          </div> */}
        </ul>
        <div className="myList hidden md:inline my-6 md:my-5 md:static md:w-10">
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
