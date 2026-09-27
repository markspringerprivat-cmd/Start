Start_V47_flip_inline_isolated

- Dekompositions-Flip vollständig von altem script.js/CSS entkoppelt.
- Alle Flip-IDs sind neu (V47), daher können alte Handler nicht mehr binden.
- Flip-CSS und Flip-JavaScript liegen direkt in index.html.
- Bewegung wird per requestAnimationFrame berechnet und als Inline-!important-Transform gesetzt.
- Die gesamte Karte inklusive Banner dreht bis 88°, Inhalt wechselt an der Kante, dann dreht die neue Seite von -88° auf 0°.
- Banner bleibt dasselbe DOM-Element und wird beim Inhaltswechsel nicht verschoben.
