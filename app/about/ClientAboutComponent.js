'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Award, Heart, Users, Calendar, CheckCircle, Star, Brain, Target, BookOpen, Clock, Shield, Menu } from 'lucide-react'

export default function ClientAboutComponent() {
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
            description: 'BDP-zertifizierte Psychologische Psychotherapeutin mit über 15 Jahren Erfahrung in München. Spezialistin für kognitive Verhaltenstherapie.',
            worksFor: {
              '@type': 'Organization',
              name: 'Praxis Dr. Anja Haile'
            },
            memberOf: {
              '@type': 'Organization',
              name: 'Berufsverband deutscher Psychologen (BDP)'
            },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Maximilianstraße 10',
              addressLocality: 'München',
              addressRegion: 'Bayern',
              postalCode: '80539',
              addressCountry: 'DE'
            },
            telephone: '+49 89 123 456 789',
            email: 'praxis@anjahaile.de',
            alumniOf: [
              {
                '@type': 'EducationalOrganization',
                name: 'Ludwig-Maximilians-Universität München'
              }
            ],
            hasCredential: [
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'Dr. phil. Psychologie',
                credentialCategory: 'Doctorate'
              },
              {
                '@type': 'EducationalOccupationalCredential',
                name: 'Approbation Psychologische Psychotherapie',
                credentialCategory: 'License'
              }
            ]
          })
        }}
      />

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

            {/* CTA & Mobile Menu */}
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

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 p-4 bg-white/95 backdrop-blur-sm rounded-2xl border border-amber-100/50 shadow-xl animate-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-2">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      link.active
                        ? 'bg-amber-100 text-amber-700'
                        : 'text-slate-700 hover:bg-amber-50/80 hover:text-amber-600'
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

      {/* Main Content */}
      <main className="pt-20 md:pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="inline-flex items-center text-amber-700 hover:text-amber-800 transition-colors group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 relative">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
              {/* Content */}
              <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left-8 duration-1000">
                <div className="inline-flex items-center px-3 md:px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-amber-700 border border-amber-200/50">
                  <Award className="w-3 md:w-4 h-3 md:h-4 mr-2 text-amber-500" />
                  BDP-Zertifizierte Therapeutin
                </div>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                  Dr. Anja Haile
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                    Über mich
                  </span>
                </h1>
                
                <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Mit über 15 Jahren Erfahrung als BDP-zertifizierte Psychologische Psychotherapeutin 
                  begleite ich Menschen auf ihrem Weg zu mentaler und emotionaler Gesundheit. 
                  Meine Spezialisierung liegt in der <span className="font-semibold text-amber-600">kognitiven Verhaltenstherapie</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/booking">
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 active:scale-95 group text-base md:text-lg font-semibold px-8 py-3">
                      <Calendar className="mr-2 w-5 h-5" />
                      Termin vereinbaren
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full sm:w-auto border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 active:scale-95 group text-base md:text-lg font-medium px-8 py-3">
                      Kontakt aufnehmen
                      <Heart className="ml-2 w-5 h-5 group-hover:text-red-500 transition-colors" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="lg:order-last animate-in slide-in-from-right-8 duration-1000 delay-300 mt-8 lg:mt-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                  <Image
                    src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                    alt="Dr. Anja Haile - Psychologische Psychotherapeutin München"
                    width={600}
                    height={600}
                    className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border-2 md:border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02] touch-manipulation"
                    priority
                  />
                  
                  {/* Credentials Badge */}
                  <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-amber-100">
                    <div className="flex items-center space-x-1 md:space-x-2">
                      <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs md:text-sm font-medium text-slate-700">15+ Jahre</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Journey */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Mein professioneller 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Werdegang</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Ein Blick auf meine Ausbildung, Spezialisierungen und jahrelange Erfahrung 
                in der psychotherapeutischen Arbeit.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Education */}
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <BookOpen className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-center text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Ausbildung
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">Dr. phil. Psychologie</h4>
                    <p className="text-sm text-slate-600">Ludwig-Maximilians-Universität München</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">Approbation</h4>
                    <p className="text-sm text-slate-600">Psychologische Psychotherapie</p>
                  </div>
                </CardContent>
              </Card>

              {/* Certification */}
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Award className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-center text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Zertifizierung
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">BDP-Zertifiziert</h4>
                    <p className="text-sm text-slate-600">Berufsverband deutscher Psychologen</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">Qualitätssiegel</h4>
                    <p className="text-sm text-slate-600">Höchste professionelle Standards</p>
                  </div>
                </CardContent>
              </Card>

              {/* Experience */}
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50 md:col-span-2 lg:col-span-1">
                <CardHeader className="relative">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-center text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Erfahrung
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">15+ Jahre</h4>
                    <p className="text-sm text-slate-600">Psychotherapeutische Praxis</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-slate-700">500+ Patienten</h4>
                    <p className="text-sm text-slate-600">Erfolgreich behandelt</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Meine 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Spezialisierungen</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Fokussierte Expertise in den wichtigsten Bereichen der psychotherapeutischen Behandlung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Primary Specialization */}
              <Card className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-amber-50 to-orange-50/50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-orange-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Brain className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-center text-2xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Kognitive Verhaltenstherapie
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative space-y-4">
                  <p className="text-slate-600 leading-relaxed text-center">
                    Mein Hauptfokus liegt auf der kognitiven Verhaltenstherapie - einem evidenzbasierten 
                    Ansatz zur nachhaltigen Veränderung von Denkmustern und Verhaltensweisen.
                  </p>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-600">Depressionen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-600">Angststörungen</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-600">Burnout</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-slate-600">Trauma</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Specializations */}
              <div className="space-y-6">
                <Card className="group hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 border border-amber-100/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 p-3">
                        <Heart className="w-full h-full text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        Emotionale Regulation
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Entwicklung gesunder Strategien im Umgang mit intensiven Emotionen 
                      und Stressreaktionen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 border border-amber-100/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3">
                        <Users className="w-full h-full text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        Beziehungstherapie
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Unterstützung bei Kommunikationsproblemen und Verbesserung 
                      zwischenmenschlicher Beziehungen.
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 border border-amber-100/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 p-3">
                        <Target className="w-full h-full text-white" />
                      </div>
                      <CardTitle className="text-lg font-bold text-slate-800">
                        Zielfokussierte Therapie
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Strukturierte Herangehensweise zur Erreichung persönlicher 
                      und beruflicher Ziele.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Values & Approach */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Meine 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Arbeitsweise</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Eine vertrauensvolle, respektvolle und lösungsorientierte Herangehensweise 
                steht im Mittelpunkt meiner therapeutischen Arbeit.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shield className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Vertrauensvoll
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Ein sicherer Raum für offene Gespräche, in dem Sie sich verstanden 
                    und respektiert fühlen können.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Lösungsorientiert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Fokus auf praktische Strategien und konkrete Schritte zur 
                    Überwindung Ihrer Herausforderungen.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Heart className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                    Individuell
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 leading-relaxed">
                    Jeder Mensch ist einzigartig. Meine Therapie wird individuell 
                    auf Ihre Bedürfnisse abgestimmt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto text-center relative">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bereit für den ersten 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white"> Schritt?</span>
              </h2>
              <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch. Gemeinsam besprechen wir 
                Ihre Situation und finden den passenden Therapieansatz für Sie.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/booking">
                  <Button className="bg-white text-amber-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-4 text-lg font-semibold">
                    <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Jetzt Termin buchen
                  </Button>
                </Link>

                <div className="flex items-center space-x-4 text-orange-100">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="font-medium">+49 (0) 89 123 456 789</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

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