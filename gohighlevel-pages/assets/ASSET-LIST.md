# Asset-Liste für GoHighLevel Upload

## 🖼️ Zu ladende Bilder

### Logo & Branding
- **bdp-logo.png** (Local: `/app/public/images/bdp-logo.png`)
  - Größe: 50x50px, 100x100px, 200x200px (verschiedene Auflösungen)
  - Format: PNG mit Transparenz
  - Verwendung: Navigation, Footer, Branding

### Hero & Portrait Bilder
- **dr-anja-haile-portrait-main.jpg**
  - Quelle: `https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg`
  - Optimierte Größen: 800x600px, 1200x900px, 1600x1200px
  - Format: WebP (primär), JPG (fallback)
  - Verwendung: Hero-Section, About-Page

### Atmosphäre-Galerie
- **atmosphere-1.jpg**
  - Quelle: `https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-050-4eck-scaled.jpg`
  - Größe: 800x800px (quadratisch)
  - Verwendung: Atmosphäre-Galerie

- **atmosphere-2.jpg** 
  - Quelle: `https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-070_4Eck-scaled.jpg`
  - Größe: 800x800px (quadratisch)
  - Verwendung: Atmosphäre-Galerie

- **atmosphere-3.jpg**
  - Quelle: `https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-178-scaled.jpg`
  - Größe: 800x800px (quadratisch)
  - Verwendung: Atmosphäre-Galerie

## 📐 Optimierte Bildgrößen

### Hero-Images (16:9 Aspect Ratio)
- Mobile: 800x450px
- Tablet: 1200x675px  
- Desktop: 1600x900px

### Portrait-Images (4:3 Aspect Ratio)
- Mobile: 600x450px
- Tablet: 800x600px
- Desktop: 1200x900px

### Gallery-Images (1:1 Aspect Ratio)
- Standard: 800x800px
- Retina: 1600x1600px

## 🎨 Design-Assets

### Icons (über Lucide CDN - keine Uploads nötig)
- Brain, Heart, Users (Service-Icons)
- Phone, Mail, MapPin (Kontakt-Icons)  
- Calendar, Clock, Star (UI-Icons)
- Check, Arrow, Menu (Interaktion-Icons)

### Farb-Palette (CSS Custom Properties)
```css
:root {
  --primary: #e2aa5a;     /* Amber-600 */
  --secondary: #ea580c;   /* Orange-600 */
  --accent: #f59e0b;      /* Amber-500 */
  --background: #fefdf8;  /* Amber-50 */
  --text: #1e293b;        /* Slate-800 */
  --text-light: #64748b;  /* Slate-500 */
  --white: #ffffff;
}
```

## 📊 Performance-Optimierung

### WebP-Konvertierung
Alle JPG-Bilder sollten in WebP konvertiert werden:
- 30-50% kleiner als JPG
- Bessere Kompression
- Moderne Browser-Unterstützung

### Lazy Loading
Alle Bilder unter dem Fold mit `loading="lazy"` Attribut

### Responsive Images
```html
<picture>
  <source media="(min-width: 1024px)" srcset="image-desktop.webp">
  <source media="(min-width: 768px)" srcset="image-tablet.webp">
  <img src="image-mobile.webp" alt="Description" loading="lazy">
</picture>
```

## 🔄 Asset-Replacement Guide

### Nach GHL-Upload:
1. Alle Asset-URLs in HTML-Sektionen ersetzen
2. Pattern: `https://anjahaile.de/...` → `{{ghl-asset-url}}`
3. Lokale Pfade: `/images/...` → `{{ghl-asset-url}}`

### URL-Mapping Beispiel:
```
Extern: https://anjahaile.de/wp-content/uploads/2024/12/241011-Anja-Haile-Isabel-Wallace-483-1-scaled.jpg
GHL:    https://storage.googleapis.com/ghl-assets/dr-anja-haile-portrait-main.jpg
```

## ✅ Upload-Checklist

- [ ] BDP-Logo (PNG, verschiedene Größen)
- [ ] Dr. Anja Haile Portrait (WebP + JPG Fallback)
- [ ] Atmosphäre-Galerie Bilder (3x WebP + JPG)
- [ ] Asset-URLs in HTML-Sektionen aktualisieren
- [ ] Bildgrößen für verschiedene Breakpoints testen
- [ ] Alt-Texte für SEO überprüfen
- [ ] Loading-Performance mit PageSpeed testen

---
**Gesamtgröße:** ~2-3 MB (komprimiert)
**Formate:** WebP (primär), JPG (fallback), PNG (Logo)
**SEO:** Alt-Texte in Deutsch, beschreibend und keyword-optimiert