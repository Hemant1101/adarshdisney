import Head from 'next/head'

import Brands from '../components/Brands'

import MoviesCollection from '../components/MoviesCollection'




export default function Home() {
  return (
    <div >
      <Head>
        <title> Rathi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <main className="relative min-h-screen after:bg-home after:bg-center after:bg-cover after:bg-no-repeat after:bg-fixed after:absolute after:inset-0 after:z-[-1]">
       
        
          <Brands />
          <MoviesCollection />
    
  
             </main>
    </div>
  )
}
