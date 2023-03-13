'use client';

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      {navbar()}

      <main className={styles.main}>
        
      </main>
    </>
  )
}
