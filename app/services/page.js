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

  const services = [
    {
      icon: Brain,
      title: "Kognitive Verhaltenstherapie",
      description: "Evidenzbasierte Therapie zur Veränderung schädlicher Denkmuster und Verhaltensweisen.",
      features: ["Depressionen", "Angststörungen", "Zwangsstörungen", "Burnout"],
      duration: "12-24 Sitzungen",
      highlight: true
    },
    {
      icon: Heart,
      title: "Einzeltherapie",
      description: "Individuelle psychotherapeutische Betreuung in vertrauensvoller Atmosphäre.",
      features: ["Persönliche Betreuung", "Flexible Termine", "Vertraulichkeit", "Maßgeschneidert"],
      duration: "50 Min/Sitzung"
    },
    {
      icon: Users,
      title: "Paartherapie",
      description: "Unterstützung für Paare zur Verbesserung der Kommunikation und Beziehungsqualität.",
      features: ["Kommunikation", "Konfliktlösung", "Vertrauen aufbauen", "Gemeinsame Ziele"],
      duration: "90 Min/Sitzung"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/50 relative overflow-x-hidden">
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
      <div className="container mx-auto px-4 py-6 md:py-8 pt-24 md:pt-32">
        <div className="mb-6 md:mb-8">
          <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 group transition-all duration-200 touch-manipulation">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Mobile-First Header */}
          <div className="text-center mb-12 md:mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-4 md:mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Therapeutische Leistungen
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4 md:mb-6 leading-tight">
              Meine Leistungen
            </h1>
            <p className="text-base md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4">
              Evidenzbasierte psychotherapeutische Unterstützung für Ihren Weg zu mehr 
              Lebensqualität und psychischer Gesundheit.
            </p>
          </div>

          {/* Mobile-Optimized Services Grid */}
          <div className="grid gap-6 md:gap-8 mb-16 md:mb-20">
            {services.map((service, index) => (
              <Card key={index} className={`border-0 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] touch-manipulation ${
                service.highlight 
                  ? 'bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50 shadow-amber-500/10 hover:shadow-amber-500/20' 
                  : 'bg-gradient-to-br from-white to-slate-50/50 shadow-amber-500/5 hover:shadow-amber-500/10'
              }`}>
                <CardHeader className="pb-4 md:pb-6">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 md:p-4 rounded-xl ${
                      service.highlight 
                        ? 'bg-gradient-to-br from-amber-600 to-orange-600' 
                        : 'bg-gradient-to-br from-amber-500 to-orange-500'
                    }`}>
                      <service.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-slate-800 text-xl md:text-2xl mb-2">{service.title}</CardTitle>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-600 text-xs md:text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-2 md:pt-4 border-t border-amber-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-amber-600" />
                      <span className="text-slate-600 text-sm font-medium">{service.duration}</span>
                    </div>
                    <Link href="/booking">
                      <Button size="sm" className="bg-gradient-to-r from-amber-600 to-orange-700 hover:from-amber-700 hover:to-orange-800 text-white active:scale-95 touch-manipulation">
                        Buchen
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mobile-Optimized CTA Section */}
          <div className="text-center bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 rounded-2xl md:rounded-3xl p-8 md:p-16 shadow-2xl animate-in slide-in-from-bottom-8 duration-1000 delay-600">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
              Bereit für den ersten Schritt?
            </h2>
            <p className="text-amber-50 text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
              Vereinbaren Sie noch heute Ihr unverbindliches Erstgespräch und 
              starten Sie Ihren Weg zu mehr Lebensfreude.
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
    </div>
  )
}