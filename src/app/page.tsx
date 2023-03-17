'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as styles from './page.module.css'
import NavBar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar/>

      <main className={styles.main}>

      </main>
    </>
  )
}
