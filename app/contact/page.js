'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-blue-900">
              Dr. Anja Haile
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-blue-800 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-blue-800 hover:text-blue-600 transition-colors">Über mich</Link>
              <Link href="/services" className="text-blue-800 hover:text-blue-600 transition-colors">Leistungen</Link>
              <Link href="/portfolio" className="text-blue-800 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/testimonials" className="text-blue-800 hover:text-blue-600 transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-blue-600 font-semibold">Kontakt</Link>
            </div>
            <Link href="/booking">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Termin buchen
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              Kontakt
            </h1>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? 
              Ich freue mich auf Ihre Nachricht und melde mich schnellstmöglich bei Ihnen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Kontaktinformationen</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900">E-Mail</h3>
                      <p className="text-blue-700">praxis@anjahaile.de</p>
                      <p className="text-sm text-blue-600">Für Terminanfragen und Informationen</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Telefon</h3>
                      <p className="text-blue-700">+49 (0) 89 123 456 789</p>
                      <p className="text-sm text-blue-600">Mo-Fr 9:00-17:00 Uhr</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Praxis</h3>
                      <p className="text-blue-700">
                        Maximilianstraße 1<br />
                        80539 München<br />
                        Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-blue-900">Sprechzeiten</h3>
                      <div className="text-blue-700 space-y-1">
                        <p>Montag - Donnerstag: 9:00 - 18:00 Uhr</p>
                        <p>Freitag: 9:00 - 16:00 Uhr</p>
                        <p className="text-sm text-blue-600">Termine nach Vereinbarung</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-blue-900 mb-2">Schnelle Terminbuchung</h3>
                  <p className="text-blue-700 mb-4">
                    Nutzen Sie unser Online-Buchungssystem für eine schnelle und einfache Terminvereinbarung.
                  </p>
                  <Link href="/booking">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Online Termin buchen
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Nachricht senden</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ihr vollständiger Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="ihre.email@beispiel.de"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Ihre Telefonnummer"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Betreff</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Thema Ihrer Anfrage"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Nachricht *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Beschreiben Sie Ihr Anliegen..."
                      rows={6}
                      required
                    />
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Wird gesendet...</>
                    ) : (
                      <>
                        <Send className="mr-2 w-4 h-4" />
                        Nachricht senden
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-blue-600">
                    * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Dr. Anja Haile</h3>
              <p className="text-blue-200">
                Psychologische Psychotherapeutin<br />
                München, Deutschland
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-blue-200 hover:text-white transition-colors">Über mich</Link>
                <Link href="/services" className="block text-blue-200 hover:text-white transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-blue-200 hover:text-white transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-blue-200 hover:text-white transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-blue-200 hover:text-white transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-blue-200 hover:text-white transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-blue-200 hover:text-white transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-blue-200 hover:text-white transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}