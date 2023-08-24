import Head from 'next/head'
import './globals.css'
import type { Metadata } from 'next'
import {Open_Sans} from 'next/font/google'

const defaultFont = Open_Sans({
    subsets:['latin'],
});

export const metadata: Metadata = {
  title: 'Budgeting App',
  description: 'This is a simple budgeting application',
  viewport:'width = device-width, initial-scale = 1.0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="author" content="Marvin Mudegu"/>
        <meta property="og:title" content="Budgeting App"/>
        <meta property="og:type" content="website"/>
        {/*<meta property="og:url" content="https://MarvinMudegu.com/Portfolio"/>*/}
        {/*<meta property="og:image" content="../Resources/Logo.svg"/>*/}
        <meta property="og:description" content="This is a simple budgeting application"/>
        {/*<meta property="og:site_name" content="MarvinMudegu.com"/>*/}
      </Head>
      <body className={defaultFont.className}>
          {children}
      </body>
    </html>
  )
}
