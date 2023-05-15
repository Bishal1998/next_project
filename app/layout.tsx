import React from 'react'
import './globals.css'
import { Space_Grotesk } from 'next/font/google'

const font = Space_Grotesk({
  subsets: ['latin']
})

export const metadata = {
  title: 'Learn Form',
  description: 'Learn React Hook Form'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={font.className}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout