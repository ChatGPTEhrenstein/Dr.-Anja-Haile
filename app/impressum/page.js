'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowLeft } from 'lucide-react'

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-amber-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image 
                src="/images/bdp-logo.svg" 
                alt="BDP - Berufsverband deutscher Psychologen" 
                width={50} 
                height={50}
                className="w-12 h-12"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-amber-900">Dr. Anja Haile</span>
                <span className="text-xs text-amber-700">Psychologische Psychotherapeutin</span>
              </div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-amber-800 hover:text-amber-600 transition-colors">Home</Link>
              <Link href="/about" className="text-amber-800 hover:text-amber-600 transition-colors">Über mich</Link>
              <Link href="/services" className="text-amber-800 hover:text-amber-600 transition-colors">Leistungen</Link>
              <Link href="/portfolio" className="text-amber-800 hover:text-amber-600 transition-colors">Portfolio</Link>
              <Link href="/testimonials" className="text-amber-800 hover:text-amber-600 transition-colors">Testimonials</Link>
              <Link href="/contact" className="text-amber-800 hover:text-amber-600 transition-colors">Kontakt</Link>
            </div>
            <Link href="/booking">
              <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                Termin buchen
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Zurück zur Startseite
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-900 mb-4">
              Impressum
            </h1>
            <p className="text-lg text-amber-700">
              Rechtliche Informationen gemäß § 5 TMG
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="contact-info" className="border border-amber-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-amber-900 font-semibold">
                Angaben gemäß § 5 TMG
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Praxisinhaber:</h3>
                    <p>Dr. Anja Haile<br />
                    Psychologische Psychotherapeutin</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Anschrift:</h3>
                    <p>Maximilianstraße 1<br />
                    80539 München<br />
                    Deutschland</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Kontakt:</h3>
                    <p>Telefon: +49 (0) 89 123 456 789<br />
                    E-Mail: praxis@anjahaile.de</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="professional-info" className="border border-amber-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-amber-900 font-semibold">
                Berufsrechtliche Angaben
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Berufsbezeichnung:</h3>
                    <p>Psychologische Psychotherapeutin<br />
                    (verliehen in Deutschland)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Zuständige Kammer:</h3>
                    <p>Bayerische Landeskammer der Psychologischen Psychotherapeuten<br />
                    und der Kinder- und Jugendlichenpsychotherapeuten (PTK Bayern)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Kassenzulassung:</h3>
                    <p>Kassenzulassung bei der Kassenärztlichen Vereinigung Bayern (KVB)</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Berufsrechtliche Regelungen:</h3>
                    <p>Psychotherapeutengesetz (PsychThG)<br />
                    Berufsordnung der PTK Bayern</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="responsibility" className="border border-amber-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-amber-900 font-semibold">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="text-amber-700">
                  <p>Dr. Anja Haile<br />
                  Maximilianstraße 1<br />
                  80539 München</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="disclaimer" className="border border-amber-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-amber-900 font-semibold">
                Haftungsausschluss
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Haftung für Inhalte:</h3>
                    <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Haftung für Links:</h3>
                    <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Urheberrecht:</h3>
                    <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical" className="border border-amber-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-amber-900 font-semibold">
                Technische Umsetzung
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-amber-700">
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Webdesign und Entwicklung:</h3>
                    <p>Diese Website wurde mit Next.js entwickelt und verwendet moderne Webtechnologien für optimale Benutzerfreundlichkeit und Datenschutz.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-amber-900 mb-2">Terminbuchung:</h3>
                    <p>Für die Online-Terminbuchung verwenden wir den Dienst GoHighLevel. Weitere Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-sm text-amber-600">
              Stand: Januar 2025
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/images/bdp-logo.svg" 
                  alt="BDP Logo" 
                  width={40} 
                  height={40}
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-bold">Dr. Anja Haile</h3>
              </div>
              <p className="text-amber-200">
                Psychologische Psychotherapeutin<br />
                München, Deutschland
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-amber-200 hover:text-white transition-colors">Über mich</Link>
                <Link href="/services" className="block text-amber-200 hover:text-white transition-colors">Leistungen</Link>
                <Link href="/portfolio" className="block text-amber-200 hover:text-white transition-colors">Portfolio</Link>
                <Link href="/testimonials" className="block text-amber-200 hover:text-white transition-colors">Testimonials</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontakt</h4>
              <div className="space-y-2">
                <Link href="/contact" className="block text-amber-200 hover:text-white transition-colors">Kontakt</Link>
                <Link href="/booking" className="block text-amber-200 hover:text-white transition-colors">Termin buchen</Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Rechtliches</h4>
              <div className="space-y-2">
                <Link href="/impressum" className="block text-amber-200 hover:text-white transition-colors">Impressum</Link>
                <Link href="/datenschutz" className="block text-amber-200 hover:text-white transition-colors">Datenschutz</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-200">
            <p>&copy; 2025 Dr. Anja Haile. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}