# 🚀 EINFACHE SCHRITT-FÜR-SCHRITT ANLEITUNG
## GoHighLevel Integration - Dr. Anja Haile Website

### 📋 Was Sie brauchen
- **GoHighLevel Account** (Sub-Account für Dr. Anja Haile)
- **Bilder** aus dem `assets/` Ordner
- **30-60 Minuten Zeit** für die komplette Einrichtung

---

## 🎯 SCHRITT 1: BILDER HOCHLADEN (5 Min)

### Was machen:
1. In GoHighLevel gehen: **Sites → Media Library**
2. Alle Bilder aus `assets/ASSET-LIST.md` hochladen:
   - `bdp-logo.png` 
   - Die 3 Atmosphäre-Bilder von anjahaile.de
   - Das Hauptportrait-Bild von Dr. Anja Haile

### Wo reinkopieren:
```
GoHighLevel → Sites → Media Library → Upload Files
```

### Wichtig:
- **Bildnamen notieren** - brauchen Sie in Schritt 3!
- Alle Bilder in WebP konvertieren (für bessere Performance)

---

## 🎨 SCHRITT 2: CSS EINFÜGEN (3 Min)

### Was machen:
Kompletten Inhalt von `css/global-styles.css` kopieren

### Wo reinkopieren:
```
GoHighLevel → Sites → [Ihre Website] → Settings → Custom CSS
```

### Einfach:
1. `css/global-styles.css` öffnen
2. **Alles markieren** (Ctrl+A)
3. **Kopieren** (Ctrl+C) 
4. In GHL **Custom CSS einfügen** (Ctrl+V)
5. **Speichern**

---

## 🏗️ SCHRITT 3: WEBSITE AUFBAUEN (20-30 Min)

### Methode A: SEKTION FÜR SEKTION (Empfohlen)

**Reihenfolge:**
1. Navigation Header → `sections/navigation-header.html`
2. Hero Section → `sections/hero-section.html`
3. Services → `sections/services-preview.html`
4. Atmosphäre → `sections/atmosphere-gallery.html`
5. Portfolio → `sections/portfolio-stats.html`
6. Testimonials → `sections/testimonials-grid.html`
7. Über mich → `sections/about-profile.html`
8. Kontakt → `sections/contact-form-ghl.html`
9. Booking → `sections/booking-system-ghl.html`
10. CTA → `sections/cta-section.html`
11. Footer → `sections/footer.html`

**Für jede Sektion:**
```
GoHighLevel → Sites → [Ihre Website] → Edit → + Add Element → Custom HTML
```

### Methode B: KOMPLETTE SEITE (Schneller)
```
pages/complete-homepage.html → Ganzen Inhalt kopieren → In GHL einfügen
```

---

## 🔗 SCHRITT 4: BILD-URLS ANPASSEN (10 Min)

### Was machen:
In allen HTML-Sektionen die Bild-URLs durch Ihre GHL-URLs ersetzen

### Suchen & Ersetzen:
```
ALT: src="/images/bdp-logo.png"
NEU: src="https://storage.googleapis.com/ghl-[IHR-BUCKET]/bdp-logo.png"

ALT: src="https://anjahaile.de/wp-content/uploads/..."
NEU: src="https://storage.googleapis.com/ghl-[IHR-BUCKET]/[BILDNAME]"
```

### Wo finden:
Die echten GHL-URLs finden Sie in: **Media Library → Bild anklicken → URL kopieren**

---

## 📝 SCHRITT 5: FORMULARE EINRICHTEN (15 Min)

### A) Kontaktformular
**Wo:** `forms/contact-form-ghl.html`

**Was machen:**
1. GHL-Formular erstellen: **Marketing → Forms → Create Form**
2. Felder hinzufügen:
   - Name (required)
   - Email (required) 
   - Telefon
   - Nachricht (required)
   - DSGVO-Checkbox (required)

3. **Form Embed Code** kopieren
4. In `contact-form-ghl.html` **den Platzhalter ersetzen**:
   ```html
   <!-- HIER FÜGEN SIE IHR GOHIGHLEVEL FORMULAR EIN -->
   [IHR GHL FORM CODE HIER EINFÜGEN]
   ```

### B) Booking-Kalender
**Wo:** `sections/booking-system-ghl.html`

**Was machen:**
1. GHL-Kalender erstellen: **Calendars → Create Calendar**
2. Verfügbarkeitszeiten einstellen
3. **Calendar Embed Code** kopieren
4. In JavaScript-Funktion `loadActualCalendar()` einfügen:
   ```javascript
   const calendarHTML = `[IHR GHL CALENDAR CODE]`;
   ```

---

## 🎯 SCHRITT 6: LINKS PRÜFEN (5 Min)

### Was prüfen:
- [ ] Alle internen Links funktionieren (`#hero`, `#about`, etc.)
- [ ] Telefon-Links funktionieren (`tel:+4989123456789`)
- [ ] E-Mail-Links funktionieren (`mailto:praxis@anjahaile.de`)
- [ ] Booking-Button führt zum Kalender

### Wo prüfen:
**Website Vorschau** → Alle Buttons und Links testen

---

## 📱 SCHRITT 7: MOBILE TESTEN (5 Min)

### Was testen:
- [ ] Website auf Handy öffnen
- [ ] Navigation funktioniert
- [ ] Buttons sind groß genug (44px)
- [ ] Texte sind lesbar
- [ ] Bilder laden korrekt

### Wie:
```
GoHighLevel → Sites → [Ihre Website] → Preview → Mobile View
```

---

## ✅ SCHRITT 8: LIVE SCHALTEN (2 Min)

### Was machen:
```
GoHighLevel → Sites → [Ihre Website] → Publish
```

### Domain verbinden:
```
GoHighLevel → Sites → Settings → Custom Domain → [Ihre Domain]
```

---

## 🔧 FEHLERBEHEBUNG

### Problem: "Bilder laden nicht"
**Lösung:** URLs in HTML-Code prüfen und durch echte GHL-URLs ersetzen

### Problem: "Formular funktioniert nicht"  
**Lösung:** GHL-Form Code korrekt in HTML eingefügt? Platzhalter entfernt?

### Problem: "Navigation springt nicht zu Sektionen"
**Lösung:** Alle Sektionen haben die richtigen IDs? (`id="hero"`, `id="about"`, etc.)

### Problem: "Mobile nicht responsive"
**Lösung:** CSS korrekt eingefügt? Custom CSS in GHL-Settings aktiviert?

---

## 📞 WICHTIGE EINSTELLUNGEN

### Kontaktdaten ändern:
In **allen** HTML-Dateien suchen & ersetzen:
- `+49 (0) 89 123 456 789` → Ihre Telefonnummer
- `praxis@anjahaile.de` → Ihre E-Mail
- `Maximilianstraße 1, 80539 München` → Ihre Adresse

### DSGVO-Links:
- `#impressum` → Link zu Ihrer Impressum-Seite  
- `#datenschutz` → Link zu Ihrer Datenschutz-Seite

---

## 🎉 FERTIG!

**Nach 30-60 Minuten haben Sie:**
✅ Professionelle Website in GoHighLevel  
✅ Mobile-responsive Design  
✅ DSGVO-konforme Formulare  
✅ Funktionierendes Booking-System  
✅ SEO-optimierte Struktur  

### Nächste Schritte:
1. **Testing:** Website ausgiebig testen
2. **Content:** Texte an Ihre Bedürfnisse anpassen  
3. **Tracking:** Google Analytics einrichten
4. **Automation:** GHL-Workflows für Leads einrichten

---

## 📋 CHECKLISTE

- [ ] **Schritt 1:** Bilder hochgeladen
- [ ] **Schritt 2:** CSS eingefügt
- [ ] **Schritt 3:** Sektionen/Seite aufgebaut
- [ ] **Schritt 4:** Bild-URLs angepasst
- [ ] **Schritt 5:** Formulare eingerichtet
- [ ] **Schritt 6:** Links geprüft
- [ ] **Schritt 7:** Mobile getestet
- [ ] **Schritt 8:** Live geschaltet

**🎯 Zeit gesamt: 30-60 Minuten**  
**💪 Schwierigkeit: Einfach bis Mittel**  
**🚀 Ergebnis: Professionelle Website!**