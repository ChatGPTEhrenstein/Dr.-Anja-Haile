'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, GraduationCap, Award, Heart, Star, CheckCircle, Calendar, Menu, Brain, Users, Clock, MapPin, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

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
        <section className="py-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image */}
            <div className="animate-in slide-in-from-left-8 duration-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                <img 
                  src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                  alt="Dr. Anja Haile - Psychologische Psychotherapeutin"
                  className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                {/* Floating Professional Badge */}
                <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg shadow-amber-500/25">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-sm font-semibold text-slate-700">BDP Zertifiziert</p>
                    <p className="text-xs text-slate-500">Seit 2018</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Text Content */}
            <div className="space-y-8 animate-in slide-in-from-right-8 duration-1000 delay-300">
              {/* Badge */}
              <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
                <Heart className="w-4 h-4 mr-2" />
                Ihre Therapeutin
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Über{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600">
                  mich
                </span>
              </h1>
              
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Als <span className="font-semibold text-amber-600">psychologische Psychotherapeutin</span> mit Spezialisierung auf kognitive Verhaltenstherapie 
                  begleite ich Menschen dabei, langfristige positive Veränderungen in ihrem Leben zu erreichen.
                </p>
                <p>
                  Seit <span className="font-semibold text-amber-600">2018</span> praktiziere ich unter Supervision und helfe meinen Klienten dabei, Selbstzweifel 
                  zu überwinden und mit Freude sie selbst zu sein.
                </p>
                <p>
                  Mein Ansatz ist geprägt von <span className="font-semibold text-amber-600">Empathie, wissenschaftlich fundierter Methodik</span> und der festen 
                  Überzeugung, dass jeder Mensch das Potenzial zur positiven Veränderung in sich trägt.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { number: "7+", label: "Jahre Erfahrung", icon: Clock },
                  { number: "500+", label: "Erfolgreiche Therapien", icon: Users },
                  { number: "100%", label: "BDP Zertifiziert", icon: Award }
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
          </div>
        </section>

        {/* Enhanced Qualifications */}
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
                <GraduationCap className="w-4 h-4 mr-2" />
                Expertise & Qualifikationen
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Qualifikationen & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600"> Erfahrung</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Fundierte Ausbildung, kontinuierliche Weiterbildung und jahrelange Praxiserfahrung 
                bilden das Fundament meiner therapeutischen Arbeit.
              </p>
            </div>
            
            {/* Enhanced Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  icon: GraduationCap,
                  title: "Ausbildung",
                  description: "Psychologische Psychotherapeutin mit Fokus auf kognitive Verhaltenstherapie. Fundierte wissenschaftliche Ausbildung und kontinuierliche Weiterbildung.",
                  color: "from-amber-500 to-orange-600",
                  bgColor: "from-amber-50 to-orange-100/50"
                },
                {
                  icon: Award,
                  title: "Erfahrung",
                  description: "Seit 2018 in der Praxis tätig unter Supervision. Umfangreiche Erfahrung in der Behandlung verschiedener psychischer Belastungen und Störungen.",
                  color: "from-emerald-500 to-teal-600",
                  bgColor: "from-emerald-50 to-teal-100/50"
                },
                {
                  icon: Heart,
                  title: "Philosophie",
                  description: "Mein Ziel ist es, Menschen dabei zu unterstützen, ihre innere Stärke zu entdecken und ein erfülltes, authentisches Leben zu führen.",
                  color: "from-rose-500 to-pink-600",
                  bgColor: "from-rose-50 to-pink-100/50"
                }
              ].map((item, index) => (
                <Card 
                  key={index}
                  className="group relative border-0 bg-gradient-to-br from-white to-slate-50/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:scale-105 overflow-hidden"
                >
                  {/* Animated Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <CardContent className="relative p-8 text-center">
                    {/* Animated Icon */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Values */}
        <section className="py-20 bg-gradient-to-br from-white to-amber-50/30 rounded-3xl shadow-xl shadow-amber-500/5 relative overflow-hidden">
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
                Meine Grundwerte
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                Meine{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">Werte</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Diese Grundprinzipien leiten mich in der therapeutischen Arbeit und prägen 
                die Atmosphäre in meiner Praxis.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Enhanced Values List */}
              <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
                {[
                  {
                    title: "Empathie & Verständnis",
                    description: "Jeder Mensch ist einzigartig. Ich begegne meinen Klienten mit Respekt, Wertschätzung und einem offenen Herzen.",
                    icon: Heart,
                    color: "text-rose-600"
                  },
                  {
                    title: "Wissenschaftliche Fundierung",
                    description: "Meine Arbeit basiert auf evidenzbasierten Methoden der kognitiven Verhaltenstherapie und aktuellen wissenschaftlichen Erkenntnissen.",
                    icon: Brain,
                    color: "text-amber-600"
                  },
                  {
                    title: "Ganzheitlicher Ansatz",
                    description: "Ich betrachte den Menschen in seiner Gesamtheit und berücksichtige individuelle Bedürfnisse, Ressourcen und Lebenssituationen.",
                    icon: Users,
                    color: "text-emerald-600"
                  }
                ].map((value, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg flex-shrink-0`}>
                      <value.icon className={`w-8 h-8 ${value.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-amber-700 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced Second Image */}
              <div className="animate-in slide-in-from-right-8 duration-1000 delay-300">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-500"></div>
                  <img 
                    src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg"
                    alt="Dr. Anja Haile - Professionelle Beratung und Unterstützung"
                    className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover border-4 border-white/50 transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Floating Quote */}
                  <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100 max-w-xs">
                    <p className="text-sm font-medium text-slate-700 italic">
                      "Jeder Mensch trägt das Potenzial zur positiven Veränderung in sich."
                    </p>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                      <span className="text-xs text-slate-500 font-medium">Dr. Anja Haile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA */}
        <section className="py-20 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-8">
              <Calendar className="w-4 h-4 mr-2" />
              Unverbindliches Erstgespräch
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Lernen Sie mich{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">kennen</span>
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Vereinbaren Sie ein unverbindliches Erstgespräch und erfahren Sie, 
              wie ich Sie auf Ihrem Weg zu mehr Lebensfreude begleiten kann.
            </p>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/booking">
                <Button size="lg" className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 group px-8 py-4 text-lg font-semibold">
                  <Calendar className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Erstgespräch vereinbaren
                </Button>
              </Link>

              <div className="flex items-center space-x-4 text-slate-600">
                <div className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 text-amber-600" />
                  <span className="font-medium">+49 (0) 89 123 456 789</span>
                </div>
                <div className="w-px h-6 bg-slate-300"></div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-amber-600" />
                  <span className="font-medium">praxis@anjahaile.de</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 relative overflow-hidden">
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
                <Link href="/about" className="block text-amber-400 font-medium">Über mich</Link>
                <Link href="/services" className="block text-slate-300 hover:text-amber-400 transition-colors">Leistungen</Link>
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