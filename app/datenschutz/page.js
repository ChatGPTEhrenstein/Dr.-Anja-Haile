'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ArrowLeft, Shield } from 'lucide-react'

export default function DatenschutzPage() {
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
              <Link href="/contact" className="text-blue-800 hover:text-blue-600 transition-colors">Kontakt</Link>
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

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-blue-900">
                Datenschutzerklärung
              </h1>
            </div>
            <p className="text-lg text-blue-700">
              Informationen zum Schutz Ihrer personenbezogenen Daten gemäß DSGVO
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="overview" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                1. Datenschutz auf einen Blick
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <h3 className="font-semibold text-blue-900">Allgemeine Hinweise</h3>
                  <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
                  
                  <h3 className="font-semibold text-blue-900">Datenerfassung auf dieser Website</h3>
                  <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
                  
                  <h3 className="font-semibold text-blue-900">Ihre Rechte</h3>
                  <p>Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="responsible" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                2. Verantwortliche Stelle
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Dr. Anja Haile<br />
                    Maximilianstraße 1<br />
                    80539 München<br />
                    Deutschland<br />
                    <br />
                    Telefon: +49 (0) 89 123 456 789<br />
                    E-Mail: praxis@anjahaile.de</p>
                  </div>
                  <p>Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="data-collection" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                3. Datenerfassung auf dieser Website
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <h3 className="font-semibold text-blue-900">Kontaktformular</h3>
                  <p>Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                  
                  <h3 className="font-semibold text-blue-900">Server-Log-Dateien</h3>
                  <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking-system" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                4. Terminbuchungssystem (GoHighLevel)
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <h3 className="font-semibold text-blue-900">Art und Umfang der Datenverarbeitung</h3>
                  <p>Für die Online-Terminbuchung verwenden wir den Dienst GoHighLevel. Wenn Sie einen Termin über unser Buchungssystem vereinbaren, werden Ihre Daten an GoHighLevel übertragen und dort verarbeitet.</p>
                  
                  <h3 className="font-semibold text-blue-900">Übertragene Daten</h3>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Name und Kontaktdaten</li>
                    <li>Gewählter Terminwunsch</li>
                    <li>Zusätzliche Informationen, die Sie im Buchungsformular angeben</li>
                  </ul>
                  
                  <h3 className="font-semibold text-blue-900">Rechtsgrundlage</h3>
                  <p>Die Verarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie vor der Nutzung des Buchungssystems erteilen.</p>
                  
                  <h3 className="font-semibold text-blue-900">Datenschutz bei GoHighLevel</h3>
                  <p>Weitere Informationen zum Datenschutz bei GoHighLevel finden Sie in deren Datenschutzerklärung unter: https://www.gohighlevel.com/privacy-policy</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="rights" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                5. Ihre Rechte
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <p>Sie haben folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Auskunft</h3>
                  <p>Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Berichtigung</h3>
                  <p>Sie haben ein Recht auf Berichtigung unrichtiger oder unvollständiger personenbezogener Daten.</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Löschung</h3>
                  <p>Sie können die Löschung Ihrer personenbezogenen Daten verlangen, soweit deren Verarbeitung nicht zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Einschränkung</h3>
                  <p>Sie können die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten verlangen.</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Widerspruch</h3>
                  <p>Sie können jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einlegen.</p>
                  
                  <h3 className="font-semibold text-blue-900">Recht auf Datenübertragbarkeit</h3>
                  <p>Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="therapy-data" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                6. Besondere Bestimmungen für Therapiedaten
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <h3 className="font-semibold text-blue-900">Schweigepflicht</h3>
                  <p>Als psychologische Psychotherapeutin unterliege ich der besonderen Schweigepflicht nach § 203 StGB. Alle Informationen aus der therapeutischen Behandlung werden streng vertraulich behandelt.</p>
                  
                  <h3 className="font-semibold text-blue-900">Therapiedokumentation</h3>
                  <p>Gemäß § 630f BGB bin ich verpflichtet, eine Behandlungsdokumentation zu führen. Diese enthält alle aus fachlicher Sicht für die derzeitige und künftige Behandlung wesentlichen Maßnahmen und deren Ergebnisse.</p>
                  
                  <h3 className="font-semibold text-blue-900">Aufbewahrungsfristen</h3>
                  <p>Therapieunterlagen werden gemäß der Berufsordnung für Psychotherapeuten für mindestens 10 Jahre aufbewahrt.</p>
                  
                  <h3 className="font-semibold text-blue-900">Übermittlung an Dritte</h3>
                  <p>Eine Übermittlung von Therapiedaten an Dritte erfolgt nur mit Ihrer ausdrücklichen Einwilligung oder wenn eine gesetzliche Übermittlungspflicht besteht.</p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="contact" className="border border-blue-200 rounded-lg">
              <AccordionTrigger className="text-left px-6 py-4 text-blue-900 font-semibold">
                7. Kontakt in Datenschutzfragen
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="space-y-4 text-blue-700">
                  <p>Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden:</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p>Dr. Anja Haile<br />
                    E-Mail: datenschutz@anjahaile.de<br />
                    Telefon: +49 (0) 89 123 456 789</p>
                  </div>
                  
                  <h3 className="font-semibold text-blue-900">Beschwerde bei Aufsichtsbehörde</h3>
                  <p>Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über unsere Verarbeitung personenbezogener Daten zu beschweren.</p>
                  <p>Zuständige Aufsichtsbehörde:<br />
                  Bayerisches Landesamt für Datenschutzaufsicht<br />
                  Promenade 18<br />
                  91522 Ansbach</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-sm text-blue-600">
              Stand: Januar 2025
            </p>
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