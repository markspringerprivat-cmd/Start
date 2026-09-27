Start_V45_flip_banner_crop

Änderungen:
- Flip-Effekt komplett neu aufgebaut: ganze Karte klappt horizontal zusammen, Inhalt wird an der Kante gewechselt, danach klappt die Karte wieder auf.
- Kein Spiegeltext und keine Abhängigkeit mehr von rotateY/backface-visibility.
- Banner der Dekompositionskarte ist ein einziges gemeinsames Element und kann beim Flip nicht mehr springen.
- Alle vier Bannerbilder physisch auf 2172×340 zugeschnitten; der Ausschnitt ist nach oben versetzt und nicht mehr von object-position-Prozentwerten abhängig.
- Startseite lädt style.css/script.js mit v=45, damit Browser/Moodle nicht die alte Version aus dem Cache nimmt.
