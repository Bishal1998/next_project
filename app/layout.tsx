import { Itim } from 'next/font/google';
import './globals.css'
import { AppContext } from '@/context/Context';

const font = Itim({
  subsets: ['latin'],
  weight: '400'
})

export const metadata = {
  title: 'Learn NextAuth',
  description: 'Learn NextAuth'
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>

    </html>
  )
}

export default RootLayout