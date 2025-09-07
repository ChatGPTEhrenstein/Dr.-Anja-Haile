import ClientAboutComponent from './ClientAboutComponent'

// SEO metadata for this page
export const metadata = {
  title: 'Über Dr. Anja Haile - Erfahrene Psychotherapeutin München | 15+ Jahre BDP-zertifiziert',
  description: 'Lernen Sie Dr. Anja Haile kennen - BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung in München. Spezialistin für kognitive Verhaltenstherapie.',
  keywords: 'Dr. Anja Haile, Psychotherapeutin München, BDP zertifiziert, kognitive Verhaltenstherapie, Psychologe München, Therapie Erfahrung',
  openGraph: {
    title: 'Über Dr. Anja Haile - Erfahrene Psychotherapeutin München',
    description: 'BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung. Spezialistin für kognitive Verhaltenstherapie in München.',
  }
}

export default function AboutPage() {
  return <ClientAboutComponent />
}