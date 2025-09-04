'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Star, Quote, Heart, Users, Lightbulb } from 'lucide-react'

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Jacob",
      role: "Kursteilnehmer",
      text: "Mir hat Ihr Kurs nicht nur wegen der spannenden Inhalte sehr gut gefallen, sondern auch wegen des angenehmen Klimas, das geherrscht hat. Man hatte das Gefühl Sie kommunizieren wirklich auf Augenhöhe. Zum Beispiel, wie Sie Lösungen für Ihre eigenen Herausforderungen gefunden haben und wie Sie heute darüber denken, konnten sie uns als Zuhörer wirklich abholen. Geholfen hat auch, dass Sie eine ansteckende Begeisterung für die Themen ausstrahlten. Auch der Raum für Selbstreflektion im Rahmen der Diskussionen und Meditationen war für mich sehr lehrreich. Mich hat Ihr Kurs sehr weitergebracht und meine Sozialkompetenz vor allem auch für den ärztlichen Alltag verbessert. Vielen Dank!",
      rating: 5,
      category: "Kurs",
      icon: Users
    },
    {
      name: "Lena",
      role: "Kursteilnehmerin", 
      text: "Ich muss Dir nochmal danken für die super tolle Gestaltung des Kurses. Ich konnte so sehr profitieren von Deinen Erzählungen, Visualisierungen und Meditationen. Wenn man mich früher danach gefragt hätte, hätte ich es vermutlich belächelt, aber mittlerweile ist das zu einem festen Bestandteil von meinem Alltag geworden. Auch, dass jeder für sein eigenes Leben zuständig ist war hart zu lernen aber hilft einem so unendlich weiter. Ich konnte durch Deine Denkanstöße und Ideen Dinge erfahren, die mir so vorher überhaupt nicht klar waren. also Danke, mich haben diese sechs Kurstage echt weitergebracht und bereichert, und meiner Meinung nach müsste jeder Psychologie Kurs so gestaltet sein, weil man dabei auch wirklich was fürs Leben lernt. Mach unbedingt weiter so!!!",
      rating: 5,
      category: "Kurs",
      icon: Lightbulb
    },
    {
      name: "Franziska",
      role: "Patientin",
      text: "Das Verhältnis zwischen mir und Frau Dr. Haile war stets professionell und vertrauensvoll. Auch mit für mich eher schwierigen Themen konnte ich mich bei Frau Dr. Haile öffnen. Besonders förderlich waren für mich die Einbindung von Meditation und Visualisierungen. Wer diesen Methoden nicht ganz abgeneigt ist, ist bei Frau Dr. Anja Haile genau richtig. Ich möchte mich herzlich für die Zeit und die Unterstützung bedanken.",
      rating: 5,
      category: "Therapie",
      icon: Heart
    },
    {
      name: "G.",
      role: "Kursteilnehmer",
      text: "Liebe Anja, vielen Dank für Deine Zeit. Der Kurs hat viel Spaß gemacht und meine Einstellung zu Psychologie von Grund auf geändert. Ich würde mich freuen mit Dir in Kontakt zu bleiben auch wissenschaftlich.",
      rating: 5,
      category: "Kurs",
      icon: Lightbulb
    },
    {
      name: "Sven",
      role: "Kursteilnehmer",
      text: "Hey Anja, vielen Dank für den sehr interessanten Kurs, war echt gut!",
      rating: 5,
      category: "Kurs",
      icon: Users
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
            Authentische Stimmen
          </h1>
          <p className="text-lg text-blue-700 max-w-3xl mx-auto mb-8">
            Erfahren Sie aus erster Hand, wie Kursteilnehmer und Patienten ihre Erfahrungen mit 
            Dr. Anja Haile erlebt haben. Diese authentischen Rückmeldungen zeigen die positiven 
            Veränderungen durch professionelle psychologische Betreuung und innovative Kursgestaltung.
          </p>
        </section>

        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-blue-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <testimonial.icon className="w-8 h-8 text-blue-600 mr-3" />
                    <div className="flex items-center space-x-2">
                      <Quote className="w-5 h-5 text-blue-600" />
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    <span className={`ml-auto px-3 py-1 text-xs font-semibold rounded-full ${
                      testimonial.category === 'Kurs' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {testimonial.category}
                    </span>
                  </div>
                  
                  <p className="text-blue-700 mb-6 leading-relaxed italic text-sm">
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

        {/* Key Highlights */}
        <section className="py-16 bg-white rounded-2xl">
          <div className="container mx-auto px-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
              Was besonders geschätzt wird
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg"
                  alt="Dr. Anja Haile - Vertrauensvolle Atmosphäre"
                  className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Kommunikation auf Augenhöhe</h3>
                  <p className="text-blue-700">
                    "Man hatte das Gefühl Sie kommunizieren wirklich auf Augenhöhe... konnten sie uns als Zuhörer wirklich abholen."
                    <span className="text-sm text-blue-500 italic"> - Jacob</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Meditation & Visualisierungen</h3>
                  <p className="text-blue-700">
                    "Besonders förderlich waren für mich die Einbindung von Meditation und Visualisierungen."
                    <span className="text-sm text-blue-500 italic"> - Franziska</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Praktischer Nutzen für den Alltag</h3>
                  <p className="text-blue-700">
                    "Mittlerweile ist das zu einem festen Bestandteil von meinem Alltag geworden... man dabei auch wirklich was fürs Leben lernt."
                    <span className="text-sm text-blue-500 italic"> - Lena</span>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">Ansteckende Begeisterung</h3>
                  <p className="text-blue-700">
                    "Geholfen hat auch, dass Sie eine ansteckende Begeisterung für die Themen ausstrahlten."
                    <span className="text-sm text-blue-500 italic"> - Jacob</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Zufriedenheit & Erfolg
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Authentische Bewertungen</p>
                <p className="text-blue-700 text-sm">
                  Alle Testimonials sind echte, unveränderte Rückmeldungen von Kursteilnehmern und Patienten.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">5/5</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Durchschnittsbewertung</p>
                <p className="text-blue-700 text-sm">
                  Konstant höchste Bewertungen in allen Bereichen: Kursgestaltung, Therapie und persönliche Betreuung.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">6+</div>
                <p className="text-lg text-blue-900 font-semibold mb-2">Jahre Erfahrung</p>
                <p className="text-blue-700 text-sm">
                  Bewährte Methoden mit nachhaltigem Erfolg in Therapie, Kursen und persönlicher Entwicklung.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Privacy Note */}
        <section className="py-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardContent className="p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Authentizität und Datenschutz</h3>
              <p className="text-blue-700 text-sm">
                Alle Testimonials sind authentische, unveränderte Rückmeldungen und wurden mit ausdrücklicher 
                Einwilligung der Verfasser veröffentlicht. Die Aussagen spiegeln echte Erfahrungen aus 
                Dr. Hailes therapeutischer Praxis und Kursangeboten wider. Einige Namen wurden zur besseren 
                Lesbarkeit gekürzt, die Identität der Personen ist Dr. Haile bekannt.
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
            Erleben Sie selbst die professionelle, einfühlsame Betreuung von Dr. Anja Haile. 
            Vereinbaren Sie ein unverbindliches Erstgespräch und starten Sie Ihren Weg zur positiven Veränderung.
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