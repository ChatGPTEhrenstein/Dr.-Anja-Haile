'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Heart, Brain, Users, Calendar, Menu, Star, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
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
    { href: '/', label: 'Home', active: true },
    { href: '/about', label: 'Über mich' },
    { href: '/services', label: 'Leistungen' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
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

      {/* Enhanced Hero Section - Mobile Optimized */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-4 md:left-10 w-48 md:w-72 h-48 md:h-72 bg-amber-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-4 md:right-10 w-64 md:w-96 h-64 md:h-96 bg-orange-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 animate-in slide-in-from-left-8 duration-1000">
              {/* Badge */}
              <div className="inline-flex items-center px-3 md:px-4 py-2 bg-amber-100/80 backdrop-blur-sm rounded-full text-xs md:text-sm font-medium text-amber-700 border border-amber-200/50">
                <Star className="w-3 md:w-4 h-3 md:h-4 mr-2 text-amber-500" />
                Zertifizierte Psychotherapeutin
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Wow – endlich mit{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 animate-gradient">
                  Freude
                </span>{' '}
                Du sein!
              </h1>
              
              <p className="text-base md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Wie Veränderung langfristig gelingt – smart, örtlich und zeitlich flexibel. 
                Psychologische Psychotherapie mit Fokus auf{' '}
                <span className="font-semibold text-amber-600">kognitive Verhaltenstherapie</span>{' '}
                für mentale und emotionale Transformation.
              </p>

              {/* Enhanced CTAs - Mobile First */}
              <div className="flex flex-col gap-3 md:gap-4 w-full">
                <Link href="/booking" className="w-full">
                  <Button size="lg" className="w-full h-12 md:h-auto bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 active:scale-95 touch-manipulation group text-base md:text-lg font-semibold">
                    <Calendar className="mr-2 w-5 h-5" />
                    Jetzt Termin buchen
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/about" className="w-full">
                  <Button size="lg" variant="outline" className="w-full h-12 md:h-auto border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 active:scale-95 touch-manipulation group text-base md:text-lg font-medium">
                    Mehr über mich
                    <Heart className="ml-2 w-5 h-5 group-hover:text-red-500 transition-colors" />
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 pt-4">
                <div className="flex items-center space-x-2 text-center sm:text-left justify-center sm:justify-start">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-600 font-medium">BDP zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2 text-center sm:text-left justify-center sm:justify-start">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-600 font-medium">15+ Jahre Erfahrung</span>
                </div>
                <div className="flex items-center space-x-2 text-center sm:text-left justify-center sm:justify-start">
                  <CheckCircle className="w-4 md:w-5 h-4 md:h-5 text-green-500 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-600 font-medium">GDPR konform</span>
                </div>
              </div>
            </div>

            {/* Enhanced Hero Image - Mobile Optimized */}
            <div className="lg:order-last animate-in slide-in-from-right-8 duration-1000 delay-300 mt-8 lg:mt-0">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl md:rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                <img 
                  src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                  alt="Dr. Anja Haile - Therapie und Beratung"
                  className="relative rounded-2xl md:rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover border-2 md:border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02] touch-manipulation"
                />
                {/* Floating Elements - Mobile Responsive */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 md:p-4 shadow-xl border border-amber-100">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-medium text-slate-700">Verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Preview */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
              <Brain className="w-4 h-4 mr-2" />
              Therapy & Research
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Spezialisierte 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Therapie</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Evidenzbasierte Unterstützung für mentale und emotionale Veränderungen. 
              Überwinden Sie Selbstzweifel und führen Sie ein erfüllteres Leben.
            </p>
          </div>
          
          {/* Enhanced Service Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: "Kognitive Verhaltenstherapie",
                description: "Evidenzbasierte Methoden zur nachhaltigen Veränderung von Denkmustern und Verhaltensweisen.",
                color: "from-amber-500 to-orange-600",
                bgColor: "from-amber-50 to-orange-100/50"
              },
              {
                icon: Heart,
                title: "Emotionale Transformation",
                description: "Begleitung bei der Entwicklung emotionaler Stabilität und Selbstakzeptanz.",
                color: "from-rose-500 to-pink-600",
                bgColor: "from-rose-50 to-pink-100/50"
              },
              {
                icon: Users,
                title: "Individuelle Beratung",
                description: "Maßgeschneiderte Therapieansätze für Ihre persönlichen Bedürfnisse und Ziele.",
                color: "from-emerald-500 to-teal-600",
                bgColor: "from-emerald-50 to-teal-100/50"
              }
            ].map((service, index) => (
              <Card 
                key={index}
                className="group relative border-0 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardContent className="relative p-8 text-center">
                  {/* Animated Icon */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                    {service.description}
                  </p>
                  
                  {/* Hover Arrow */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-amber-600 mx-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <Link href="/services">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 group">
                Alle Leistungen ansehen
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Atmosphäre & Eindrücke Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50/50 to-amber-50/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Atmosphäre & 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Eindrücke</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Lernen Sie mich und meine professionelle, warme Arbeitsatmosphäre kennen. 
              Ein Raum für Vertrauen, Wachstum und positive Veränderung.
            </p>
          </div>
          
          {/* Enhanced Image Gallery */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                src: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg",
                alt: "Dr. Anja Haile - Professionelle Therapie Atmosphäre",
                title: "Professionelle Atmosphäre"
              },
              {
                src: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg",
                alt: "Dr. Anja Haile - Einfühlsame Beratung",
                title: "Einfühlsame Beratung"
              },
              {
                src: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-178-scaled.jpg",
                alt: "Dr. Anja Haile - Vertrauensvolle Gespräche",
                title: "Vertrauensvolle Gespräche"
              }
            ].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-3xl">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-100/20 to-orange-100/20">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  
                  {/* Enhanced Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl font-semibold mb-2">{image.title}</h3>
                      <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA */}
          <div className="text-center">
            <Link href="/about">
              <Button size="lg" variant="outline" className="border-2 border-amber-300 text-amber-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-300 hover:scale-105 group bg-white/80 backdrop-blur-sm">
                Mehr über meine Arbeitsweise
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[url('/api/placeholder/20/20')] opacity-5"></div>
        </div>

        <div className="container mx-auto text-center relative">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-orange-100 mb-8 border border-white/20">
              <Calendar className="w-4 h-4 mr-2" />
              Kostenlose Erstberatung verfügbar
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Bereit für Ihre 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white"> Transformation?</span>
            </h2>
            
            <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Vereinbaren Sie ein unverbindliches Erstgespräch und beginnen Sie Ihren Weg zur Veränderung. 
              Gemeinsam finden wir den besten Ansatz für Ihre persönliche Entwicklung.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Link href="/booking">
                <Button size="lg" className="bg-white text-amber-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-4 text-lg font-semibold">
                  <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Jetzt Termin buchen
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <div className="flex items-center space-x-4 text-orange-100">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">+49 (0) 89 123 456 789</span>
                </div>
                <div className="w-px h-6 bg-orange-300/30"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="font-medium">praxis@anjahaile.de</span>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Zertifiziert & Erfahren</h3>
                <p className="text-orange-200 text-sm">BDP-zertifiziert mit über 15 Jahren Berufserfahrung</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Individuelle Betreuung</h3>
                <p className="text-orange-200 text-sm">Maßgeschneiderte Therapieansätze für jeden Patienten</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Zentral in München</h3>
                <p className="text-orange-200 text-sm">Gut erreichbare Praxis in der Maximilianstraße</p>
              </div>
            </div>
          </div>
        </div>
      </section>

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