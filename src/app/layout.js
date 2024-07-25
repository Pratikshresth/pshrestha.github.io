// src/app/layout.js
import { Inter, DM_Sans, Space_Mono } from 'next/font/google'
import { cn } from '../lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const fontHeading = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'], // Adding the available weights
})

export default function Layout({ children }) {
  return (
    <div 
      className={cn(
        'antialiased',
        fontHeading.variable,
        fontBody.variable
      )}
    >
      {children}
    </div>
  );
}


