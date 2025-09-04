'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, GraduationCap, Award, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Dr. Anja Haile
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-blue-600 font-semibold">Über mich</Link>
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

        {/* Hero Section */}
        <section className="py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxwcm9mZXNzaW9uYWx8ZW58MHx8fGJsdWV8MTc1Njk4OTQzNHww&ixlib=rb-4.1.0&q=85"
                alt="Dr. Anja Haile"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-blue-900">
                Über mich
              </h1>
              <p className="text-lg text-blue-700 leading-relaxed">
                Als psychologische Psychotherapeutin mit Spezialisierung auf kognitive Verhaltenstherapie 
                begleite ich Menschen dabei, langfristige positive Veränderungen in ihrem Leben zu erreichen. 
                Seit 2018 praktiziere ich unter Supervision und helfe meinen Klienten dabei, Selbstzweifel 
                zu überwinden und mit Freude sie selbst zu sein.
              </p>
              <p className="text-lg text-blue-700 leading-relaxed">
                Mein Ansatz ist geprägt von Empathie, wissenschaftlich fundierter Methodik und der festen 
                Überzeugung, dass jeder Mensch das Potenzial zur positiven Veränderung in sich trägt.
              </p>
            </div>
          </div>
        </section>

        {/* Qualifications */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Qualifikationen & Erfahrung
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <GraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Ausbildung
                </h3>
                <p className="text-blue-700">
                  Psychologische Psychotherapeutin mit Fokus auf kognitive Verhaltenstherapie. 
                  Fundierte wissenschaftliche Ausbildung und kontinuierliche Weiterbildung.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Erfahrung
                </h3>
                <p className="text-blue-700">
                  Seit 2018 in der Praxis tätig unter Supervision. Umfangreiche Erfahrung 
                  in der Behandlung verschiedener psychischer Belastungen und Störungen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-blue-900 mb-3">
                  Philosophie
                </h3>
                <p className="text-blue-700">
                  Mein Ziel ist es, Menschen dabei zu unterstützen, ihre innere Stärke zu entdecken 
                  und ein erfülltes, authentisches Leben zu führen.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Meine Werte
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Empathie & Verständnis</h3>
                  <p className="text-blue-700">
                    Jeder Mensch ist einzigartig. Ich begegne meinen Klienten mit Respekt, 
                    Wertschätzung und einem offenen Herzen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Wissenschaftliche Fundierung</h3>
                  <p className="text-blue-700">
                    Meine Arbeit basiert auf evidenzbasierten Methoden der kognitiven Verhaltenstherapie 
                    und aktuellen wissenschaftlichen Erkenntnissen.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Ganzheitlicher Ansatz</h3>
                  <p className="text-blue-700">
                    Ich betrachte den Menschen in seiner Gesamtheit und berücksichtige 
                    individuelle Bedürfnisse, Ressourcen und Lebenssituationen.
                  </p>
                </div>
              </div>
              
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1495653797063-114787b77b23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0aGVyYXB5fGVufDB8fHxibHVlfDE3NTY5ODk0Mjl8MA&ixlib=rb-4.1.0&q=85"
                  alt="Unterstützung und Begleitung"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Lernen Sie mich kennen
          </h2>
          <p className="text-lg text-blue-700 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, 
            wie ich Sie auf Ihrem Weg begleiten kann.
          </p>
          <Link href="/booking">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Erstgespräch vereinbaren
            </Button>
          </Link>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Anja Haile</h3>
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