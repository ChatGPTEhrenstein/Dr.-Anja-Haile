import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Anja Haile - Psychologische Psychotherapeutin München',
  description: 'Psychologische Psychotherapie und Beratung in München. Spezialisiert auf kognitive Verhaltenstherapie für mentale und emotionale Veränderung.',
  keywords: 'Psychotherapie München, kognitive Verhaltenstherapie, Dr. Anja Haile, Therapie',
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}