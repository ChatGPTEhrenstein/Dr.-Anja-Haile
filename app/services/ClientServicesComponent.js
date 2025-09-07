'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Brain, Heart, Users, Clock, Calendar, CheckCircle, Star, Award, Target, ArrowRight, Menu, Zap, Shield, Lightbulb } from 'lucide-react'

export default function ClientServicesComponent() {
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
    { href: '/services', label: 'Leistungen', active: true },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
  ]

  const services = [
    {
      icon: Brain,
      title: 'Kognitive Verhaltenstherapie',
      description: 'Evidenzbasierte Therapie zur Behandlung von Depressionen, Angststörungen und anderen psychischen Belastungen.',
      features: ['Strukturierter Ansatz', 'Evidenzbasiert', 'Nachhaltige Ergebnisse'],
      duration: '50 Min.',
      category: 'Kernbereich'
    },
    {
      icon: Heart,
      title: 'Einzeltherapie',
      description: 'Individuelle psychotherapeutische Betreuung in vertrauensvoller Atmosphäre für Ihre persönliche Entwicklung.',
      features: ['Individuelle Betreuung', 'Vertraulich', 'Flexibel'],
      duration: '50 Min.',
      category: 'Therapie'
    },
    {
      icon: Users,
      title: 'Paartherapie',
      description: 'Unterstützung für Paare zur Verbesserung der Kommunikation und Stärkung der Beziehungsqualität.',
      features: ['Kommunikation verbessern', 'Konflikte lösen', 'Beziehung stärken'],
      duration: '90 Min.',
      category: 'Therapie'
    },
    {
      icon: Target,
      title: 'Krisenintervention',
      description: 'Schnelle professionelle Hilfe in akuten Krisensituationen und emotionalen Notlagen.',
      features: ['Schnelle Hilfe', 'Professionell', '24/7 Erreichbar'],
      duration: 'Nach Bedarf',
      category: 'Akuthilfe'
    },
    {
      icon: Lightbulb,
      title: 'Burnout-Behandlung',
      description: 'Spezialisierte Behandlung von Burnout-Symptomen mit Fokus auf Stressmanagement und Work-Life-Balance.',
      features: ['Stressmanagement', 'Präventiv', 'Nachhaltig'],
      duration: '50 Min.',
      category: 'Spezialbereich'
    },
    {
      icon: Zap,
      title: 'Traumatherapie',
      description: 'Einfühlsame Behandlung von Traumafolgestörungen mit bewährten therapeutischen Methoden.',
      features: ['Einfühlsam', 'Wissenschaftlich', 'Behutsam'],
      duration: '50 Min.',
      category: 'Spezialbereich'
    }
  ]

  const treatmentAreas = [
    {
      name: 'Depressionen',
      description: 'Professionelle Behandlung depressiver Episoden',
      icon: '🌧️'
    },
    {
      name: 'Angststörungen',
      description: 'Therapie verschiedener Angsterkrankungen',
      icon: '😰'
    },
    {
      name: 'Burnout-Syndrom',
      description: 'Erschöpfungszustände und Überlastung',
      icon: '🔥'
    },
    {
      name: 'Trauma & PTBS',
      description: 'Traumafolgestörungen und Belastungsreaktionen',
      icon: '💔'
    },
    {
      name: 'Beziehungsprobleme',
      description: 'Partnerschafts- und Familienkonflikte',
      icon: '💑'
    },
    {
      name: 'Selbstwertprobleme',
      description: 'Stärkung des Selbstbewusstseins',
      icon: '🪞'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
      {/* SEO-optimized structured content */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'MedicalBusiness',
            name: 'Dr. Anja Haile - Psychotherapie München',
            description: 'Professionelle psychotherapeutische Leistungen in München',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Psychotherapeutische Leistungen',
              itemListElement: services.map(service => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'MedicalTherapy',
                  name: service.title,
                  description: service.description
                }
              }))
            }
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full text-sm font-medium text-amber-700 border border-amber-200/50 mb-6">
                <Award className="w-4 h-4 mr-2 text-amber-500" />
                Professionelle Therapieleistungen
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-6">
                Psychotherapie
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Leistungen
                </span>
              </h1>
              
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Professionelle psychotherapeutische Unterstützung mit bewährten Methoden. 
                Spezialisiert auf <span className="font-semibold text-amber-600">kognitive Verhaltenstherapie</span> 
                für nachhaltige Veränderungen in Ihrem Leben.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden border-0 bg-gradient-to-br from-white to-slate-50/50 relative">
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <CardHeader className="relative">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <CardTitle className="text-center text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 leading-relaxed text-center">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span className="text-sm font-medium text-slate-700">{service.duration}</span>
                        </div>
                        <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 group">
                          Mehr erfahren
                          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Areas */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Behandlungs-
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">schwerpunkte</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Spezialisierte Behandlung verschiedener psychischer Belastungen 
                mit bewährten therapeutischen Methoden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {treatmentAreas.map((area, index) => (
                <Card key={index} className="group hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 border border-amber-100/50 hover:border-amber-200/50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{area.icon}</div>
                      <CardTitle className="text-lg font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                        {area.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-20 px-4 relative">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                    Mein therapeutischer 
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Ansatz</span>
                  </h2>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    Evidenzbasierte Methoden kombiniert mit empathischer, 
                    individueller Betreuung für nachhaltige Veränderungen.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 p-3 flex-shrink-0">
                      <Shield className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Vertrauensvolle Atmosphäre</h3>
                      <p className="text-slate-600">Ein sicherer Raum für offene Gespräche und persönliche Entwicklung.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 p-3 flex-shrink-0">
                      <Target className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Lösungsorientiert</h3>
                      <p className="text-slate-600">Fokus auf konkrete Strategien und nachhaltige Veränderungen.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 p-3 flex-shrink-0">
                      <Heart className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">Individuell angepasst</h3>
                      <p className="text-slate-600">Jede Therapie wird speziell auf Ihre Bedürfnisse zugeschnitten.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8">
                  <Link href="/about">
                    <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 group">
                      Mehr über meine Arbeitsweise
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
                <Image
                  src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg"
                  alt="Dr. Anja Haile - Therapeutische Arbeitsweise"
                  width={600}
                  height={600}
                  className="relative rounded-3xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover border-4 border-white/50"
                />
              </div>
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
                Bereit für den 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white"> ersten Schritt?</span>
              </h2>
              <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, 
                wie meine Therapieleistungen Ihnen helfen können.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-4 text-lg font-semibold">
                    <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
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
        </section>
      </main>
    </div>
  )
}