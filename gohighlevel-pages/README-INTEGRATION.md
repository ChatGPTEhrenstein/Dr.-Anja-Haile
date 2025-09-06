# GoHighLevel Integration Guide
## Dr. Anja Haile Website - Komplette GHL-kompatible Version

### 📁 Ordnerstruktur
```
gohighlevel-pages/
├── sections/           # Wiederverwendbare HTML-Sektionen für GHL-Builder
├── assets/            # Optimierte Bilder und Dateien für lokalen Upload
├── forms/             # GHL-kompatible Formulare mit CRM-Mapping
├── css/               # Externe CSS-Dateien (falls nötig)
└── pages/             # Komplette HTML-Seiten (Backup-Option)
```

### 🚀 Integration in GoHighLevel

#### Schritt 1: Assets hochladen
1. Alle Dateien aus `assets/` in GHL Media Library hochladen
2. URLs in den HTML-Sektionen durch GHL-Asset-URLs ersetzen
3. Asset-Liste in `assets/ASSET-LIST.md` beachten

#### Schritt 2: CSS-Styles integrieren
1. Styles aus `css/global-styles.css` in GHL Custom CSS einfügen
2. Oder inline CSS in den HTML-Sektionen verwenden

#### Schritt 3: Sektionen importieren
1. Jede Sektion aus `sections/` kann als Custom HTML Element eingefügt werden
2. Sektionen sind mobile-responsive und GHL-Builder kompatibel
3. Einzelne Sektionen kombinieren für komplette Seiten

#### Schritt 4: Formulare einrichten  
1. GHL-Formulare aus `forms/` verwenden
2. CRM-Mapping ist bereits vorbereitet
3. DSGVO-Checkboxen und Validierung enthalten

### 📋 Sektions-Übersicht

#### Homepage-Sektionen:
- `hero-section.html` - Hauptbereich mit CTA
- `services-preview.html` - Leistungsübersicht
- `atmosphere-gallery.html` - Atmosphäre & Eindrücke
- `cta-section.html` - Call-to-Action Bereich
- `footer.html` - Footer mit Kontaktdaten

#### Weitere Seiten:
- `about-hero.html` - Über mich Kopfbereich
- `about-profile.html` - Profil und Qualifikationen
- `services-overview.html` - Detaillierte Leistungen
- `contact-form.html` - Kontaktformular-Sektion
- `testimonials-grid.html` - Kundenbewertungen
- `portfolio-stats.html` - Erfolgsstatistiken

### 🎨 Design-System

**Farbschema:**
- Primary: #e2aa5a (Amber-600)
- Secondary: #ea580c (Orange-600) 
- Accent: #f59e0b (Amber-500)
- Background: #fefdf8 (Amber-50)
- Text: #1e293b (Slate-800)

**Schriftarten:**
- Primary: Inter (Google Fonts)
- Fallback: -apple-system, BlinkMacSystemFont, "Segoe UI"

### 📱 Mobile Responsiveness
- Alle Sektionen sind mobile-first entwickelt
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Touch-friendly Buttons (min. 44px)
- Optimierte Bildgrößen für alle Geräte

### 🔧 GHL-spezifische Anpassungen

#### Formulare:
- Native GHL-Formular-Integration
- Automatisches CRM-Mapping
- Lead-Scoring vorbereitet
- DSGVO-konforme Einwilligungen

#### Tracking:
- Google Analytics ready
- Facebook Pixel kompatibel
- GHL-Tracking integriert

#### Performance:
- Optimierte Bildgrößen
- Minimal inline CSS
- Lazy Loading für Bilder
- Core Web Vitals optimiert

### 📞 Support & Anpassungen
- Alle Sektionen sind modular aufgebaut
- Einfache Farb- und Text-Anpassungen
- Responsive Design garantiert
- GHL-Builder kompatibel

### ⚡ Quick Start
1. Assets hochladen: `assets/` → GHL Media Library
2. CSS importieren: `css/global-styles.css` → GHL Custom CSS  
3. Sektion einfügen: `sections/hero-section.html` → GHL Custom HTML
4. Formular verknüpfen: `forms/contact-form.html` → GHL Form Builder
5. Testen und anpassen

---
**Erstellt für:** Dr. Anja Haile - Psychologische Psychotherapeutin München
**Optimiert für:** GoHighLevel Website Builder 2025
**Mobile-First:** ✅ Responsive Design garantiert