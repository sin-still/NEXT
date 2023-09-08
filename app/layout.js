import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='navbar'>
        <Link href="/">Home</Link>
        <Link href="/list">List</Link>
      </div>
        {children}
      </body>
    </html>
  )
}
