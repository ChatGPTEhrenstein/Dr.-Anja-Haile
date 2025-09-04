'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Users, Brain, Heart, CheckCircle } from 'lucide-react'

export default function PortfolioPage() {
  const projects = [
    {
      title: "Gruppentherapie für Angststörungen",
      description: "Erfolgreiche Durchführung einer 12-wöchigen Gruppentherapie für Patienten mit verschiedenen Angststörungen.",
      results: ["85% Verbesserung der Symptome", "Hohe Teilnehmerzufriedenheit", "Nachhaltige Erfolge"],
      icon: Users,
      image: "https://images.unsplash.com/photo-1448387473223-5c37445527e7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwzfHx3ZWxsbmVzc3xlbnwwfHx8Ymx1ZXwxNzU2OTg5NDQwfDA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Kognitive Verhaltenstherapie bei Depression",
      description: "Individuelle Therapie mit Fokus auf Gedankenumstrukturierung und Verhaltensaktivierung.",
      results: ["Deutliche Verbesserung der Lebensqualität", "Entwicklung von Coping-Strategien", "Rückfallprävention"],
      icon: Brain,
      image: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx0aGVyYXB5fGVufDB8fHxibHVlfDE3NTY5ODk0Mjl8MA&ixlib=rb-4.1.0&q=85"
    },
    {
      title: "Workshop: Selbstvertrauen stärken",
      description: "Interaktiver Workshop zur Stärkung des Selbstvertrauens und Überwindung von Selbstzweifeln.",
      results: ["Praktische Übungen für den Alltag", "Peer-Learning Effekte", "Langfristige Motivation"],
      icon: Heart,
      image: "https://images.unsplash.com/photo-1585639408964-b8938d59264e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHw0fHx3ZWxsbmVzc3xlbnwwfHx8Ymx1ZXwxNzU2OTg5NDQwfDA&ixlib=rb-4.1.0&q=85"
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
              <Link href="/portfolio" className="text-blue-600 font-semibold">Portfolio</Link>
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
            Portfolio & Referenzen
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-8">
            Einblicke in meine therapeutische Arbeit und erfolgreiche Projekte. 
            Erfahren Sie mehr über bewährte Ansätze und positive Ergebnisse in der psychologischen Betreuung.
          </p>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="p-6 lg:p-8">
                    <div className="flex items-center mb-4">
                      <project.icon className="w-8 h-8 text-blue-600 mr-3" />
                      <h3 className="text-2xl font-bold text-blue-900">
                        {project.title}
                      </h3>
                    </div>
                    
                    <p className="text-blue-700 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-900">Ergebnisse:</h4>
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-center text-blue-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:p-6">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[300px] lg:h-[400px] object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Methodology Section */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Meine Arbeitsweise
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Evidenzbasiert
                </h3>
                <p className="text-blue-700">
                  Alle Methoden basieren auf wissenschaftlich fundierten Ansätzen 
                  der kognitiven Verhaltenstherapie.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Individuell
                </h3>
                <p className="text-blue-700">
                  Jeder Therapieplan wird individuell auf die Bedürfnisse 
                  und Ziele des Klienten abgestimmt.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-3">
                  Nachhaltig
                </h3>
                <p className="text-blue-700">
                  Fokus auf langfristige Veränderungen und die Entwicklung 
                  eigener Bewältigungsstrategien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Erfolgsstatistiken
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <p className="text-blue-700">Behandelte Patienten</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                <p className="text-blue-700">Erfolgsrate</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">6+</div>
                <p className="text-blue-700">Jahre Erfahrung</p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-blue-700">Weiterempfehlungen</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 text-center bg-blue-600 rounded-2xl text-white">
          <h2 className="text-3xl font-bold mb-4">
            Interessiert an meiner Arbeitsweise?
          </h2>
          <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
            Lernen Sie mich und meine Methoden in einem unverbindlichen Erstgespräch kennen. 
            Gemeinsam finden wir den passenden Weg für Ihre Situation.
          </p>
          <Link href="/booking">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              Erstgespräch vereinbaren
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