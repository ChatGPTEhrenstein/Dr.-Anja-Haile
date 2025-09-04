'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Star, Quote, Heart, Users, Lightbulb, Calendar, Menu, ArrowRight, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function TestimonialsPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'Über mich' },
    { href: '/services', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials', active: true },
    { href: '/contact', label: 'Kontakt' }
  ]

  const testimonials = [
    {
      name: "Jacob",
      role: "Kursteilnehmer",
      text: "Mir hat Ihr Kurs nicht nur wegen der spannenden Inhalte sehr gut gefallen, sondern auch wegen des angenehmen Klimas, das geherrscht hat. Man hatte das Gefühl Sie kommunizieren wirklich auf Augenhöhe. Zum Beispiel, wie Sie Lösungen für Ihre eigenen Herausforderungen gefunden haben und wie Sie heute darüber denken, konnten sie uns als Zuhörer wirklich abholen. Geholfen hat auch, dass Sie eine ansteckende Begeisterung für die Themen ausstrahlten. Auch der Raum für Selbstreflektion im Rahmen der Diskussionen und Meditationen war für mich sehr lehrreich. Mich hat Ihr Kurs sehr weitergebracht und meine Sozialkompetenz vor allem auch für den ärztlichen Alltag verbessert. Vielen Dank!",
      rating: 5,
      category: "Kurs",
      icon: Users,
      color: "from-blue-100 to-indigo-100",
      iconColor: "text-blue-600"
    },
    {
      name: "Lena",
      role: "Kursteilnehmerin", 
      text: "Ich muss Dir nochmal danken für die super tolle Gestaltung des Kurses. Ich konnte so sehr profitieren von Deinen Erzählungen, Visualisierungen und Meditationen. Wenn man mich früher danach gefragt hätte, hätte ich es vermutlich belächelt, aber mittlerweile ist das zu einem festen Bestandteil von meinem Alltag geworden. Auch, dass jeder für sein eigenes Leben zuständig ist war hart zu lernen aber hilft einem so unendlich weiter. Ich konnte durch Deine Denkanstöße und Ideen Dinge erfahren, die mir so vorher überhaupt nicht klar waren. also Danke, mich haben diese sechs Kurstage echt weitergebracht und bereichert, und meiner Meinung nach müsste jeder Psychologie Kurs so gestaltet sein, weil man dabei auch wirklich was fürs Leben lernt. Mach unbedingt weiter so!!!",
      rating: 5,
      category: "Kurs",
      icon: Lightbulb,
      color: "from-yellow-100 to-amber-100",
      iconColor: "text-yellow-600"
    },
    {
      name: "Franziska",
      role: "Patientin",
      text: "Das Verhältnis zwischen mir und Frau Dr. Haile war stets professionell und vertrauensvoll. Auch mit für mich eher schwierigen Themen konnte ich mich bei Frau Dr. Haile öffnen. Besonders förderlich waren für mich die Einbindung von Meditation und Visualisierungen. Wer diesen Methoden nicht ganz abgeneigt ist, ist bei Frau Dr. Anja Haile genau richtig. Ich möchte mich herzlich für die Zeit und die Unterstützung bedanken.",
      rating: 5,
      category: "Therapie",
      icon: Heart,
      color: "from-pink-100 to-red-100",
      iconColor: "text-pink-600"
    },
    {
      name: "G.",
      role: "Kursteilnehmer",
      text: "Liebe Anja, vielen Dank für Deine Zeit. Der Kurs hat viel Spaß gemacht und meine Einstellung zu Psychologie von Grund auf geändert. Ich würde mich freuen mit Dir in Kontakt zu bleiben auch wissenschaftlich.",
      rating: 5,
      category: "Kurs",
      icon: Lightbulb,
      color: "from-green-100 to-emerald-100",
      iconColor: "text-green-600"
    },
    {
      name: "Sven",
      role: "Kursteilnehmer",
      text: "Hey Anja, vielen Dank für den sehr interessanten Kurs, war echt gut!",
      rating: 5,
      category: "Kurs",
      icon: Users,
      color: "from-purple-100 to-violet-100",
      iconColor: "text-purple-600"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* Enhanced Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-amber-100/50 shadow-lg shadow-amber-500/5' 
          : 'bg-white/80 backdrop-blur-md border-b border-amber-100/30'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <Link href="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
              <div className="relative">
                <Image 
                  src="/images/bdp-logo.png" 
                  alt="BDP - Berufsverband deutscher Psychologen" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 drop-shadow-sm"
                />
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Dr. Anja Haile</span>
                <span className="text-xs text-amber-600 font-medium">Psychologische Psychotherapeutin</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    link.active 
                      ? 'bg-amber-100 text-amber-700 shadow-sm' 
                      : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50/80'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-3">
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105">
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin buchen
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-amber-100/50 shadow-xl animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      link.active 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Content */}
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Enhanced Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 group transition-all duration-200">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Echte Erfahrungen
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Authentische Stimmen
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Erfahren Sie aus erster Hand, wie Kursteilnehmer und Patienten ihre Erfahrungen mit 
              Dr. Anja Haile erlebt haben. Diese authentischen Rückmeldungen zeigen die positiven 
              Veränderungen durch professionelle psychologische Betreuung.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-20 animate-in slide-in-from-bottom-6 duration-1000">
            {[
              { number: "100%", label: "Authentische Bewertungen", description: "Echte, unveränderte Rückmeldungen", color: "text-emerald-600" },
              { number: "5/5", label: "Durchschnittsbewertung", description: "Konstant höchste Bewertungen", color: "text-amber-600" },
              { number: "6+", label: "Jahre Erfahrung", description: "Bewährte Methoden mit nachhaltigem Erfolg", color: "text-blue-600" }
            ].map((stat, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-lg hover:shadow-xl transition-all duration-500 group text-center">
                <CardContent className="p-8">
                  <div className={`text-4xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{stat.label}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Was Klienten sagen</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Authentische Rückmeldungen von Kursteilnehmern und Patienten
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="animate-in slide-in-from-bottom-8 duration-1000 group" style={{animationDelay: `${index * 200}ms`}}>
                  <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 h-full">
                    <CardContent className="p-8 h-full flex flex-col">
                      <div className="flex items-center mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${testimonial.color} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <testimonial.icon className={`w-8 h-8 ${testimonial.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Quote className="w-5 h-5 text-amber-600" />
                            <div className="flex">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                            testimonial.category === 'Kurs' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {testimonial.category}
                          </span>
                        </div>
                      </div>
                      
                      <blockquote className="text-slate-600 mb-6 leading-relaxed italic flex-1 text-lg">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="border-t border-slate-100 pt-6">
                        <p className="font-bold text-slate-800 text-lg">{testimonial.name}</p>
                        <p className="text-amber-600 font-medium">{testimonial.role}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mb-20">
            <Card className="border-0 bg-gradient-to-r from-white to-amber-50/30 shadow-xl shadow-amber-500/5 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">Was besonders geschätzt wird</h2>
                      <p className="text-lg text-slate-600">
                        Die häufigsten positiven Rückmeldungen meiner Klienten
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      {[
                        {
                          title: "Kommunikation auf Augenhöhe",
                          quote: "Man hatte das Gefühl Sie kommunizieren wirklich auf Augenhöhe... konnten sie uns als Zuhörer wirklich abholen.",
                          author: "Jacob",
                          color: "from-blue-100 to-indigo-100",
                          iconColor: "text-blue-600"
                        },
                        {
                          title: "Meditation & Visualisierungen",
                          quote: "Besonders förderlich waren für mich die Einbindung von Meditation und Visualisierungen.",
                          author: "Franziska",
                          color: "from-purple-100 to-violet-100",
                          iconColor: "text-purple-600"
                        },
                        {
                          title: "Praktischer Nutzen für den Alltag",
                          quote: "Mittlerweile ist das zu einem festen Bestandteil von meinem Alltag geworden... man dabei auch wirklich was fürs Leben lernt.",
                          author: "Lena",
                          color: "from-green-100 to-emerald-100",
                          iconColor: "text-green-600"
                        },
                        {
                          title: "Ansteckende Begeisterung",
                          quote: "Geholfen hat auch, dass Sie eine ansteckende Begeisterung für die Themen ausstrahlten.",
                          author: "Jacob",
                          color: "from-yellow-100 to-amber-100",
                          iconColor: "text-yellow-600"
                        }
                      ].map((item, index) => (
                        <div key={index} className="group">
                          <div className="flex items-start space-x-4">
                            <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                              <CheckCircle className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
                                {item.title}
                              </h3>
                              <blockquote className="text-slate-600 italic mb-2">
                                "{item.quote}"
                              </blockquote>
                              <cite className="text-amber-600 font-medium text-sm not-italic">— {item.author}</cite>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:p-6 order-1 lg:order-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
                    <img 
                      src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg"
                      alt="Dr. Anja Haile - Vertrauensvolle Atmosphäre"
                      className="w-full h-[400px] lg:h-[700px] object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Privacy Note */}
          <div className="mb-20">
            <Card className="border-0 bg-gradient-to-r from-slate-50 to-amber-50/50 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-lg mb-3">Authentizität und Datenschutz</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Alle Testimonials sind authentische, unveränderte Rückmeldungen und wurden mit ausdrücklicher 
                      Einwilligung der Verfasser veröffentlicht. Die Aussagen spiegeln echte Erfahrungen aus 
                      Dr. Hailes therapeutischer Praxis und Kursangeboten wider. Einige Namen wurden zur besseren 
                      Lesbarkeit gekürzt, die Identität der Personen ist Dr. Haile bekannt.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-20">
            <Card className="border-0 bg-gradient-to-r from-amber-600 to-orange-700 shadow-xl shadow-amber-500/25 overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-white relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Werden auch Sie Teil unserer Erfolgsgeschichten
                  </h2>
                  <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Erleben Sie selbst die professionelle, einfühlsame Betreuung von Dr. Anja Haile. 
                    Vereinbaren Sie ein unverbindliches Erstgespräch und starten Sie Ihren Weg zur positiven Veränderung.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/booking">
                      <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Jetzt Erstgespräch buchen
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <div className="text-amber-100">
                      <div className="font-semibold">Kostenloses Erstgespräch</div>
                      <div className="text-sm opacity-80">50 Minuten unverbindlich</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/images/bdp-logo.png" 
                  alt="BDP Logo" 
                  width={50} 
                  height={50}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold">Dr. Anja Haile</h3>
                  <p className="text-slate-300 text-sm">Psychologische Psychotherapeutin</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Professionelle psychologische Betreuung in München. 
                Spezialisiert auf kognitive Verhaltenstherapie für nachhaltige Veränderungen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Navigation</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-slate-300 hover:text-amber-400 transition-colors">Über mich</Link>
                <Link href="/services" className="block text-slate-300 hover:text-amber-400 transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-slate-300 hover:text-amber-400 transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-amber-400 font-medium">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Kontakt</h4>
              <div className="space-y-3">
                <Link href="/contact" className="block text-slate-300 hover:text-amber-400 transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-slate-300 hover:text-amber-400 transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Rechtliches</h4>
              <div className="space-y-3">
                <Link href="/impressum" className="block text-slate-300 hover:text-amber-400 transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-slate-300 hover:text-amber-400 transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}