'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Brain, Heart, Users, Clock, Calendar, CheckCircle, Star, Award, Target, ArrowRight, Menu, Zap, Shield, Lightbulb } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ServicesPage() {
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

        {/* Enhanced Hero Section */}
        <section className="py-16 text-center mb-20">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-8">
              <Heart className="w-4 h-4 mr-2" />
              Professionelle Therapie-Leistungen
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              Meine{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
                Leistungen
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Spezialisierte psychologische Psychotherapie mit Fokus auf{' '}
              <span className="font-semibold text-amber-600">kognitive Verhaltenstherapie</span>. 
              Individuelle Betreuung für Ihre persönliche Entwicklung und mentale Gesundheit.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { number: "50min", label: "Pro Sitzung", icon: Clock },
                { number: "100%", label: "Individuell", icon: Target },
                { number: "7+", label: "Jahre Erfahrung", icon: Award }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/10">
                    <stat.icon className="w-8 h-8 text-amber-600" />
                  </div>
                  <p className="text-2xl font-bold text-slate-800">{stat.number}</p>
                  <p className="text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Main Services */}
        <section className="py-20 relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-1/4 w-64 h-64 bg-amber-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-200/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
                <Brain className="w-4 h-4 mr-2" />
                Kern-Therapieleistungen
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Professionelle{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Betreuung</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Von der ersten Kontaktaufnahme bis zur nachhaltigen Veränderung - 
                ich begleite Sie auf Ihrem individuellen Weg.
              </p>
            </div>

            {/* Enhanced Service Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: Clock,
                  title: "Erstgespräch",
                  description: "Unverbindliches Kennenlernen zur Klärung Ihrer Anliegen und Zielsetzungen. Gemeinsam besprechen wir Ihre Situation und entwickeln einen ersten Therapieplan.",
                  features: ["Dauer: 50 Minuten", "Unverbindlich & vertraulich", "Persönliche Bedarfsanalyse"],
                  buttonText: "Erstgespräch buchen",
                  color: "from-amber-500 to-orange-600",
                  bgColor: "from-amber-50 to-orange-100/50",
                  price: "Kostenlos"
                },
                {
                  icon: Brain,
                  title: "Kognitive Verhaltenstherapie",
                  description: "Evidenzbasierte Therapie zur Veränderung ungünstiger Denkmuster und Verhaltensweisen. Nachhaltige Lösungen für Depression, Angst und andere psychische Belastungen.",
                  features: ["Wissenschaftlich fundiert", "Individuelle Therapiepläne", "Langfristige Veränderung"],
                  buttonText: "Beratung vereinbaren",
                  color: "from-blue-500 to-indigo-600",
                  bgColor: "from-blue-50 to-indigo-100/50",
                  price: "Kassenleistung"
                },
                {
                  icon: Users,
                  title: "Workshops & Beratung",
                  description: "Themenspezifische Workshops und intensive Beratungssitzungen für spezielle Anliegen. Gruppensitzungen oder Einzelberatung nach Bedarf.",
                  features: ["Flexible Formate", "Spezielle Themenbereiche", "Praktische Übungen"],
                  buttonText: "Workshop anfragen",
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "from-emerald-50 to-teal-100/50",
                  price: "Auf Anfrage"
                }
              ].map((service, index) => (
                <Card 
                  key={index}
                  className="group relative border-0 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardHeader className="relative text-center pb-4">
                    {/* Price Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg">
                      {service.price}
                    </div>
                    
                    {/* Animated Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <service.icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${service.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative space-y-6">
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600 group-hover:text-slate-700 transition-colors">
                          <CheckCircle className="w-4 h-4 mr-3 text-emerald-500 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <Link href="/booking" className="block">
                      <Button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 group">
                        {service.buttonText}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Specializations */}
        <section className="py-20 bg-gradient-to-br from-white to-amber-50/30 rounded-3xl shadow-xl shadow-amber-500/5 relative overflow-hidden mb-20">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/10 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-8 relative">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
                <Star className="w-4 h-4 mr-2" />
                Meine Spezialisierungen
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Spezialisierte{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Therapiebereiche</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Fokussierte Expertise in den wichtigsten Bereichen der psychischen Gesundheit 
                für nachhaltige Veränderungen.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Enhanced Image */}
              <div className="animate-in slide-in-from-left-8 duration-1000">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                  <img 
                    src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg"
                    alt="Dr. Anja Haile - Emotionale Transformation und Therapie"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Floating Quote */}
                  <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100 max-w-xs">
                    <p className="text-sm font-medium text-slate-700 italic">
                      "Nachhaltige Veränderung beginnt mit dem ersten mutigen Schritt."
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-xs text-slate-500 font-medium">Dr. Anja Haile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Specializations List */}
              <div className="space-y-8 animate-in slide-in-from-right-8 duration-1000 delay-300">
                {[
                  {
                    title: "Emotionale Transformation",
                    description: "Unterstützung bei der Entwicklung emotionaler Stabilität, Selbstakzeptanz und dem Umgang mit schwierigen Gefühlen.",
                    icon: Heart,
                    color: "text-rose-600"
                  },
                  {
                    title: "Selbstzweifel überwinden",
                    description: "Gezieltes Training zur Stärkung des Selbstvertrauens und zur Überwindung limitierender Glaubenssätze.",
                    icon: Shield,
                    color: "text-amber-600"
                  },
                  {
                    title: "Lebensziele erreichen",
                    description: "Begleitung bei der Entwicklung und Umsetzung persönlicher Ziele für ein erfülltes Leben.",
                    icon: Target,
                    color: "text-emerald-600"
                  },
                  {
                    title: "Stressmanagement",
                    description: "Effektive Strategien zur Bewältigung von Stress und zur Förderung der Work-Life-Balance.",
                    icon: Zap,
                    color: "text-blue-600"
                  }
                ].map((specialization, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <specialization.icon className={`w-8 h-8 ${specialization.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                        {specialization.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                        {specialization.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Process */}
        <section className="py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
              <Lightbulb className="w-4 h-4 mr-2" />
              Therapie-Ablauf
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              Wie läuft die{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Therapie</span> ab?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ein strukturierter, aber individueller Ansatz für Ihre persönliche Entwicklung 
              und nachhaltigen Erfolg.
            </p>
          </div>
          
          {/* Process Image */}
          <div className="mb-16 text-center">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-178-scaled.jpg"
                alt="Dr. Anja Haile - Professionelle Therapieatmosphäre"
                className="relative rounded-3xl shadow-2xl w-full max-w-4xl h-[400px] object-cover border-4 border-white/50"
              />
            </div>
          </div>
          
          {/* Enhanced Process Steps */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Erstgespräch",
                description: "Unverbindliches Kennenlernen und ausführliche Bedarfsanalyse",
                color: "from-amber-500 to-orange-500"
              },
              {
                step: "2",
                title: "Planung",
                description: "Gemeinsame Entwicklung Ihres individuellen Therapieplans",
                color: "from-blue-500 to-indigo-500"
              },
              {
                step: "3",
                title: "Durchführung",
                description: "Regelmäßige Sitzungen mit praktischen Übungen und Techniken",
                color: "from-emerald-500 to-teal-500"
              },
              {
                step: "4",
                title: "Erfolg",
                description: "Nachhaltige Veränderung und kontinuierliches persönliches Wachstum",
                color: "from-rose-500 to-pink-500"
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25`}>
                  <span className="text-2xl font-bold text-white">{process.step}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                  {process.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                  {process.description}
                </p>
                
                {/* Connecting Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-amber-300/50 to-orange-300/50 transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced CTA */}
        <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-700 to-amber-800 rounded-3xl text-white relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="text-center relative">
            <div className="max-w-4xl mx-auto px-8">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-orange-100 mb-8 border border-white/20">
                <Calendar className="w-4 h-4 mr-2" />
                Starten Sie noch heute
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Bereit für Ihre{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-white">Veränderung?</span>
              </h2>
              
              <p className="text-xl text-orange-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                Vereinbaren Sie noch heute ein unverbindliches Erstgespräch und machen Sie 
                den ersten Schritt zu einem erfüllteren Leben.
              </p>

              {/* Enhanced CTAs */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link href="/booking">
                  <Button size="lg" className="bg-white text-amber-600 hover:bg-orange-50 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group px-8 py-4 text-lg font-semibold">
                    <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                    Jetzt Termin buchen
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>

                <div className="text-center">
                  <p className="text-orange-200 text-sm">Kostenloses Erstgespräch</p>
                  <p className="text-white font-semibold">50 Minuten unverbindlich</p>
                </div>
              </div>

              {/* Trust Elements */}
              <div className="mt-12 flex justify-center items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-200 text-sm">BDP Zertifiziert</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-200 text-sm">Kassenleistung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-orange-200" />
                  <span className="text-orange-200 text-sm">GDPR Konform</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 mt-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Enhanced Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Image 
                    src="/images/bdp-logo.png" 
                    alt="BDP Logo" 
                    width={50} 
                    height={50}
                    className="w-12 h-12 drop-shadow-sm"
                  />
                  <div className="absolute inset-0 bg-amber-500/20 rounded-full blur-lg"></div>
                </div>
                <h3 className="text-xl font-bold">Dr. Anja Haile</h3>
              </div>
              <p className="text-slate-300 mb-4">
                Psychologische Psychotherapeutin<br />
                München, Deutschland
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-slate-300 hover:text-amber-400 transition-colors">Über mich</Link>
                <Link href="/services" className="block text-amber-400 font-medium">Leistungen</Link>
                <Link href="/portfolio" className="block text-slate-300 hover:text-amber-400 transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-slate-300 hover:text-amber-400 transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-slate-300 hover:text-amber-400 transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-slate-300 hover:text-amber-400 transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-slate-300 hover:text-amber-400 transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-slate-300 hover:text-amber-400 transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}