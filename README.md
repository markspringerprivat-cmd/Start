# Kachelrad-Projekt

Ein statisches HTML/CSS/JavaScript-Projekt für GitHub Pages.

## Dateien

- `index.html` – Grundstruktur der Seite
- `style.css` – Layout, Rad-Optik, Blur, Perspektive und Animation
- `script.js` – Logik für das Durchschalten der sechs Themen

## Nutzung mit GitHub Pages

1. Dateien in ein GitHub-Repository hochladen.
2. Unter `Settings > Pages` den Branch auswählen, zum Beispiel `main`.
3. Als Ordner `/root` auswählen, wenn die Dateien direkt im Repository liegen.
4. Nach Änderungen die Seite hart neu laden: `Strg + Shift + R` oder `Cmd + Shift + R`.

Die Links zu CSS und JavaScript enthalten `?v=3`, damit Browser-Cache seltener die alte Version anzeigt.


## Anpassung v4

- Perlweißer Hintergrund (`#f8f6ef`)
- Größerer sichtbarer Rad-Ausschnitt, damit Schatten nicht abgeschnitten werden
- Feine schwarze Karten-Umrandung
- Cache-Busting auf `?v=4` erhöht


## Version 5

- Der sichtbare Kreis / die Rad-Hilfslinie wurde vollständig entfernt.
- Der gesamte Seitenhintergrund ist weiß.
- Die Karten bleiben scharf; die Unschärfe wurde nicht mehr auf die kompletten kleinen Karten gelegt.
- Die äußeren Kanten der kleinen Karten bekommen nur eine dezente weiße Ausblendung.
- Der Rad-Ausschnitt hat mehr Höhe, damit Schatten nicht abgeschnitten werden.
- CSS und JavaScript sind mit `?v=5` eingebunden, damit GitHub Pages weniger alte Cache-Dateien zeigt.
