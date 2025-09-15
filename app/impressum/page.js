'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Calendar, Menu, MapPin, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ImpressumPage() {
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
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* Modern Navigation */}
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

      <div className="container mx-auto px-4 py-6 md:py-8 pt-24 md:pt-32">
        <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8 group transition-all duration-200 touch-manipulation">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Impressum
            </h1>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed">
              Rechtliche Informationen gemäß § 5 TMG
            </p>
          </div>

          {/* Content ohne Accordion - alles direkt sichtbar */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Angaben gemäß § 5 TMG */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 text-amber-700">
                Angaben gemäß § 5 TMG
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Praxisinhaber:</h3>
                  <p className="text-base">Dr. Anja Haile<br />
                  Psychologische Psychotherapeutin</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Anschrift:</h3>
                  <p className="text-base">Maximilianstraße 1<br />
                  80539 München<br />
                  Deutschland</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Kontakt:</h3>
                  <p className="text-base">Telefon: +49 (0) 89 123 456 789<br />
                  E-Mail: praxis@anjahaile.de</p>
                </div>
              </div>
            </div>

            {/* Berufsrechtliche Angaben */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                Berufsrechtliche Angaben
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Berufsbezeichnung:</h3>
                  <p className="text-base">Psychologische Psychotherapeutin<br />
                  (verliehen in Deutschland)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Zuständige Kammer:</h3>
                  <p className="text-base">Bayerische Landeskammer der Psychologischen Psychotherapeuten<br />
                  und der Kinder- und Jugendlichenpsychotherapeuten (PTK Bayern)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Kassenzulassung:</h3>
                  <p className="text-base">Kassenzulassung bei der Kassenärztlichen Vereinigung Bayern (KVB)</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Berufsrechtliche Regelungen:</h3>
                  <p className="text-base">Psychotherapeutengesetz (PsychThG)<br />
                  Berufsordnung der PTK Bayern</p>
                </div>
              </div>
            </div>

            {/* Verantwortlich für den Inhalt */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="text-slate-700">
                <p className="text-base">Dr. Anja Haile<br />
                Maximilianstraße 1<br />
                80539 München</p>
              </div>
            </div>

            {/* Haftungsausschluss */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                Haftungsausschluss
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Haftung für Inhalte:</h3>
                  <p className="text-base">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Haftung für Links:</h3>
                  <p className="text-base">Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Urheberrecht:</h3>
                  <p className="text-base">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                </div>
              </div>
            </div>

            {/* Technische Umsetzung */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                Technische Umsetzung
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Webdesign und Entwicklung:</h3>
                  <p className="text-base">Diese Website wurde mit Next.js entwickelt und verwendet moderne Webtechnologien für optimale Benutzerfreundlichkeit und Datenschutz.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Terminbuchung:</h3>
                  <p className="text-base">Für die Online-Terminbuchung verwenden wir den Dienst GoHighLevel. Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</p>
                </div>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-amber-600 font-medium">
              Stand: Januar 2025
            </p>
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