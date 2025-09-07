import ClientBookingComponent from './ClientBookingComponent'

// SEO metadata for booking page
export const metadata = {
  title: 'Termin buchen - Dr. Anja Haile | Online Terminvereinbarung München',
  description: 'Vereinbaren Sie online einen Termin für psychotherapeutische Beratung in München. Erstgespräch unverbindlich. GDPR-konform und sicher.',
  keywords: 'Termin buchen München, Psychotherapie Termin, Online Terminbuchung, Erstgespräch Psychologe München',
  openGraph: {
    title: 'Termin buchen - Dr. Anja Haile München',
    description: 'Online Terminvereinbarung für psychotherapeutische Beratung. Erstgespräch unverbindlich und GDPR-konform.',
  }
}

export default function BookingPage() {
  return <ClientBookingComponent />
}