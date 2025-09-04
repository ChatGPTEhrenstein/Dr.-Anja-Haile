'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Clock, CheckCircle } from 'lucide-react'

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/bdp-logo.svg" 
                alt="BDP - Berufsverband deutscher Psychologen" 
                width={50} 
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-blue-900">Dr. Anja Haile</span>
                <span className="text-xs text-blue-600">Psychologische Psychotherapeutin</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-blue-800 hover:text-blue-600 transition-colors">Über mich</Link>
              <Link href="/services" className="text-blue-800 hover:text-blue-600 transition-colors">Leistungen</Link>
              <Link href="/portfolio" className="text-blue-800 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/testimonials" className="text-blue-800 hover:text-blue-600 transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-blue-800 hover:text-blue-600 transition-colors">Kontakt</Link>
            </div>
            <Link href="/booking">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Termin buchen
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Termin buchen
            </h1>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Vereinbaren Sie einen Termin für ein unverbindliches Erstgespräch oder eine Beratungssitzung. 
              Ich freue mich darauf, Sie kennenzulernen.
            </p>
          </div>

          {/* Booking Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Flexible Termine</h3>
                <p className="text-sm text-blue-700">Örtlich und zeitlich flexibel</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Erstgespräch</h3>
                <p className="text-sm text-blue-700">Unverbindliches Kennenlernen</p>
              </CardContent>
            </Card>

            <Card className="border-blue-200">
              <CardContent className="p-6 text-center">
                <Shield className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold text-blue-900 mb-2">Vertraulich</h3>
                <p className="text-sm text-blue-700">Geschützter Rahmen</p>
              </CardContent>
            </Card>
          </div>

          {/* Calendar Section */}
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900 text-center">
                Wählen Sie Ihren Wunschtermin
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/bookings/anjahaile"
                  style={{
                    width: '100%',
                    height: '900px',
                    border: 'none',
                    borderRadius: '8px'
                  }}
                  frameBorder="0"
                  scrolling="auto"
                  title="Terminbuchung"
                />
              </div>
            </CardContent>
          </Card>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-blue-700 mb-4">
              Haben Sie Schwierigkeiten mit der Online-Buchung?
            </p>
            <Link href="/contact">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Kontaktieren Sie mich direkt
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/images/bdp-logo.svg" 
                  alt="BDP Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-bold">Dr. Anja Haile</h3>
              </div>
              <p className="text-blue-200">
                Psychologische Psychotherapeutin<br />
                München, Deutschland
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-blue-200 hover:text-white transition-colors">Über mich</Link>
                <Link href="/services" className="block text-blue-200 hover:text-white transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-blue-200 hover:text-white transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-blue-200 hover:text-white transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-blue-200 hover:text-white transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-blue-200 hover:text-white transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-blue-200 hover:text-white transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-blue-200 hover:text-white transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}