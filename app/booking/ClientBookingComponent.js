'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calendar, Clock, Shield, CheckCircle, Star, Phone, Mail, Menu } from 'lucide-react'

export default function ClientBookingComponent() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [gdprAccepted, setGdprAccepted] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)

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
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
  ]

  const handleGdprAccept = () => {
    if (gdprAccepted) {
      setShowCalendar(true)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-amber-100/50 shadow-sm' 
          : 'bg-white/80 backdrop-blur-md border-b border-amber-100/30'
      }`}>
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
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
                <span className="text-lg md:text-xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                  Dr. Anja Haile
                </span>
                <span className="text-xs text-amber-600 font-medium hidden sm:block">
                  Psychologische Psychotherapeutin
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-1">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 text-slate-600 hover:text-amber-600 hover:bg-amber-50/80"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Menu */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <Button className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 active:scale-95 touch-manipulation text-sm md:text-base px-3 md:px-4 py-2 md:py-2.5">
                <Calendar className="w-4 h-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">Termin buchen</span>
                <span className="sm:hidden">Aktiv</span>
              </Button>
              
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-amber-100/50 shadow-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 text-slate-700 hover:bg-amber-50/80 hover:text-amber-600"
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

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8 pt-24 md:pt-32">
        {/* Back Button */}
        <div className="mb-6 md:mb-8">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 group transition-all duration-200 touch-manipulation">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-4 md:mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Online Terminbuchung
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Termin buchen
            </h1>
            
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Vereinbaren Sie einen Termin für ein unverbindliches Erstgespräch oder eine Beratungssitzung. 
              Ich freue mich darauf, Sie kennenzulernen.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
            <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
              <CardContent className="p-4 md:p-6 text-center">
                <Clock className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-2">Flexible Termine</h3>
                <p className="text-xs md:text-sm text-slate-600">Örtlich und zeitlich flexibel</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
              <CardContent className="p-4 md:p-6 text-center">
                <CheckCircle className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-2">Erstgespräch</h3>
                <p className="text-xs md:text-sm text-slate-600">Unverbindliches Kennenlernen</p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
              <CardContent className="p-4 md:p-6 text-center">
                <Shield className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-2">GDPR konform</h3>
                <p className="text-xs md:text-sm text-slate-600">Datenschutz garantiert</p>
              </CardContent>
            </Card>
          </div>

          {/* GDPR Consent Section */}
          {!showCalendar && (
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 mb-8 md:mb-12">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-slate-800 text-xl md:text-2xl">
                  Datenschutz & Einverständnis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 md:space-y-6">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 md:p-6">
                  <h3 className="font-semibold text-amber-800 mb-3 flex items-center text-sm md:text-base">
                    <Shield className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                    GDPR-konforme Datenverarbeitung
                  </h3>
                  <p className="text-amber-700 text-xs md:text-sm leading-relaxed mb-4">
                    Zur Terminbuchung verwenden wir GoHighLevel, einen externen Kalender-Service. 
                    Ihre Daten werden ausschließlich für die Terminvereinbarung verwendet und gemäß GDPR-Richtlinien verarbeitet.
                  </p>
                  <ul className="text-amber-700 text-xs md:text-sm space-y-1">
                    <li>• Ihre Daten werden verschlüsselt übertragen</li>
                    <li>• Keine Weitergabe an Dritte</li>
                    <li>• Jederzeit widerrufbar</li>
                  </ul>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="gdpr-consent"
                    checked={gdprAccepted}
                    onChange={(e) => setGdprAccepted(e.target.checked)}
                    className="mt-1 w-4 h-4 text-amber-600 rounded border-gray-300 focus:ring-amber-500 touch-manipulation"
                  />
                  <label htmlFor="gdpr-consent" className="text-slate-600 text-xs md:text-sm leading-relaxed">
                    Ich stimme der Verarbeitung meiner Daten zur Terminbuchung zu und habe die{' '}
                    <Link href="/datenschutz" className="text-amber-600 hover:text-amber-700 underline touch-manipulation">
                      Datenschutzerklärung
                    </Link>{' '}
                    gelesen und verstanden.
                  </label>
                </div>

                <Button 
                  onClick={handleGdprAccept}
                  disabled={!gdprAccepted}
                  className="w-full bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 disabled:from-gray-300 disabled:to-gray-400 text-white shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 touch-manipulation h-12 text-base font-semibold"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Kalender laden & Termin buchen
                </Button>
              </CardContent>
            </Card>
          )}

          {/* Calendar Section */}
          {showCalendar && (
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 mb-8 md:mb-12">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-slate-800 text-xl md:text-2xl flex items-center justify-center">
                  <Calendar className="w-5 md:w-6 h-5 md:h-6 text-amber-600 mr-3" />
                  Verfügbare Termine
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                  <p className="text-amber-700 text-xs md:text-sm text-center">
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    Datenschutz-Einverständnis erteilt. Kalender wird geladen...
                  </p>
                </div>
                
                {/* GoHighLevel Calendar Embed */}
                <div className="relative bg-white rounded-xl overflow-hidden shadow-inner min-h-[500px] md:min-h-[600px]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/bookings/anjahaile"
                    className="w-full h-[500px] md:h-[600px] border-0"
                    title="Termin buchen - Dr. Anja Haile"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Contact Alternatives */}
          <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-slate-800 text-lg md:text-xl">
                Lieber persönlich kontaktieren?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 text-center mb-6 text-sm md:text-base">
                Wenn Sie Fragen haben oder einen Termin telefonisch vereinbaren möchten:
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <a href="tel:+4989123456789" className="block">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg active:scale-95 touch-manipulation h-12">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </Button>
                </a>
                <Link href="/contact" className="block">
                  <Button variant="outline" className="w-full border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 active:scale-95 touch-manipulation h-12">
                    <Mail className="w-4 h-4 mr-2" />
                    E-Mail senden
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}