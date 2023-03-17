"use client";

import { Roboto } from "next/font/google";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Card from "./components/card";
import localFont from 'next/font/local'

import "./globals.css";

const circular = localFont({src: './circular-std-medium-500.ttf'})

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <NavBar />

      <main className={styles.main}>
        <div className={styles.intro}>
          <h1 className={circular.className}> About me </h1>{" "}
          <p className={circular.className}>
            {" "}
            The name is Hoang Viet Mai - a Software Developer based in
            Melbourne, Victoria, Australia.
            <br /> I am experienced in Mobile Development with Flutter and
            Full-stack Web Development with MongoDB - ExpressJS - ReactJS -
            NodeJS.
          </p>
          <br />
          <p className={circular.className}>
            {" "}
            Contact:{" "}
            <a href="mailto:hoangmai2139@gmail.com">
              {" "}
              <u> hoangmai2139@gmail.com </u>{" "}
            </a>
            <br />
          </p>
        </div>

        <h1 className={circular.className}> Featured projects</h1>{" "}

        <div className={styles.projects}>
          <div>
            <Card
              thumbnail="/lamaith-logo.png"
              url="https://www.lamaith.com.au/"
              name="LAMAITH"
              description="Web application for LAMAITH, a fashion and graphic design start-up based in Melbourne, Victoria, Australia."
            />
          </div>
        </div>
      </main>
    </>
  );
}
