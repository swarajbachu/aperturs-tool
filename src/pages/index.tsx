import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Navbar,BottomBar,SideBar, Body } from '@/containers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Aperturs</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className= 'relative h-screen'>
        <Navbar />
        <SideBar />
        <div className='absolute min-h-screen min-w-full flex justify-center top-0
         left-0 items-center '>  
        <Body />
        </div>  
      </section>    
    </>
  )
}


