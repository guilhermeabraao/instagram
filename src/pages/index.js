'use client';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import DesktopWarning from './api/components/desktopWarning'
import Header from './api/components/header/header'
import Stories from './api/components/stories/stories'
import Feed from './api/components/feed/feed'
import EmptySpaceFooter from './api/components/footer/emptySpaceFooter'
import Footer from './api/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Instagram layout with NextJs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <DesktopWarning />
        <Header />
        <Stories />
        <Feed />
        <Feed />
        <EmptySpaceFooter />
        <Footer />
      </main>
    </>
  )
}
