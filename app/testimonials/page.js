'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Star, Quote } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Maria K.",
      role: "Patientin",
      text: "Dr. Haile hat mir geholfen, meine Ängste zu überwinden und wieder Freude am Leben zu finden. Ihre einfühlsame und professionelle Art hat den Unterschied gemacht.",
      rating: 5
    },
    {
      name: "Thomas S.",
      role: "Patient",
      text: "Nach Jahren der Depression habe ich endlich einen Weg gefunden, positiv in die Zukunft zu blicken. Die kognitive Verhaltenstherapie bei Dr. Haile war sehr effektiv.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Patientin",
      text: "Der Workshop zum Selbstvertrauen war ein Wendepunkt für mich. Ich habe praktische Werkzeuge erhalten, die ich täglich anwende.",
      rating: 5
    },
    {
      name: "Michael B.",
      role: "Patient",
      text: "Die Betreuung war außergewöhnlich professionell. Dr. Haile versteht es, komplexe psychologische Konzepte verständlich zu erklären.",
      rating: 5
    },
    {
      name: "Anna L.",
      role: "Patientin",
      text: "Ich kann Dr. Haile nur weiterempfehlen. Sie schafft eine vertrauensvolle Atmosphäre, in der Heilung möglich wird.",
      rating: 5
    },
    {
      name: "Robert H.",
      role: "Patient",
      text: "Die Gruppentherapie hat mir gezeigt, dass ich nicht allein bin. Der Austausch mit anderen unter Dr. Hailes Anleitung war sehr bereichernd.",
      rating: 5
    }
  ]

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
              <Link href="/testimonials" className="text-blue-600 font-semibold">Testimonials</Link>
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
            Patientenstimmen
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-8">
            Erfahren Sie aus erster Hand, wie meine Patienten ihre Therapieerfahrung erlebt haben. 
            Diese authentischen Rückmeldungen zeigen die positiven Veränderungen, die durch professionelle 
            psychologische Betreuung möglich sind.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-6 h-6 text-blue-600 mr-2" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-blue-700 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t border-blue-100 pt-4">
                    <p className="font-semibold text-blue-900">{testimonial.name}</p>
                    <p className="text-sm text-blue-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Patientenzufriedenheit
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Weiterempfehlungsrate</p>
                <p className="text-blue-700">
                  Unsere Patienten empfehlen uns gerne weiter und kommen selbst für Folgebehandlungen zurück.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4.9/5</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Durchschnittsbewertung</p>
                <p className="text-blue-700">
                  Konstant hohe Bewertungen in allen Bereichen: Fachkompetenz, Empathie und Behandlungserfolg.
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Erfolgsrate</p>
                <p className="text-blue-700">
                  Messbare Verbesserung der Symptome und Lebensqualität bei der Mehrheit unserer Patienten.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Was Patienten besonders schätzen
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1495653797063-114787b77b23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx0aGVyYXB5fGVufDB8fHxibHVlfDE3NTY5ODk0Mjl8MA&ixlib=rb-4.1.0&q=85"
                alt="Vertrauensvolle Betreuung"
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Einfühlsame Betreuung</h3>
                <p className="text-blue-700">
                  "Dr. Haile schafft eine Atmosphäre des Vertrauens, in der ich mich sicher fühle, 
                  auch über schwierige Themen zu sprechen."
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Praktische Lösungen</h3>
                <p className="text-blue-700">
                  "Die erlernten Techniken kann ich direkt in meinem Alltag anwenden. 
                  Das macht den Unterschied zwischen Theorie und echter Hilfe aus."
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Langfristige Erfolge</h3>
                <p className="text-blue-700">
                  "Nicht nur die Symptome wurden behandelt, sondern ich habe gelernt, 
                  wie ich dauerhaft mit Herausforderungen umgehen kann."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Datenschutz und Anonymität</h3>
              <p className="text-blue-700 text-sm">
                Alle Testimonials wurden mit ausdrücklicher Einwilligung der Patienten veröffentlicht. 
                Namen wurden zum Schutz der Privatsphäre anonymisiert. Die Aussagen spiegeln echte 
                Erfahrungen aus meiner therapeutischen Praxis wider.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Werden auch Sie Teil unserer Erfolgsgeschichten
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Starten Sie Ihren Weg zur positiven Veränderung. Vereinbaren Sie ein unverbindliches 
            Erstgespräch und erfahren Sie, wie ich Ihnen helfen kann.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Jetzt Erstgespräch buchen
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