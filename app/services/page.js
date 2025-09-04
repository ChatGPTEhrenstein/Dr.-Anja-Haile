'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Brain, Heart, Users, Clock, Calendar, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
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
              <Link href="/services" className="text-blue-600 font-semibold">Leistungen</Link>
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

        {/* Hero Section */}
        <section className="py-12 text-center">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Meine Leistungen
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-8">
            Spezialisierte psychologische Psychotherapie mit Fokus auf kognitive Verhaltenstherapie. 
            Individuelle Betreuung für Ihre persönliche Entwicklung und mentale Gesundheit.
          </p>
        </section>

        {/* Main Services */}
        <section className="py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Service 1 - Erstgespräch */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-900">
                  Erstgespräch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-700">
                  Unverbindliches Kennenlernen zur Klärung Ihrer Anliegen und Zielsetzungen. 
                  Gemeinsam besprechen wir Ihre Situation und entwickeln einen ersten Therapieplan.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Dauer: 50 Minuten
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Unverbindlich & vertraulich
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Persönliche Bedarfsanalyse
                  </div>
                </div>
                <Link href="/booking" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Erstgespräch buchen
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service 2 - Einzeltherapie */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-900">
                  Kognitive Verhaltenstherapie
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-700">
                  Evidenzbasierte Therapie zur Veränderung ungünstiger Denkmuster und Verhaltensweisen. 
                  Nachhaltige Lösungen für Depression, Angst und andere psychische Belastungen.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Wissenschaftlich fundiert
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Individuelle Therapiepläne
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Langfristige Veränderung
                  </div>
                </div>
                <Link href="/booking" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Beratung vereinbaren
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Service 3 - Workshop */}
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-blue-900">
                  Workshops & Beratung
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-blue-700">
                  Themenspezifische Workshops und intensive Beratungssitzungen für spezielle Anliegen. 
                  Gruppensitzungen oder Einzelberatung nach Bedarf.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Flexible Formate
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Spezielle Themenbereiche
                  </div>
                  <div className="flex items-center text-sm text-blue-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Praktische Übungen
                  </div>
                </div>
                <Link href="/booking" className="block">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Workshop anfragen
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Spezialisierungen
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1585639408964-b8938d59264e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzc3xlbnwwfHx8Ymx1ZXwxNzU2OTg5NDQwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Emotionale Transformation"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Emotionale Transformation</h3>
                  <p className="text-blue-700">
                    Unterstützung bei der Entwicklung emotionaler Stabilität, Selbstakzeptanz 
                    und dem Umgang mit schwierigen Gefühlen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Selbstzweifel überwinden</h3>
                  <p className="text-blue-700">
                    Gezieltes Training zur Stärkung des Selbstvertrauens und zur Überwindung 
                    limitierender Glaubenssätze.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Lebensziele erreichen</h3>
                  <p className="text-blue-700">
                    Begleitung bei der Entwicklung und Umsetzung persönlicher Ziele 
                    für ein erfülltes Leben.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Wie läuft die Therapie ab?
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Erstgespräch</h3>
              <p className="text-blue-700 text-sm">
                Unverbindliches Kennenlernen und Bedarfsanalyse
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Planung</h3>
              <p className="text-blue-700 text-sm">
                Gemeinsame Entwicklung Ihres individuellen Therapieplans
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Durchführung</h3>
              <p className="text-blue-700 text-sm">
                Regelmäßige Sitzungen mit praktischen Übungen
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Erfolg</h3>
              <p className="text-blue-700 text-sm">
                Nachhaltige Veränderung und persönliches Wachstum
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihre Veränderung?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute ein unverbindliches Erstgespräch und machen Sie 
            den ersten Schritt zu einem erfüllteren Leben.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calendar className="mr-2 w-5 h-5" />
              Jetzt Termin buchen
            </Button>
          </Link>
        </section>
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