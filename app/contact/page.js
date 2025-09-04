'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, CheckCircle, Calendar, Menu, Loader2, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
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
    { href: '/contact', label: 'Kontakt', active: true }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setSubmitStatus({ type: 'error', message: result.error })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group transition-transform hover:scale-105">
              <div className="text-2xl font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                Dr. Anja Haile
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
              <Mail className="w-4 h-4 mr-2" />
              Jederzeit erreichbar
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
              Ich freue mich auf Ihre Nachricht und melde mich schnellstmöglich bei Ihnen.
            </p>
          </div>

          {/* Enhanced Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Information */}
            <div className="space-y-8 animate-in slide-in-from-left-8 duration-1000">
              <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500">
                <CardHeader className="pb-4">
                  <CardTitle className="text-slate-800 text-2xl flex items-center">
                    <Mail className="w-6 h-6 text-amber-600 mr-3" />
                    Kontaktinformationen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  {[
                    {
                      icon: Mail,
                      title: "E-Mail",
                      content: "praxis@anjahaile.de",
                      subtitle: "Für Terminanfragen und Informationen",
                      color: "text-amber-600"
                    },
                    {
                      icon: Phone,
                      title: "Telefon",
                      content: "+49 (0) 89 123 456 789",
                      subtitle: "Mo-Fr 9:00-17:00 Uhr",
                      color: "text-emerald-600"
                    },
                    {
                      icon: MapPin,
                      title: "Praxis",
                      content: "Maximilianstraße 1\n80539 München\nDeutschland",
                      subtitle: "Zentral gelegen, gut erreichbar",
                      color: "text-rose-600"
                    },
                    {
                      icon: Clock,
                      title: "Sprechzeiten",
                      content: "Montag - Donnerstag: 9:00 - 18:00 Uhr\nFreitag: 9:00 - 16:00 Uhr",
                      subtitle: "Termine nach Vereinbarung",
                      color: "text-purple-600"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${item.color.replace('text-', 'shadow-')} shadow-lg`}>
                        <item.icon className={`w-6 h-6 ${item.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg mb-1 group-hover:text-amber-700 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-700 font-medium mb-1 whitespace-pre-line">
                          {item.content}
                        </p>
                        <p className="text-sm text-slate-500">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enhanced Quick Booking Card */}
              <Card className="border-0 bg-gradient-to-br from-amber-50 to-orange-50 shadow-xl shadow-amber-500/10 hover:shadow-2xl hover:shadow-amber-500/15 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/25">
                      <Calendar className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 text-xl mb-3 group-hover:text-amber-700 transition-colors">
                      Schnelle Terminbuchung
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      Nutzen Sie unser Online-Buchungssystem für eine schnelle und einfache Terminvereinbarung.
                    </p>
                    <Link href="/booking">
                      <Button className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg shadow-amber-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-105 group w-full">
                        <Calendar className="mr-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                        Online Termin buchen
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: CheckCircle, label: "BDP Zertifiziert", color: "text-emerald-600" },
                  { icon: Star, label: "15+ Jahre", color: "text-yellow-600" },
                  { icon: CheckCircle, label: "GDPR Konform", color: "text-amber-600" }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <p className="text-xs font-medium text-slate-600">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <Card className="border-0 bg-gradient-to-br from-white to-slate-50/50 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 animate-in slide-in-from-right-8 duration-1000">
              <CardHeader className="pb-6">
                <CardTitle className="text-slate-800 text-2xl flex items-center">
                  <Send className="w-6 h-6 text-amber-600 mr-3" />
                  Nachricht senden
                </CardTitle>
                <p className="text-slate-600 mt-2">
                  Füllen Sie das Formular aus und ich melde mich schnellstmöglich bei Ihnen zurück.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-slate-700 font-medium flex items-center">
                        Name *
                        <span className="ml-1 text-red-500">●</span>
                      </Label>
                      <div className="relative group">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Ihr vollständiger Name"
                          required
                          className="border-2 border-slate-200 focus:border-amber-500 transition-all duration-300 group-hover:border-slate-300 bg-white/50 backdrop-blur-sm h-12"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-focus-within:from-amber-500/10 group-focus-within:to-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-slate-700 font-medium flex items-center">
                        E-Mail *
                        <span className="ml-1 text-red-500">●</span>
                      </Label>
                      <div className="relative group">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="ihre.email@beispiel.de"
                          required
                          className="border-2 border-slate-200 focus:border-amber-500 transition-all duration-300 group-hover:border-slate-300 bg-white/50 backdrop-blur-sm h-12"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-focus-within:from-amber-500/10 group-focus-within:to-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone and Subject Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">
                        Telefon
                      </Label>
                      <div className="relative group">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ihre Telefonnummer"
                          className="border-2 border-slate-200 focus:border-amber-500 transition-all duration-300 group-hover:border-slate-300 bg-white/50 backdrop-blur-sm h-12"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-focus-within:from-amber-500/10 group-focus-within:to-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="subject" className="text-slate-700 font-medium">
                        Betreff
                      </Label>
                      <div className="relative group">
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          placeholder="Thema Ihrer Anfrage"
                          className="border-2 border-slate-200 focus:border-amber-500 transition-all duration-300 group-hover:border-slate-300 bg-white/50 backdrop-blur-sm h-12"
                        />
                        <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-focus-within:from-amber-500/10 group-focus-within:to-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-slate-700 font-medium flex items-center">
                      Nachricht *
                      <span className="ml-1 text-red-500">●</span>
                    </Label>
                    <div className="relative group">
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Beschreiben Sie Ihr Anliegen ausführlich..."
                        rows={6}
                        required
                        className="border-2 border-slate-200 focus:border-amber-500 transition-all duration-300 group-hover:border-slate-300 bg-white/50 backdrop-blur-sm resize-none"
                      />
                      <div className="absolute inset-0 rounded-md bg-gradient-to-r from-amber-500/0 to-orange-500/0 group-focus-within:from-amber-500/10 group-focus-within:to-orange-500/10 transition-all duration-300 pointer-events-none"></div>
                    </div>
                    <p className="text-sm text-slate-500">
                      Mindestens 10 Zeichen ({formData.message.length}/10)
                    </p>
                  </div>

                  {/* Enhanced Status Messages */}
                  {submitStatus && (
                    <div className={`p-6 rounded-xl border-l-4 ${
                      submitStatus.type === 'success' 
                        ? 'bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-800 border-emerald-500 shadow-emerald-500/10'
                        : 'bg-gradient-to-r from-red-50 to-rose-50 text-red-800 border-red-500 shadow-red-500/10'
                    } shadow-lg animate-in slide-in-from-top-2 duration-500`}>
                      <div className="flex items-start space-x-3">
                        {submitStatus.type === 'success' ? (
                          <CheckCircle className="w-6 h-6 text-emerald-600 mt-0.5 flex-shrink-0" />
                        ) : (
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <span className="text-red-600 text-sm font-bold">!</span>
                          </div>
                        )}
                        <div>
                          <p className="font-medium mb-1">
                            {submitStatus.type === 'success' ? 'Nachricht erfolgreich gesendet!' : 'Fehler beim Senden'}
                          </p>
                          <p className="text-sm opacity-90">
                            {submitStatus.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Submit Button */}
                  <div className="space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-xl shadow-amber-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-[1.02] group h-14 text-lg font-semibold"
                      disabled={isSubmitting || formData.message.length < 10}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-3 w-5 h-5 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="mr-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          Nachricht senden
                        </>
                      )}
                    </Button>

                    {/* Privacy Notice */}
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        <CheckCircle className="w-4 h-4 text-emerald-600 inline mr-2" />
                        * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben. 
                        Weitere Informationen finden Sie in unserer{' '}
                        <Link href="/datenschutz" className="text-amber-600 hover:text-amber-800 underline">
                          Datenschutzerklärung
                        </Link>.
                      </p>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4 mt-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Anja Haile</h3>
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
                <Link href="/services" className="block text-slate-300 hover:text-amber-400 transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-slate-300 hover:text-amber-400 transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-slate-300 hover:text-amber-400 transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-amber-400 font-medium">Kontakt</Link>
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