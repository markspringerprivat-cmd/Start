# Gesprächsführung – Layout v17

Statische HTML/CSS/JavaScript-Version für GitHub Pages oder Einbettung per iFrame in Moodle.

## Dateien

- `index.html`
- `style.css`
- `script.js`

## Änderungen in v17

- Blindenmodus oberhalb der oberen Trennlinie ergänzt.
- Beim Einschalten wird angesagt: „Bitte auf Schaltfläche drücken, um diese vorlesen zu lassen.“
- Im Blindenmodus erhalten Banner und Textkacheln beim Hover/Fokus einen dicken neonblauen Rahmen.
- Klick auf den Banner liest nur den aktuellen Modultitel vor.
- Klick auf eine Textkachel liest den jeweiligen Textblock vor.
- Ein erneuter Klick auf dieselbe Fläche bricht die laufende Sprachausgabe ab.
- Die vorhandenen Lautsprecher-Buttons bleiben zusätzlich nutzbar.

## Moodle-Link-Verhalten

Die Modul-Links verwenden `target="_top"` plus JavaScript-Fallback, damit die Zielseite den gesamten aktiven Tab ersetzt und nicht im iFrame geöffnet wird.


## Version 17
- Blindenmodus auf obere Themenkacheln und Modulbutton erweitert.
- Lautsprecher-Buttons in den Textboxen entfernt.
- Klick im Blindenmodus liest die jeweilige Kachel / den Banner / Textblock / Modulbutton vor; erneuter Klick stoppt die Ausgabe.
