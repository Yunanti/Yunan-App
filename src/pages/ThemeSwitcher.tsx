import Image from 'next/image';
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { NextPage } from 'next';
import {MdOutlineDarkMode, MdOutlineLightMode} from 'react-icons/md'


const ThemeSwitcher: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme, theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <div className="grid place-items-center">
      <div>
        <div className="flex justify-center">
          {currentTheme === 'dark' ? (
            <button
              className="p-2"
              onClick={() => setTheme('light')}
            >
              {' '}
              <MdOutlineLightMode/>
            </button>
          ) : (
            <button
              className="p-2"
              onClick={() => setTheme('dark')}
            >
              <MdOutlineDarkMode/>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default ThemeSwitcher