import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Award, Heart, Users, Calendar, CheckCircle, Star, Brain, Target, BookOne, Clock, Shield, Menu } from 'lucide-react'
import ClientAboutComponent from './ClientAboutComponent'

// SEO metadata for this page
export const metadata = {
  title: 'Über Dr. Anja Haile - Erfahrene Psychotherapeutin München | 15+ Jahre BDP-zertifiziert',
  description: 'Lernen Sie Dr. Anja Haile kennen - BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung in München. Spezialistin für kognitive Verhaltenstherapie.',
  keywords: 'Dr. Anja Haile, Psychotherapeutin München, BDP zertifiziert, kognitive Verhaltenstherapie, Psychologe München, Therapie Erfahrung',
  openGraph: {
    title: 'Über Dr. Anja Haile - Erfahrene Psychotherapeutin München',
    description: 'BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung. Spezialistin für kognitive Verhaltenstherapie in München.',
  }
}

export default function AboutPage() {
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
    { href: '/about', label: 'Über mich', active: true },
    { href: '/services', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* SEO-optimized structured content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Dr. Anja Haile',
            jobTitle: 'Psychologische Psychotherapeutin',
            description: 'BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung in kognitiver Verhaltenstherapie.',
            url: 'https://integration-debug.preview.emergentagent.com/about',
            worksFor: {
              '@type': 'MedicalBusiness',
              name: 'Praxis Dr. Anja Haile',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Maximilianstraße 10',
                addressLocality: 'München',
                postalCode: '80539',
                addressCountry: 'DE'
              }
            },
            memberOf: {
              '@type': 'Organization',
              name: 'Berufsverband deutscher Psychologen (BDP)'
            },
            knowsAbout: [
              'Kognitive Verhaltenstherapie',
              'Depressionsbehandlung',
              'Angststörungen',
              'Burnout-Therapie',
              'Paartherapie'
            ]
          })
        }}
      />

      {/* Mobile-First Navigation */}
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

      {/* Mobile-Optimized Content */}
      <main className="container mx-auto px-4 py-6 md:py-8 pt-24 md:pt-32">
        {/* Breadcrumb - SEO friendly */}
        <nav className="mb-6 md:mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 group transition-all duration-200 touch-manipulation">
                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Zurück zur Startseite
              </Link>
            </li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto">
          {/* Mobile-First Header with SEO-optimized headings */}
          <header className="text-center mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-4 md:mb-6">
              <Award className="w-4 h-4 mr-2" />
              Über Dr. Anja Haile
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Ihr Weg zu mentaler Stärke
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Mit über 15 Jahren Erfahrung in der psychologischen Psychotherapie 
              begleite ich Sie auf Ihrem Weg zu mehr Lebensfreude und innerer Balance.
            </p>
          </header>

          {/* Mobile-Optimized Profile Section */}
          <section className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-16 md:mb-20" aria-labelledby="approach-heading">
            <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left-8 duration-1000">
              <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle id="approach-heading" className="text-slate-800 text-xl md:text-2xl flex items-center">
                    <Brain className="w-5 md:w-6 h-5 md:h-6 text-amber-600 mr-3" />
                    Mein therapeutischer Ansatz
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Als <strong>approbierte Psychologische Psychotherapeutin</strong> mit Schwerpunkt auf 
                    <strong> kognitiver Verhaltenstherapie</strong> unterstütze ich Sie dabei, negative 
                    Denkmuster zu erkennen und positive Veränderungen zu bewirken.
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                    Meine Therapie ist <strong>evidenzbasiert</strong>, einfühlsam und individuell auf 
                    Ihre Bedürfnisse zugeschnitten. Gemeinsam entwickeln wir Strategien 
                    für ein erfüllteres Leben in <strong>München</strong>.
                  </p>
                </CardContent>
              </Card>

              {/* Mobile-Friendly Qualifications */}
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
                  <CardContent className="p-4 md:p-6 text-center">
                    <Award className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                    <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-2">BDP Zertifiziert</h3>
                    <p className="text-xs md:text-sm text-slate-600">Berufsverband deutscher Psychologen</p>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation">
                  <CardContent className="p-4 md:p-6 text-center">
                    <Clock className="w-8 md:w-10 h-8 md:h-10 text-amber-600 mx-auto mb-3 md:mb-4" />
                    <h3 className="font-semibold text-slate-800 text-sm md:text-base mb-2">15+ Jahre</h3>
                    <p className="text-xs md:text-sm text-slate-600">Berufserfahrung</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mobile-Responsive Image */}
            <div className="lg:order-last animate-in slide-in-from-right-8 duration-1000 delay-300 mt-8 lg:mt-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                <img 
                  src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                  alt="Dr. Anja Haile - BDP-zertifizierte Psychologische Psychotherapeutin München"
                  className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border-2 md:border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02] touch-manipulation"
                  loading="lazy"
                />
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-amber-100">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-slate-700">Verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mobile-Optimized CTA Section */}
          <section className="text-center bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-2xl animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Bereit für Veränderung?
            </h2>
            <p className="text-amber-50 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam den ersten Schritt gehen. 
              Vereinbaren Sie noch heute Ihr unverbindliches Erstgespräch.
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
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}