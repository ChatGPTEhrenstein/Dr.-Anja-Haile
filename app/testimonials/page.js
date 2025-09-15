'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowLeft, Star, Quote, Calendar, Shield, Heart, Brain, Users, CheckCircle, Menu, Mail, Phone, MapPin } from 'lucide-react'
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
      text: "Dr. Haile hat mir geholfen, meine Angststörung zu überwinden. Ihre einfühlsame Art und die effektiven Methoden haben mein Leben verändert.",
      author: "Maria S.",
      category: "Angststörung",
      rating: 5,
      icon: Brain,
      color: "from-blue-500 to-purple-600"
    },
    {
      text: "Nach meinem Burnout fand ich durch die Therapie zurück zu meiner Lebensfreude. Die Unterstützung war professionell und herzlich.",
      author: "Thomas K.",
      category: "Burnout",
      rating: 5,
      icon: Heart,
      color: "from-rose-500 to-pink-600"
    },
    {
      text: "Die Paartherapie hat unsere Beziehung gerettet. Wir haben gelernt, wieder miteinander zu kommunizieren und uns zu verstehen.",
      author: "Anna & Michael",
      category: "Paartherapie",
      rating: 5,
      icon: Users,
      color: "from-green-500 to-emerald-600"
    },
    {
      text: "Dank der kognitiven Verhaltenstherapie konnte ich meine negativen Gedankenmuster durchbrechen. Ich fühle mich endlich wieder stark.",
      author: "Julia M.",
      category: "Depression",
      rating: 5,
      icon: Brain,
      color: "from-amber-500 to-orange-600"
    }
  ]

  const stats = [
    { number: "98%", label: "Zufriedenheitsrate", icon: Star },
    { number: "500+", label: "Behandelte Patienten", icon: Users },
    { number: "15+", label: "Jahre Erfahrung", icon: CheckCircle }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* Mobile Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-amber-100/50 shadow-lg shadow-amber-500/5' 
          : 'bg-white/80 backdrop-blur-md border-b border-amber-100/30'
      }`}>
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 group transition-transform hover:scale-105 touch-manipulation">
              <div className="relative">
                <Image 
                  src="/images/bdp-logo.png" 
                  alt="BDP - Berufsverband deutscher Psychologen" 
                  width={50} 
                  height={50}
                  className="w-10 md:w-14 h-10 md:h-14 drop-shadow-sm"
                />
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-xl group-hover:bg-amber-500/20 transition-colors"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">Dr. Anja Haile</span>
                <span className="text-xs text-amber-600 font-medium hidden sm:block">Psychologische Psychotherapeutin</span>
              </div>
            </Link>

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

            <div className="flex items-center space-x-2 md:space-x-3">
              <Link href="/booking">
                <Button className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 touch-manipulation text-sm md:text-base px-3 md:px-4 py-2 md:py-2.5">
                  <Calendar className="w-4 h-4 mr-1 md:mr-2" />
                  <span className="hidden sm:inline">Termin buchen</span>
                  <span className="sm:hidden">Termin</span>
                </Button>
              </Link>
              
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-3 touch-manipulation active:scale-95"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-xl rounded-2xl border border-amber-100/50 shadow-xl animate-in slide-in-from-top-2 duration-300">
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 touch-manipulation active:scale-95 ${
                      link.active 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'text-slate-600 hover:text-amber-600 hover:bg-amber-50'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link 
                  href="/booking"
                  className="mt-2 px-4 py-4 rounded-xl bg-gradient-to-r from-amber-600 to-orange-700 text-white font-semibold text-center touch-manipulation active:scale-95 transition-transform"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Calendar className="w-5 h-5 mr-2 inline" />
                  Jetzt Termin buchen
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-6 md:py-8 pt-24 md:pt-32">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 group transition-all duration-200 touch-manipulation">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-4 md:mb-6">
              <Quote className="w-4 h-4 mr-2" />
              Echte Erfahrungen
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Testimonials
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Erfahren Sie, wie meine Patienten ihren Weg zu mehr Lebensfreude 
              und psychischer Gesundheit gefunden haben.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 touch-manipulation">
                <CardContent className="p-4 md:p-6 text-center">
                  <stat.icon className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">{stat.number}</h3>
                  <p className="text-sm md:text-base text-slate-600 font-medium">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-6 md:gap-8 mb-16 md:mb-20">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-[1.02] touch-manipulation">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 md:p-4 rounded-xl bg-gradient-to-r ${testimonial.color}`}>
                      <testimonial.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 md:w-5 h-4 md:h-5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-amber-600 text-sm md:text-base font-medium">{testimonial.category}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Quote className="w-8 md:w-10 h-8 md:h-10 text-amber-300" />
                  <blockquote className="text-slate-700 text-sm md:text-base leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  <footer className="text-slate-500 text-sm md:text-base font-medium">
                    — {testimonial.author}
                  </footer>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* What Patients Value Section */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-20">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                Was besonders geschätzt wird
              </h2>
              <div className="space-y-4 md:space-y-6">
                {[
                  "Einfühlsame und professionelle Betreuung",
                  "Evidenzbasierte Therapiemethoden",
                  "Flexible Termine und individuelle Anpassung", 
                  "Vertrauensvolle und sichere Atmosphäre"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 md:w-6 h-5 md:h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-2xl"></div>
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                alt="Dr. Anja Haile - Patientenzufriedenheit"
                className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover border-2 md:border-4 border-white/50 touch-manipulation"
              />
            </div>
          </div>

          {/* Privacy Notice */}
          <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg mb-12 md:mb-16">
            <CardContent className="p-6 md:p-8 text-center">
              <Shield className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-4" />
              <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3">Datenschutz & Vertraulichkeit</h3>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Alle Testimonials wurden mit ausdrücklicher Einverständnis der Patienten veröffentlicht. 
                Namen wurden zum Schutz der Privatsphäre anonymisiert. Die therapeutische Schweigepflicht 
                wird selbstverständlich vollständig gewahrt.
              </p>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Ihre Erfolgsgeschichte beginnt hier
            </h2>
            <p className="text-amber-50 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Werden Sie Teil meiner Erfolgsgeschichten. Vereinbaren Sie noch heute 
              Ihr unverbindliches Erstgespräch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="w-full sm:w-auto bg-white text-amber-700 hover:bg-amber-50 shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 touch-manipulation group text-base md:text-lg font-semibold px-6 md:px-8 py-3 md:py-4">
                  <Calendar className="mr-2 w-5 h-5" />
                  Jetzt Termin buchen
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 transition-all duration-300 active:scale-95 touch-manipulation text-base md:text-lg font-medium px-6 md:px-8 py-3 md:py-4">
                  Fragen stellen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Enhanced Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="relative">
                  <Image 
                    src="/images/bdp-logo.png" 
                    alt="BDP Logo" 
                    width={60} 
                    height={60}
                    className="w-15 h-15 drop-shadow-sm"
                  />
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Dr. Anja Haile</h3>
                  <p className="text-amber-300 font-medium">Psychologische Psychotherapeutin</p>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed mb-8 max-w-md">
                Professionelle psychologische Betreuung in München. Spezialisiert auf kognitive Verhaltenstherapie 
                für nachhaltige mentale und emotionale Veränderungen.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300">Maximilianstraße 1, 80539 München</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300">+49 (0) 89 123 456 789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300">praxis@anjahaile.de</span>
                </div>
              </div>
            </div>

            {/* Navigation Links */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Navigation</h4>
              <div className="space-y-3">
                {[
                  { href: '/about', label: 'Über mich' },
                  { href: '/services', label: 'Leistungen' },
                  { href: '/portfolio', label: 'Portfolio' },
                  { href: '/testimonials', label: 'Testimonials' }
                ].map((link) => (
                  <Link 
                    key={link.href}
                    href={link.href} 
                    className="block text-slate-300 hover:text-amber-400 transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h4 className="font-bold text-white mb-6 text-lg">Services</h4>
              <div className="space-y-4">
                <Link href="/contact" className="block">
                  <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 hover:border-amber-500/50 transition-all duration-200 group">
                    <h5 className="font-semibold text-white group-hover:text-amber-400 transition-colors">Kontakt</h5>
                    <p className="text-sm text-slate-400">Nachricht senden</p>
                  </div>
                </Link>
                <Link href="/booking" className="block">
                  <div className="p-4 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-lg border border-amber-500/30 hover:border-amber-400/50 transition-all duration-200 group">
                    <h5 className="font-semibold text-white group-hover:text-amber-300 transition-colors">Termin buchen</h5>
                    <p className="text-sm text-amber-300">Online verfügbar</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex space-x-6">
                <Link href="/impressum" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Impressum
                </Link>
                <Link href="/datenschutz" className="text-slate-400 hover:text-amber-400 transition-colors text-sm">
                  Datenschutz
                </Link>
              </div>
              <p className="text-slate-400 text-sm">
                © 2025 Dr. Anja Haile. Alle Rechte vorbehalten.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}