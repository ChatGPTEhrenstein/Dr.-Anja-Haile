import ClientServicesComponent from './ClientServicesComponent'

// SEO metadata for services page
export const metadata = {
  title: 'Psychotherapie Leistungen München - Kognitive Verhaltenstherapie | Dr. Anja Haile',
  description: 'Professionelle psychotherapeutische Leistungen in München: Kognitive Verhaltenstherapie, Einzeltherapie, Paartherapie. Behandlung von Depressionen, Angststörungen, Burnout.',
  keywords: 'Psychotherapie München, kognitive Verhaltenstherapie, Einzeltherapie, Paartherapie, Depression behandeln, Angststörung Therapie, Burnout Hilfe München',
  openGraph: {
    title: 'Psychotherapie Leistungen München - Dr. Anja Haile',
    description: 'Professionelle psychotherapeutische Leistungen: Kognitive Verhaltenstherapie, Einzeltherapie, Paartherapie in München.',
  }
}

export default function ServicesPage() {
  return <ClientServicesComponent />
}