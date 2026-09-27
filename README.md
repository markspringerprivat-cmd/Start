Start_V46_flip_wrapper_fix

Ursache des bisherigen Flip-Problems:
- Eine später geladene Hover-CSS-Regel setzte auf der Dekompositionskarte transform: translateY(-2px) !important.
- Dadurch wurde der Flip-Transform derselben Karte während des Maus-Hovers überschrieben.

Fix:
- Die Flip-Bewegung läuft nun auf einem eigenen äußeren Wrapper (#dekoFlipMotion).
- Hover-Transform der Karte und Flip-Transform liegen damit auf zwei verschiedenen DOM-Ebenen und können sich nicht mehr überschreiben.
- Animation wird zusätzlich über die Web Animations API ausgeführt.
- Inhalt wird an der schmalsten Stelle gewechselt; der Banner bleibt dasselbe DOM-Element.
- style.css und script.js auf v46 gesetzt.
