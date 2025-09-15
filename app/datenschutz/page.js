'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Shield, Calendar, Menu, MapPin, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function DatenschutzPage() {
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
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <Shield className="w-6 md:w-8 h-6 md:h-8 text-amber-600 mr-3" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Datenschutzerklärung
              </h1>
            </div>
            <p className="text-base md:text-xl text-slate-600 leading-relaxed">
              Informationen zum Schutz Ihrer personenbezogenen Daten gemäß DSGVO
            </p>
          </div>

          {/* Content ohne Accordion - alles direkt sichtbar */}
          <div className="space-y-8 md:space-y-12">
            
            {/* Datenschutz auf einen Blick */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                1. Datenschutz auf einen Blick
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Allgemeine Hinweise</h3>
                  <p className="text-base">Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Datenerfassung auf dieser Website</h3>
                  <p className="text-base">Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Ihre Rechte</h3>
                  <p className="text-base">Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                </div>
              </div>
            </div>

            {/* Verantwortliche Stelle */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                2. Verantwortliche Stelle
              </h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-base">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <p className="text-base font-medium">
                    Dr. Anja Haile<br />
                    Maximilianstraße 1<br />
                    80539 München<br />
                    Deutschland<br />
                    <br />
                    Telefon: +49 (0) 89 123 456 789<br />
                    E-Mail: praxis@anjahaile.de
                  </p>
                </div>
                <p className="text-base">Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
              </div>
            </div>

            {/* Datenerfassung auf dieser Website */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                3. Datenerfassung auf dieser Website
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Kontaktformular</h3>
                  <p className="text-base">Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Server-Log-Dateien</h3>
                  <p className="text-base mb-3">Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-base">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="text-base mt-3">Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>
              </div>
            </div>

            {/* Terminbuchungssystem */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                4. Terminbuchungssystem (GoHighLevel)
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Art und Umfang der Datenverarbeitung</h3>
                  <p className="text-base">Für die Online-Terminbuchung verwenden wir den Dienst GoHighLevel. Wenn Sie einen Termin über unser Buchungssystem vereinbaren, werden Ihre Daten an GoHighLevel übertragen und dort verarbeitet.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Übertragene Daten</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1 text-base">
                    <li>Name und Kontaktdaten</li>
                    <li>Gewählter Terminwunsch</li>
                    <li>Zusätzliche Informationen, die Sie im Buchungsformular angeben</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Rechtsgrundlage</h3>
                  <p className="text-base">Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie vor der Nutzung des Buchungssystems erteilen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Datenschutz bei GoHighLevel</h3>
                  <p className="text-base">Weitere Informationen zum Datenschutz bei GoHighLevel finden Sie in deren Datenschutzerklärung unter: https://www.gohighlevel.com/privacy-policy</p>
                </div>
              </div>
            </div>

            {/* Ihre Rechte */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                5. Ihre Rechte
              </h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-base">Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Auskunft</h3>
                  <p className="text-base">Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Berichtigung</h3>
                  <p className="text-base">Sie haben ein Recht auf Berichtigung unrichtiger oder unvollständiger personenbezogener Daten.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Löschung</h3>
                  <p className="text-base">Sie können die Löschung Ihrer personenbezogenen Daten verlangen, soweit deren Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Einschränkung</h3>
                  <p className="text-base">Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Widerspruch</h3>
                  <p className="text-base">Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Recht auf Datenübertragbarkeit</h3>
                  <p className="text-base">Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>
              </div>
            </div>

            {/* Besondere Bestimmungen für Therapiedaten */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                6. Besondere Bestimmungen für Therapiedaten
              </h2>
              <div className="space-y-6 text-slate-700">
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Schweigepflicht</h3>
                  <p className="text-base">Als psychologische Psychotherapeutin unterliege ich der besonderen Schweigepflicht nach § 203 StGB. Alle Informationen aus der therapeutischen Behandlung werden streng vertraulich behandelt.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Therapiedokumentation</h3>
                  <p className="text-base">Gemäß § 630f BGB bin ich verpflichtet, eine Behandlungsdokumentation zu führen. Diese enthält alle aus fachlicher Sicht für die derzeitige und künftige Behandlung wesentlichen Maßnahmen und deren Ergebnisse.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Aufbewahrungsfristen</h3>
                  <p className="text-base">Therapieunterlagen werden gemäß der Berufsordnung für Psychotherapeuten für mindestens 10 Jahre aufbewahrt.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Übermittlung an Dritte</h3>
                  <p className="text-base">Eine Übermittlung von Therapiedaten an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder wenn eine gesetzliche Übermittlungspflicht besteht.</p>
                </div>
              </div>
            </div>

            {/* Kontakt in Datenschutzfragen */}
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-500/5 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-amber-700 mb-6">
                7. Kontakt in Datenschutzfragen
              </h2>
              <div className="space-y-6 text-slate-700">
                <p className="text-base">Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:</p>
                <div className="bg-amber-50 p-6 rounded-xl border border-amber-100">
                  <p className="text-base font-medium">
                    Dr. Anja Haile<br />
                    E-Mail: datenschutz@anjahaile.de<br />
                    Telefon: +49 (0) 89 123 456 789
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">Beschwerde bei Aufsichtsbehörde</h3>
                  <p className="text-base mb-2">Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.</p>
                  <p className="text-base">
                    Zuständige Aufsichtsbehörde:<br />
                    Bayerisches Landesamt für Datenschutzaufsicht<br />
                    Promenade 18<br />
                    91522 Ansbach
                  </p>
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