'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Users, Brain, Heart, CheckCircle, Calendar, Menu, Star, ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function PortfolioPage() {
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
    { href: '/portfolio', label: 'Portfolio', active: true },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Kontakt' }
  ]

  const projects = [
    {
      title: "Gruppentherapie für Angststörungen",
      description: "Erfolgreiche Durchführung einer 12-wöchigen Gruppentherapie für Patienten mit verschiedenen Angststörungen.",
      results: ["85% Verbesserung der Symptome", "Hohe Teilnehmerzufriedenheit", "Nachhaltige Erfolge"],
      icon: Users,
      image: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg"
    },
    {
      title: "Kognitive Verhaltenstherapie bei Depression", 
      description: "Individuelle Therapie mit Fokus auf Gedankenumstrukturierung und Verhaltensaktivierung.",
      results: ["Deutliche Verbesserung der Lebensqualität", "Entwicklung von Coping-Strategien", "Rückfallprävention"],
      icon: Brain,
      image: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-178-scaled.jpg"
    },
    {
      title: "Workshop: Selbstvertrauen stärken",
      description: "Interaktiver Workshop zur Stärkung des Selbstvertrauens und Überwindung von Selbstzweifeln.",
      results: ["Praktische Übungen für den Alltag", "Peer-Learning Effekte", "Langfristige Motivation"],
      icon: Heart,
      image: "https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg"
    }
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

        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-amber-100 to-orange-100 rounded-full text-sm font-medium text-amber-700 mb-6">
              <Star className="w-4 h-4 mr-2" />
              Bewährte Therapie-Erfolge
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Portfolio & Referenzen
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Einblicke in meine therapeutische Arbeit und erfolgreiche Projekte. 
              Erfahren Sie mehr über bewährte Ansätze und positive Ergebnisse in der psychologischen Betreuung.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-20 animate-in slide-in-from-bottom-6 duration-1000">
            {[
              { number: "500+", label: "Behandelte Patienten", color: "text-emerald-600" },
              { number: "85%", label: "Erfolgsrate", color: "text-amber-600" },
              { number: "7+", label: "Jahre Erfahrung", color: "text-blue-600" },
              { number: "98%", label: "Weiterempfehlungen", color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Projects Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Erfolgsprojekte</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ausgewählte Beispiele meiner therapeutischen Arbeit mit nachweisbaren Erfolgen
              </p>
            </div>

            <div className="grid gap-12">
              {projects.map((project, index) => (
                <div key={index} className="group animate-in slide-in-from-left-8 duration-1000" style={{animationDelay: `${index * 200}ms`}}>
                  <Card className="border-0 bg-gradient-to-r from-white to-amber-50/30 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                            <project.icon className="w-8 h-8 text-amber-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-800 group-hover:text-amber-700 transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                          {project.description}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="font-bold text-slate-800 text-lg">Ergebnisse:</h4>
                          {project.results.map((result, idx) => (
                            <div key={idx} className="flex items-center text-slate-600 group/item">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-300">
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              </div>
                              <span className="font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="lg:p-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 group-hover:from-amber-500/20 group-hover:to-orange-500/20 transition-all duration-500"></div>
                        <img 
                          src={project.image}
                          alt={project.title}
                          className="w-full h-[350px] lg:h-[450px] object-cover rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology Section */}
          <div className="mb-20">
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 order-2 lg:order-1">
                    <div className="text-center lg:text-left mb-8">
                      <h2 className="text-3xl font-bold text-slate-800 mb-4">Meine Arbeitsweise</h2>
                      <p className="text-lg text-slate-600">
                        Ein ganzheitlicher Ansatz für nachhaltige Veränderungen
                      </p>
                    </div>
                    
                    <div className="space-y-8">
                      {[
                        {
                          icon: Brain,
                          title: "Evidenzbasiert",
                          description: "Alle Methoden basieren auf wissenschaftlich fundierten Ansätzen der kognitiven Verhaltenstherapie.",
                          color: "from-blue-100 to-indigo-100",
                          iconColor: "text-blue-600"
                        },
                        {
                          icon: Heart,
                          title: "Individuell",
                          description: "Jeder Therapieplan wird individuell auf die Bedürfnisse und Ziele des Klienten abgestimmt.",
                          color: "from-red-100 to-pink-100",
                          iconColor: "text-red-600"
                        },
                        {
                          icon: Users,
                          title: "Nachhaltig",
                          description: "Fokus auf langfristige Veränderungen und die Entwicklung eigener Bewältigungsstrategien.",
                          color: "from-green-100 to-emerald-100",
                          iconColor: "text-green-600"
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-4 group">
                          <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            <item.icon className={`w-8 h-8 ${item.iconColor}`} />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-amber-700 transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:p-6 order-1 lg:order-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10"></div>
                    <img 
                      src="https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg"
                      alt="Dr. Anja Haile - Professionelle Therapiearbeitsweise"
                      className="w-full h-[400px] lg:h-[600px] object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mb-20">
            <Card className="border-0 bg-gradient-to-r from-amber-600 to-orange-700 shadow-xl shadow-amber-500/25 overflow-hidden">
              <CardContent className="p-12 lg:p-16 text-white relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="relative z-10">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                    Interessiert an meiner Arbeitsweise?
                  </h2>
                  <p className="text-xl text-amber-100 max-w-2xl mx-auto mb-8 leading-relaxed">
                    Lernen Sie mich und meine Methoden in einem unverbindlichen Erstgespräch kennen. 
                    Gemeinsam finden wir den passenden Weg für Ihre Situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link href="/booking">
                      <Button size="lg" className="bg-white text-amber-600 hover:bg-amber-50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                        <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Erstgespräch vereinbaren
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <div className="text-amber-100">
                      <div className="font-semibold">Kostenloses Erstgespräch</div>
                      <div className="text-sm opacity-80">50 Minuten unverbindlich</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image 
                  src="/images/bdp-logo.png" 
                  alt="BDP Logo" 
                  width={50} 
                  height={50}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-xl font-bold">Dr. Anja Haile</h3>
                  <p className="text-slate-300 text-sm">Psychologische Psychotherapeutin</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Professionelle psychologische Betreuung in München. 
                Spezialisiert auf kognitive Verhaltenstherapie für nachhaltige Veränderungen.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Navigation</h4>
              <div className="space-y-3">
                <Link href="/about" className="block text-slate-300 hover:text-amber-400 transition-colors">Über mich</Link>
                <Link href="/services" className="block text-slate-300 hover:text-amber-400 transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-amber-400 font-medium">Portfolio</Link>
                <Link href="/testimonials" className="block text-slate-300 hover:text-amber-400 transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Kontakt</h4>
              <div className="space-y-3">
                <Link href="/contact" className="block text-slate-300 hover:text-amber-400 transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-slate-300 hover:text-amber-400 transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-6 text-amber-400">Rechtliches</h4>
              <div className="space-y-3">
                <Link href="/impressum" className="block text-slate-300 hover:text-amber-400 transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-slate-300 hover:text-amber-400 transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}