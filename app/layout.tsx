import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import Navbar from './Navbar';
import './globals.css';
import AuthProvider from './auth/AuthProvider';

const poppins = Poppins({ subsets: ['latin'] , weight:['400', '500']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
        <Theme appearance='light'>
        <Navbar/>
          <main className='p-5'>
          {children}
          </main>
        </Theme>
        </AuthProvider>
      </body>
    </html>
  )
}