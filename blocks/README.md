# GoHighLevel Content Blocks - Dr. Anja Haile

## 📁 Ordnerstruktur für GoHighLevel Integration

Diese organisierte Struktur ermöglicht eine einfache Integration in GoHighLevel mit allen benötigten Sektionen pro Seite.

```
/blocks/
├── home/                    # Startseite
│   ├── manifest.json        # Reihenfolge & Beschreibung der Blöcke
│   └── sections/
│       ├── 01-hero-section.html
│       ├── 02-services-preview.html
│       ├── 03-atmosphere-gallery.html
│       └── 04-cta-section.html
│
├── about/                   # Über mich Seite
│   ├── manifest.json
│   └── sections/
│       ├── 01-about-hero.html
│       ├── 02-profile-section.html
│       ├── 03-credentials.html
│       └── 04-approach.html
│
├── leistungen/              # Services/Leistungen
│   ├── manifest.json
│   └── sections/
│       ├── 01-services-hero.html
│       ├── 02-cognitive-therapy.html
│       ├── 03-individual-therapy.html
│       ├── 04-couple-therapy.html
│       └── 05-pricing-info.html
│
├── portfolio/               # Portfolio & Statistiken
│   ├── manifest.json
│   └── sections/
│       ├── 01-portfolio-hero.html
│       ├── 02-success-stats.html
│       ├── 03-case-studies.html
│       └── 04-specializations.html
│
├── testimonials/            # Patientenbewertungen
│   ├── manifest.json
│   └── sections/
│       ├── 01-testimonials-hero.html
│       ├── 02-testimonials-grid.html
│       ├── 03-rating-summary.html
│       └── 04-trust-badges.html
│
├── kontakt/                 # Kontakt
│   ├── manifest.json
│   └── sections/
│       ├── 01-contact-hero.html
│       ├── 02-contact-form.html
│       ├── 03-practice-info.html
│       └── 04-map-location.html
│
├── termin-buchen/           # Terminbuchung
│   ├── manifest.json
│   └── sections/
│       ├── 01-booking-hero.html
│       ├── 02-booking-system.html
│       ├── 03-appointment-info.html
│       └── 04-preparation-guide.html
│
├── impressum/               # Rechtliche Informationen
│   ├── manifest.json
│   └── sections/
│       ├── 01-legal-header.html
│       ├── 02-impressum-content.html
│       ├── 03-professional-info.html
│       └── 04-liability-disclaimer.html
│
├── datenschutz/             # Datenschutz
│   ├── manifest.json
│   └── sections/
│       ├── 01-privacy-header.html
│       ├── 02-data-collection.html
│       ├── 03-patient-rights.html
│       ├── 04-cookies-tracking.html
│       └── 05-contact-dpo.html
│
└── global/                  # Globale Komponenten
    ├── manifest.json
    ├── header.html          # Navigation Header (alle Seiten)
    ├── footer.html          # Footer (alle Seiten) 
    ├── cookie-banner.html   # DSGVO Cookie Banner
    └── emergency-contact.html # Notfall-Kontakt
```

## 🚀 GoHighLevel Integration

### Schritt 1: Manifest-Dateien verwenden
Jede `manifest.json` enthält:
- Sektions-Reihenfolge
- Prioritäten (high, medium, low)
- Beschreibungen
- GHL-Kompatibilitäts-Info

### Schritt 2: Sektionen einbinden
1. **Global-Komponenten zuerst**: Header und Footer auf allen Seiten
2. **Seitenspezifische Sektionen**: In der Reihenfolge der manifest.json
3. **Mobile-First**: Alle Sektionen sind responsive optimiert

### Schritt 3: Anpassungen
- **Farben**: Einheitliches Farbschema (#e2aa5a, #ea580c)
- **Schriftarten**: Inter (Google Fonts)
- **Bilder**: URLs müssen auf GHL Media Library angepasst werden

## 📱 Mobile Optimierung

Alle Sektionen sind:
- ✅ Mobile-First entwickelt
- ✅ Touch-optimiert (min 44px Buttons)
- ✅ Responsive Breakpoints
- ✅ Schnell ladend

## 🔒 DSGVO Konformität

Alle Sektionen enthalten:
- ✅ DSGVO-konforme Formulare
- ✅ Datenschutz-Links
- ✅ Cookie-Banner Integration
- ✅ Rechtliche Hinweise

## 🎨 Design-System

**Farbpalette:**
- Primary: #e2aa5a (Amber-600)  
- Secondary: #ea580c (Orange-600)
- Accent: #f59e0b (Amber-500)
- Background: #fefdf8 (Warm White)
- Text: #1e293b (Slate-800)

**Typografie:**
- Primary: Inter
- Fallback: System fonts

## 📊 Verwendung der Manifest-Dateien

```json
{
  "page": "home",
  "title": "Startseite - Dr. Anja Haile", 
  "description": "Hauptseite mit Hero-Bereich und CTAs",
  "sections": [
    {
      "id": "01-hero",
      "name": "Hero Section",
      "description": "Hauptbereich mit Überschrift und CTA",
      "file": "01-hero-section.html",
      "priority": "high"
    }
  ],
  "meta": {
    "created": "2025-01-07",
    "ghl_compatible": true,
    "mobile_optimized": true,
    "gdpr_compliant": true
  }
}
```

## 🔧 Technische Details

**HTML-Standards:**
- Semantic HTML5
- Inline CSS (GHL-kompatibel)
- Touch-optimierte Events
- Accessibility Features

**Performance:**
- Optimierte Bildgrößen
- Minimal inline CSS
- Lazy Loading
- Core Web Vitals optimiert

## 📞 Support

Bei Fragen zur Integration oder Anpassung:
- Alle Sektionen sind modular aufgebaut
- Einfache Farb- und Text-Anpassungen möglich
- GHL-Builder kompatibel
- Mobile-responsive garantiert

---

**Erstellt für:** Dr. Anja Haile - Psychologische Psychotherapeutin München  
**Optimiert für:** GoHighLevel Website Builder 2025  
**Status:** ✅ Produktionsbereit