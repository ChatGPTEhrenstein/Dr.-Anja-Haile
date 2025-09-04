'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Brain, Users, Calendar, Menu, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/bdp-logo.png" 
                alt="BDP - Berufsverband deutscher Psychologen" 
                width={60} 
                height={60}
                className="w-14 h-14"
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl font-bold text-blue-900 leading-tight">
                Wow – endlich mit <span className="text-blue-600">Freude</span> Du sein!
              </h1>
              <p className="text-xl text-blue-700 leading-relaxed">
                Wie Veränderung langfristig gelingt – smart, örtlich und zeitlich flexibel. 
                Psychologische Psychotherapie mit Fokus auf kognitive Verhaltenstherapie 
                für mentale und emotionale Transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    Erstgespräch vereinbaren
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Mehr über mich
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:order-last">
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                alt="Dr. Anja Haile - Therapie und Beratung"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Therapy & Research
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Spezialisierte Unterstützung für mentale und emotionale Veränderungen. 
              Überwinden Sie Selbstzweifel und führen Sie ein erfüllteres Leben.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Kognitive Verhaltenstherapie
                </h3>
                <p className="text-blue-700">
                  Evidenzbasierte Methoden zur nachhaltigen Veränderung von Denkmustern und Verhaltensweisen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Emotionale Transformation
                </h3>
                <p className="text-blue-700">
                  Begleitung bei der Entwicklung emotionaler Stabilität und Selbstakzeptanz.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Individuelle Beratung
                </h3>
                <p className="text-blue-700">
                  Maßgeschneiderte Therapieansätze für Ihre persönlichen Bedürfnisse und Ziele.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Atmosphäre & Eindrücke Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Atmosphäre & Eindrücke
            </h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Lernen Sie mich und meine professionelle, warme Arbeitsatmosphäre kennen. 
              Ein Raum für Vertrauen, Wachstum und positive Veränderung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg"
                alt="Dr. Anja Haile - Professionelle Therapie Atmosphäre"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="relative">
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg"
                alt="Dr. Anja Haile - Einfühlsame Beratung"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
            
            <div className="relative">
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-178-scaled.jpg"
                alt="Dr. Anja Haile - Vertrauensvolle Gespräche"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover transition-transform hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Mehr über meine Arbeitsweise
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Bereit für Ihre Transformation?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Vereinbaren Sie ein unverbindliches Erstgespräch und beginnen Sie Ihren Weg zur Veränderung.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <Calendar className="mr-2 w-5 h-5" />
              Jetzt Termin buchen
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/images/bdp-logo.png" 
                  alt="BDP Logo" 
                  width={50} 
                  height={50}
                  className="w-12 h-12"
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