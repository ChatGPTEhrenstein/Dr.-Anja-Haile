import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dr. Anja Haile - Psychologische Psychotherapeutin München | Kognitive Verhaltenstherapie',
  description: 'Erfahrene Psychologische Psychotherapeutin in München. Spezialisiert auf kognitive Verhaltenstherapie bei Depressionen, Angststörungen & Burnout. BDP-zertifiziert mit 15+ Jahren Erfahrung. Jetzt Termin buchen.',
  keywords: 'Psychotherapie München, kognitive Verhaltenstherapie, Dr. Anja Haile, Therapie München, Psychologe München, Depression behandeln, Angststörung Therapie, Burnout Hilfe, BDP Psychotherapeut',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
  themeColor: '#e2aa5a',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://funktioniert-jetzt.preview.emergentagent.com',
    title: 'Dr. Anja Haile - Psychologische Psychotherapeutin München',
    description: 'Erfahrene Psychologische Psychotherapeutin in München. Kognitive Verhaltenstherapie bei Depressionen, Angststörungen & Burnout. Jetzt Termin buchen.',
    siteName: 'Dr. Anja Haile - Psychotherapie München',
    images: [
      {
        url: 'https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Anja Haile - Psychologische Psychotherapeutin München',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Anja Haile - Psychologische Psychotherapeutin München',
    description: 'Erfahrene Psychotherapeutin in München. Kognitive Verhaltenstherapie bei Depressionen, Angststörungen & Burnout.',
    images: ['https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg'],
  },

  // Additional meta tags
  author: 'Dr. Anja Haile',
  creator: 'Dr. Anja Haile',
  publisher: 'Dr. Anja Haile',
  category: 'Healthcare',
  
  // Local Business / Medical Practice
  other: {
    'geo.region': 'DE-BY',
    'geo.placename': 'München',
    'geo.position': '48.1351;11.5820',
    'ICBM': '48.1351, 11.5820',
    'medical.specialty': 'Psychotherapie',
    'medical.credentials': 'Dr. phil., Psychologische Psychotherapeutin',
    'business.contact_data.street_address': 'Maximilianstraße 10',
    'business.contact_data.locality': 'München',
    'business.contact_data.region': 'Bayern',
    'business.contact_data.postal_code': '80539',
    'business.contact_data.country_name': 'Deutschland',
    'business.contact_data.phone_number': '+49 89 123 456 789',
    'business.contact_data.email': 'praxis@anjahaile.de',
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Dr. Anja Haile'
  },
  formatDetection: {
    telephone: true,
    email: true
  },

  // Verification (would need real values from user)
  verification: {
    // google: 'google-site-verification-code',
    // bing: 'bing-site-verification-code',
  },

  // Canonical URL
  alternates: {
    canonical: 'https://funktioniert-jetzt.preview.emergentagent.com',
  },
}

// Structured Data JSON-LD
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://funktioniert-jetzt.preview.emergentagent.com',
  name: 'Dr. Anja Haile - Psychologische Psychotherapeutin',
  alternateName: 'Praxis Dr. Anja Haile',
  description: 'Erfahrene Psychologische Psychotherapeutin in München. Spezialisiert auf kognitive Verhaltenstherapie bei Depressionen, Angststörungen und Burnout.',
  url: 'https://funktioniert-jetzt.preview.emergentagent.com',
  telephone: '+49 89 123 456 789',
  email: 'praxis@anjahaile.de',
  
  // Medical Business specific
  medicalSpecialty: 'Psychotherapie',
  
  // Professional qualifications
  founder: {
    '@type': 'Person',
    name: 'Dr. Anja Haile',
    jobTitle: 'Psychologische Psychotherapeutin',
    description: 'BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung in kognitiver Verhaltenstherapie.',
    credential: 'Dr. phil., Approbierte Psychologische Psychotherapeutin',
    memberOf: {
      '@type': 'Organization',
      name: 'Berufsverband deutscher Psychologen (BDP)'
    }
  },

  // Address
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Maximilianstraße 10',
    addressLocality: 'München',
    addressRegion: 'Bayern',
    postalCode: '80539',
    addressCountry: 'DE'
  },

  // Geographic coordinates
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.1351,
    longitude: 11.5820
  },

  // Services offered
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Psychotherapeutische Leistungen',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalTherapy',
          name: 'Kognitive Verhaltenstherapie',
          description: 'Evidenzbasierte Therapie zur Behandlung von Depressionen, Angststörungen und anderen psychischen Belastungen'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalTherapy',
          name: 'Einzeltherapie',
          description: 'Individuelle psychotherapeutische Betreuung in vertrauensvoller Atmosphäre'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'MedicalTherapy',
          name: 'Paartherapie',
          description: 'Unterstützung für Paare zur Verbesserung der Kommunikation und Beziehungsqualität'
        }
      }
    ]
  },

  // Opening hours
  openingHours: [
    'Mo-Fr 09:00-17:00'
  ],

  // Same as (social media profiles - would need real URLs)
  sameAs: [
    // 'https://www.linkedin.com/in/dr-anja-haile',
    // 'https://www.xing.com/profile/Dr_Anja_Haile'
  ],

  // Areas served
  areaServed: {
    '@type': 'City',
    name: 'München',
    containedInPlace: {
      '@type': 'State',
      name: 'Bayern',
      containedInPlace: {
        '@type': 'Country',
        name: 'Deutschland'
      }
    }
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://anjahaile.de" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical images */}
        <link 
          rel="preload" 
          as="image" 
          href="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}