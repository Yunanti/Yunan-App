import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer from './components/Footer'
import Navbar from '@/components/Navbar'
import {ThemeProvider} from 'next-themes'
// import ThemeSwitcher from './ThemeSwitcher'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
        <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ThemeProvider>
  )
}
