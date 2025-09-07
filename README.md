# Dr. Anja Haile Website - HTML Block Refaktorierung

## Übersicht

Diese Website wurde in HTML-Blöcke refaktoriert, um eine einfache Integration in GoHighLevel zu ermöglichen. Jede Seite ist in mehrere eigenständige HTML-Blöcke aufgeteilt, die separat in GoHighLevel als HTML-Elemente eingefügt werden können.

## Struktur der HTML-Blöcke

### Homepage (/)
- `01-hero-zertifizierte-psychotherapeutin.html` - Hero Section mit Claim und CTA
- `02-therapy-and-research.html` - Spezialisierte Therapie Services
- `03-atmosphaere-und-eindruecke.html` - Bild-Gallery mit Hover-Effekten
- `04-testimonials-teaser.html` - Testimonial-Karten
- `05-cta.html` - Call-to-Action Banner

### Über mich (/about/)
- `01-intro-portrait.html` - Portrait und Kurzvorstellung
- `02-story-und-werte.html` - Story und Werte
- `03-qualifikationen.html` - Ausbildung und Erfahrung
- `04-cta.html` - CTA Button

### Leistungen (/leistungen/)
- `01-intro.html` - Einleitung
- `02-services.html` - Service-Karten (6 Hauptleistungen)
- `03-prozess.html` - 3-Schritte Prozess
- `04-faq.html` - FAQ Accordion

### Portfolio (/portfolio/)
- `01-grid.html` - Stats und Case Studies Grid

## Design-Features

### Desktop
- Hover-Effekte bei Bildern (scale transform)
- Hover-Animationen bei Karten und Buttons
- Sanfte Übergänge und Schatten-Effekte
- Gradient-Animationen

### Mobile
- Keine Hover-Effekte (touch-optimiert)
- Touch-Action-Manipulation
- Größere Touch-Targets (min 44px)
- Responsive Grid-Layouts

### Styling
- Inline CSS für GoHighLevel-Kompatibilität
- Konsistente Farbpalette (Amber/Orange)
- Moderne Tailwind-inspirierte Designs
- Glassmorphism-Effekte

## GoHighLevel Integration

### Verwendung:
1. Kopieren Sie den HTML-Code eines Blocks
2. Fügen Sie ihn in GoHighLevel als HTML-Element ein
3. Die Blöcke sind vollständig eigenständig

### Links:
Alle Links sind fest verdrahtet:
- `/` - Homepage
- `/about/` - Über mich
- `/leistungen/` - Services
- `/portfolio/` - Portfolio
- `/testimonials/` - Testimonials
- `/kontakt/` - Kontakt
- `/booking/` - Termin buchen
- `/impressum/` - Impressum
- `/datenschutz/` - Datenschutz

### Bilder:
Alle Bilder verwenden die ursprünglichen URLs von anjahaile.de

## Technische Details

### Browser-Kompatibilität
- Moderne Browser (Chrome, Firefox, Safari, Edge)
- Mobile Browser optimiert
- CSS Grid und Flexbox

### Performance
- Optimierte CSS-Regeln
- Minimal inline CSS
- Schnelle Ladezeiten

### Barrierefreiheit
- Alt-Texte für alle Bilder
- Semantisches HTML
- Keyboard-Navigation
- Ausreichende Kontraste

## Wartung

### Inhalte ändern:
- Texte direkt in den HTML-Dateien bearbeiten
- Bilder durch Austausch der src-URLs
- Links durch Anpassung der href-Attribute

### Styling anpassen:
- CSS-Variablen in den style-Tags
- Konsistenz zwischen allen Blöcken beachten

## Status

✅ **Vollständig implementiert:**
- Homepage (5 Blöcke)
- About Page (4 Blöcke) 
- Services Page (4 Blöcke)
- Portfolio Page (1 Block)

🔄 **Noch zu erstellen:**
- Testimonials Page Blöcke
- Kontakt Page Blöcke
- Termin-buchen Page Blöcke
- Impressum Page Blöcke
- Datenschutz Page Blöcke

## Nächste Schritte

1. Vervollständigung aller restlichen Seiten-Blöcke
2. Testing der GoHighLevel-Integration
3. Performance-Optimierung
4. Finale Dokumentation

---

**Entwickelt für:** Dr. Anja Haile - Psychologische Psychotherapeutin  
**Ziel:** GoHighLevel-kompatible HTML-Blöcke  
**Stand:** Januar 2025